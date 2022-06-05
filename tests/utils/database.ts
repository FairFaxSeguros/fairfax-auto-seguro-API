import { client } from '../../src/database.js';

export async function clearDatabase() {
  await client.$executeRawUnsafe('TRUNCATE TABLE "Vehicle" CASCADE');
  await client.$executeRawUnsafe('TRUNCATE TABLE "Customer" CASCADE');
}
export async function disconnect() {
  await client.$disconnect();
}
export async function findVehicleByLicensePlate(licensePlate: string) {
  return client.vehicle.findUnique({ where: { licensePlate } });
}
export async function findCustomerByCPF(cpf: string) {
  return client.customer.findUnique({ where: { cpf } });
}
