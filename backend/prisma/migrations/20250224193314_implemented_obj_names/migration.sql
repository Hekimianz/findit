/*
  Warnings:

  - Made the column `obj1X` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj1Y` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj2X` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj2Y` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj3X` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj3Y` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj1Name` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj2Name` on table `Level` required. This step will fail if there are existing NULL values in that column.
  - Made the column `obj3Name` on table `Level` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Level" ALTER COLUMN "obj1X" SET NOT NULL,
ALTER COLUMN "obj1Y" SET NOT NULL,
ALTER COLUMN "obj2X" SET NOT NULL,
ALTER COLUMN "obj2Y" SET NOT NULL,
ALTER COLUMN "obj3X" SET NOT NULL,
ALTER COLUMN "obj3Y" SET NOT NULL,
ALTER COLUMN "obj1Name" SET NOT NULL,
ALTER COLUMN "obj2Name" SET NOT NULL,
ALTER COLUMN "obj3Name" SET NOT NULL;
