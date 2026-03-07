import { PrismaClient } from "@prisma/client/extension";


const prisma = new PrismaClient(
    {
            log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],

    }
);

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

const disconnectDB = async () => {
    try {
        await prisma.$disconnect();
    } catch (error) {
        console.error('Error disconnecting from the database:', error);
        throw error;
    }
};


export { prisma, connectDB, disconnectDB };