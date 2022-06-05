import { Customer } from '@prisma/client';
import dayjs from 'dayjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { client } from '../database.js';
import { httpErrors } from '../errors/HttpError.js';

function calculateAge(birthDate: string | Date): number {
  const date = dayjs(birthDate);
  const now = dayjs();
  return now.diff(date, 'year');
}

export async function create(data: Omit<Customer, 'id'>) {
  const age = calculateAge(data.birthDate);
  if (age < 18) {
    throw httpErrors.forbidden('You must be 18 or older to create a customer');
  }

  const alreadyExists = await client.customer.findUnique({
    where: { email: data.email },
  });
  if (alreadyExists) throw httpErrors.conflict('Email already in use');

  const birthDate = new Date(data.birthDate);
  const hashedPassword = bcrypt.hashSync(data.password, 10);
  const hashedCPF = bcrypt.hashSync(data.cpf, 10);

  return client.customer.create({
    data: { ...data, birthDate, password: hashedPassword, cpf: hashedCPF },
  });
}

export async function findUnique(id: number) {
  const customer = await client.customer.findUnique({ where: { id } });
  if (!customer) throw httpErrors.notFound('Customer not found');
  return customer;
}

interface LoginData {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginData) {
  const customer = await client.customer.findUnique({ where: { email } });
  if (!customer) throw httpErrors.notFound('Email or Password incorrect');
  const isValid = bcrypt.compareSync(password, customer.password);
  if (!isValid) throw httpErrors.unauthorized('Email or Password incorrect');

  return jwt.sign({ customerId: customer.id }, process.env.JWT_SECRET);
}
