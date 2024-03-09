import { PrismaClient } from "@prisma/client";


const prisma =new PrismaClient();

const main = async () => {
    const createProfile = await prisma.profile.create({
        data:{
            bio:"This Is Bio",
            userId:1
        }
    })
    
}

main();