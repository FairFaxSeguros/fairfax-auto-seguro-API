import { Request, Response } from 'express';
import * as customerService from '../services/customerService.js';
import * as vehicleService from '../services/vehicleService.js';

export async function create(req: Request, res: Response) {
  const { cpf, ...data } = req.body;
  const { id: customerId } = await customerService.findByCPF(cpf);
  await vehicleService.create({ ...data, customerId });
  res.sendStatus(201);
}
