import supertest from 'supertest';
import app from '../../src/app';
import * as utilsDatabase from '../utils/database.js';
import * as customerFactory from '../factories/customerFactory.js';
import * as vehicleFactory from '../factories/vehicleFactory.js';

const agent = supertest(app);
beforeEach(async () => {
  await utilsDatabase.clearDatabase();
});

afterAll(async () => {
  await utilsDatabase.disconnect();
});

describe('POST /signup', () => {
  it('should return 201', async () => {
    const customer = customerFactory.generate();
    const response = await agent.post('/signup').send(customer);
    expect(response.status).toBe(201);
    const customerCreated = await utilsDatabase.findCustomerByEmail(
      customer.email
    );
    expect(customerCreated).toBeTruthy();
  });
});

describe('POST /login', () => {
  it('should return 200', async () => {
    const customer = customerFactory.generate();
    await customerFactory.create(customer);
    const { email, password } = customer;
    const response = await agent.post('/login').send({ email, password });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});

describe('POST /vehicles', () => {
  it('should return 201', async () => {
    const customer = await customerFactory.create(customerFactory.generate());
    const token = await customerFactory.generateToken(customer.id);
    const vehicle = vehicleFactory.generate();
    const response = await agent
      .post('/vehicles')
      .send(vehicle)
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(201);
    const vehicleCreated = await utilsDatabase.findVehicleByLicensePlate(
      vehicle.licensePlate
    );
    expect(vehicleCreated).toBeTruthy();
  });
});
