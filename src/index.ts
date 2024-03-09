import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();
const main =async () => {
    // const createUser = await prisma.user.create({
    //     data:{
    //         username:"Sohana Shitol",
    //         email: "sohana@gmail.com",
    //         role:UserRole.user
    //     }
    // })
    const createProfile = await prisma.profile.create({
        data:{
            bio:"This Is Bio",
            userId:2
        }
    })
    console.log(createProfile)
}
main();