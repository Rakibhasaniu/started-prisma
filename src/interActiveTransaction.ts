import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interActiveTransaction = async() => {
    const result = await prisma.$transaction(async (transaction)  => {
        const getAllPost = await transaction.post.findMany({
            where: { published: true },
        })
        const countUser = await transaction.user.count();
        const updateUser = await transaction.user.update({
            where:{
                id:80
            },
            data:{
                age:255
            }
        })
        return {
            getAllPost,
            countUser,
            updateUser

        }
    })
    console.log(result)
}

interActiveTransaction();