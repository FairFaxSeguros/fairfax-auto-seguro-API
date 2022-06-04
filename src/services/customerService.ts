import { Customer } from '@prisma/client';
import dayjs from 'dayjs';
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
  const birthDate = new Date(data.birthDate);
  return client.customer.create({
    data: { ...data, birthDate },
  });
}