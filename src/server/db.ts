import { PrismaClient } from "@prisma/client";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const NODE_ENV = publicRuntimeConfig.NODE_ENV

// import { env } from "~/env";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (NODE_ENV !== "production") globalForPrisma.prisma = prisma;
