import { Request, Response } from 'express';
import * as customerService from '../services/customerService.js';

export async function create(req: Request, res: Response) {
  await customerService.create(req.body);
  res.sendStatus(201);
}
