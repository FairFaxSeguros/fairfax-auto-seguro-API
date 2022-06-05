import { faker } from '@faker-js/faker';
import { client } from '../../src/database.js';

export function generate() {
  const cpfNumber = faker.datatype.number({ min: 100000000, max: 99999999999 });
  return {
    cpf: cpfNumber.toString(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDate: faker.date.birthdate({ min: 18, mode: 'age' }),
  };
}

export async function create() {
  const customer = generate();
  return client.customer.create({
    data: customer,
  });
}
