import { Vehicle } from '@prisma/client';
import Joi from 'joi';

export const newVehicle = Joi.object<Omit<Vehicle, 'id' | 'customerId'>>({
  name: Joi.string().required(),
  licensePlate: Joi.string().required(),
  purchaseDate: Joi.date().required(),
});
