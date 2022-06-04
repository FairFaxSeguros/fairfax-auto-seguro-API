import { Router } from 'express';
import * as customerController from '../controllers/customerController.js';
import validateSchema from '../middlewares/validateSchema.js';
import * as customerSchema from '../schemas/customerSchema.js';

const routes = Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});
routes.post(
  '/customers',
  validateSchema(customerSchema.newCustomer, 'body'),
  customerController.create
);

export default routes;
