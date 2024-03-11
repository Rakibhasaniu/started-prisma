import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const aggregate = async () => {
    const  result = await prisma.user.aggregate({
        // _avg:{
        //     age:true
        // }
        // _count:{
        //     age:true
        // }
        // _sum:{
        //     age:true
        // },
        _min:{
            age:true
        }
        // _max:{
        //     age:true
        // }
    })
    console.log(result)
} 

aggregate();