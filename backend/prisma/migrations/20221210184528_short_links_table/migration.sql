-- CreateTable
CREATE TABLE "ShortLinks" (
    "short" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShortLinks_pkey" PRIMARY KEY ("short")
);
