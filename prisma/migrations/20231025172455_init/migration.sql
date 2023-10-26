/*
  Warnings:

  - Added the required column `imagesrc` to the `Livre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Livre" ADD COLUMN     "imagesrc" VARCHAR(255) NOT NULL;
