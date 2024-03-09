import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();
const main =async () => {
    const createUser = await prisma.post.create({
        data:{
            title:"This is title",
            published :true ,
            authorId:1,
            postCategory: {
                create:[
                    {
                        categoryId:3
                    },
                    {
                        categoryId:4
                    },
                    {
                        categoryId:5
                    },
                ]
            //    create:{
            //     categoryId:1
            //     // category:{
            //     //     connect:{
            //     //         id:2
            //     //     }
            //     // }
            //    }
            }

        },
        include:{
            postCategory:true
        }
    })
    
    console.log(createUser)
}
main();