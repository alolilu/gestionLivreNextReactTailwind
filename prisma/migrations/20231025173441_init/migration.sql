/*
  Warnings:

  - Made the column `imagesrc` on table `Livre` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Livre" ALTER COLUMN "imagesrc" SET NOT NULL;
