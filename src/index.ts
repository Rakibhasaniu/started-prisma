import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main =async () => {
    const result = await prisma.post.create({
        data:{
            title:"this is title",
            published:true,
            author:"Rakib hasan"
        }
    })
}
main();