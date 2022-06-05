import { Router } from 'express';
import * as customerController from '../controllers/customerController.js';
import * as vehicleController from '../controllers/vehicleController.js';
import validateSchema from '../middlewares/validateSchema.js';
import * as customerSchema from '../schemas/customerSchema.js';
import * as vehicleSchema from '../schemas/vehicleSchema.js';

const routes = Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});
routes.post(
  '/customers',
  validateSchema(customerSchema.newCustomer, 'body'),
  customerController.create
);

routes.post(
  '/vehicles',
  validateSchema(vehicleSchema.newVehicle, 'body'),
  vehicleController.create
);

export default routes;
