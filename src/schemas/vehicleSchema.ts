import { Vehicle } from '@prisma/client';
import Joi from 'joi';

interface VehicleSchema extends Omit<Vehicle, 'id'| 'customerId'> {
  cpf: string;
}

export const newVehicle = Joi.object<VehicleSchema>({
  name: Joi.string().required(),
  licensePlate: Joi.string().required(),
  purchaseDate: Joi.date().required(),
  cpf: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),
});
