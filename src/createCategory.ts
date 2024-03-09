import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

const main = async () => {
    const createCategory = await prisma.category.create({
        data: {
            name:"Cloud Computing",

        }
    })
}
main();