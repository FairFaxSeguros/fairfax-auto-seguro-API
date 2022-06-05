import { Vehicle } from '@prisma/client';
import { client } from '../database.js';
import { httpErrors } from '../errors/HttpError.js';

export async function findByLicensePlate(licensePlate: string) {
  return client.vehicle.findUnique({
    where: { licensePlate },
  });
}

export async function create(data: Omit<Vehicle, 'id'>) {
  const plateAlredyInUse = await findByLicensePlate(data.licensePlate);
  if (plateAlredyInUse) {
    throw httpErrors.conflict('License plate already in use');
  }

  const purchaseDate = new Date(data.purchaseDate);
  return client.vehicle.create({
    data: { ...data, purchaseDate },
  });
}
