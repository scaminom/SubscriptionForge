import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config();

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

export const disconnectFromDatabase = async () => {
  await prisma.$disconnect();
  console.log("Disconnected from the database");
};

export default prisma;
