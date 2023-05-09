/*
  Warnings:

  - Added the required column `ZAGS` to the `Forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alcohol` to the `Forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `Forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `will` to the `Forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Forms" ADD COLUMN     "ZAGS" BOOLEAN NOT NULL,
ADD COLUMN     "alcohol" TEXT NOT NULL,
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "will" BOOLEAN NOT NULL;
