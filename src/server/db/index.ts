import { PrismaClient } from "@prisma/client/extension";


const globalPrisma = globalThis as unknown as {
  prisma : PrismaClient | undefined;
}

const prisma = globalPrisma.prisma ?? new PrismaClient({ 
  log : ["query", "error"],
 });
 
 if(process.env.NODE_ENV !== "production") {
  globalPrisma.prisma == prisma
 }