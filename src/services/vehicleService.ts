import { Vehicle } from '@prisma/client';
import { client } from '../database.js';

export async function create(data: Omit<Vehicle, 'id'>) {
  const purchaseDate = new Date(data.purchaseDate);
  return client.vehicle.create({
    data: { ...data, purchaseDate },
  });
}
