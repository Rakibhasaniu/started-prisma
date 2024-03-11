import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



const batchTransaction = async () => {
    const createUser =prisma.user.create({
        data:{
            username:"sakieb khan2",
            email:"sakib32@gmail.com"
        }
    })
    const updateUser = prisma.user.update({
        where:{
            id:4
        },
        data:{
            age:30
        }
    })
    const [userData,updatedData] = await prisma.$transaction([
        createUser,
        updateUser,
    ])
    console.log(userData,updatedData)
}
batchTransaction();