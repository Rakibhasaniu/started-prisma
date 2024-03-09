import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const relationalquires = async() => {
    const result = await prisma.user.findUnique({
        where:{
            id:1
        }
    }).post()
    console.log(result)
}
relationalquires();