-- AlterTable
ALTER TABLE "despenses" ALTER COLUMN "due_date" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "users_token" (
    "id" TEXT NOT NULL,
    "expires_date" TIMESTAMP(3) NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_token" ADD CONSTRAINT "users_token_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
