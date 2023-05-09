-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Forms" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,

    CONSTRAINT "Forms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Forms_id_key" ON "Forms"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Forms_userId_key" ON "Forms"("userId");

-- AddForeignKey
ALTER TABLE "Forms" ADD CONSTRAINT "Forms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
