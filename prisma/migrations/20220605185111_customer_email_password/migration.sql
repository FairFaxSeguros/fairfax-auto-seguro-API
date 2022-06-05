/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Customer_cpf_key";

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "cpf" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
