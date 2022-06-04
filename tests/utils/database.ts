import { client } from '../../src/database.js';

export async function clearDatabase() {
  await client.$executeRawUnsafe('TRUNCATE TABLE "Customer" CASCADE');
}
export async function disconnect() {
  await client.$disconnect();
}
