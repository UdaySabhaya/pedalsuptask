/*
  Warnings:

  - You are about to drop the column `userId` on the `RentalRequest` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "RentalRequest" DROP CONSTRAINT "RentalRequest_userId_fkey";

-- AlterTable
ALTER TABLE "RentalRequest" DROP COLUMN "userId";
