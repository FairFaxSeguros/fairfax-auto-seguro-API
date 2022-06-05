import { faker } from '@faker-js/faker';
import { Customer } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { client } from '../../src/database.js';

export function generate() {
  const cpfNumber = faker.datatype.number({
    min: 10000000000,
    max: 99999999999,
  });
  return {
    cpf: cpfNumber.toString(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDate: faker.date.birthdate({ min: 18, mode: 'age' }),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

export async function create(customer: Omit<Customer, 'id'>) {
  const hashedPassword = bcrypt.hashSync(customer.password, 10);
  return client.customer.create({
    data: { ...customer, password: hashedPassword },
  });
}

export async function generateToken(customerId: number) {
  const customer = await client.customer.findUnique({
    where: { id: customerId },
  });
  if (!customer) return null;
  return jwt.sign({ customerId }, process.env.JWT_SECRET);
}
