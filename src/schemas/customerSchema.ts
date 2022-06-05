import { Customer } from '@prisma/client';
import Joi from 'joi';

export const newCustomer = Joi.object<Omit<Customer, 'id'>>({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  birthDate: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  cpf: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),
});

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
