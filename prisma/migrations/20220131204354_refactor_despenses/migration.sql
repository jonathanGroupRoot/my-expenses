/*
  Warnings:

  - The `status` column on the `despenses` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "DespensesStatus" AS ENUM ('active', 'inactive');

-- AlterTable
ALTER TABLE "despenses" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "repetitions" DROP NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "DespensesStatus" NOT NULL DEFAULT E'active',
ALTER COLUMN "finish_status" DROP NOT NULL;
