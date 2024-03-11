import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const rawQueries = async() => {
    const posts = await prisma.$queryRaw `SELECT * FROM "Post" WHERE true`;
    console.log(posts)
    await prisma.$queryRaw`TRUNCATE TABLE "User" CASCADE`
}

rawQueries();