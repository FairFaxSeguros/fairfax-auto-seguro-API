/*
  Warnings:

  - A unique constraint covering the columns `[licensePlate]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_licensePlate_key" ON "Vehicle"("licensePlate");
