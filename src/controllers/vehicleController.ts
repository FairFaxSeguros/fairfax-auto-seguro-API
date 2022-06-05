import { Request, Response } from 'express';
import * as vehicleService from '../services/vehicleService.js';

export async function create(req: Request, res: Response) {
  const { cpf, ...data } = req.body;
  const { customer } = res.locals;
  await vehicleService.create({ ...data, customerId: customer.id });
  res.sendStatus(201);
}
