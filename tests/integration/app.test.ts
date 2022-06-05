import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import app from '../../src/app';
import * as utilsDatabase from '../utils/database.js';
import * as customerFactory from '../factories/customerFactory.js';

const agent = supertest(app);
beforeEach(async () => {
  await utilsDatabase.clearDatabase();
});

afterAll(async () => {
  await utilsDatabase.disconnect();
});

describe('POST /customers', () => {
  it('should return 201', async () => {
    const customer = customerFactory.generate();
    const response = await agent.post('/customers').send(customer);
    expect(response.status).toBe(201);
    const customerCreated = await utilsDatabase.findCustomerByCPF(customer.cpf);
    expect(customerCreated).toBeTruthy();
  });
});

describe('POST /vehicles', () => {
  it('should return 201', async () => {
    const customer = await customerFactory.create();
    const vehicle = {
      cpf: customer.cpf,
      name: faker.vehicle.vehicle(),
      licensePlate: faker.vehicle.vrm(),
      purchaseDate: faker.date.past(),
    };
    const response = await agent.post('/vehicles').send(vehicle);
    expect(response.status).toBe(201);
    const vehicleCreated = await utilsDatabase.findVehicleByLicensePlate(
      vehicle.licensePlate
    );
    expect(vehicleCreated).toBeTruthy();
  });
});
