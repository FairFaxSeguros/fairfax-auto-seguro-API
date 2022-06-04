import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../src/app';
import * as utilsDatabase from '../utils/database.js';

const agent = supertest(app);
beforeAll(async () => {
  await utilsDatabase.clearDatabase();
});

afterAll(async () => {
  await utilsDatabase.disconnect();
});

describe('POST /sign-up', () => {
  it('should return 201', async () => {
    const cpfNumber = faker.datatype.number({ min: 100000000, max: 99999999999 });
    const customer = {
      cpf: cpfNumber.toString(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthDate: faker.date.birthdate({ min: 18, mode: 'age' }),
    };
    const response = await agent.post('/customers').send(customer);
    expect(response.status).toBe(201);
  });
});
