import { faker } from '@faker-js/faker';

export function generate() {
  return {
    name: faker.vehicle.vehicle(),
    licensePlate: faker.vehicle.vrm(),
    purchaseDate: faker.date.past(),
  };
}
