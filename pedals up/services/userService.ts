import { User } from "../interface/interface";
import { prisma } from "../model/db";
import bcrypt from "bcrypt"

const signupUser = async (data: User) => {

    console.log("hi");
    const EmailExists = await prisma.users.findFirst({
        where: {
            email:data.email
        }
    })
    
    if (EmailExists) {
        throw new Error("Email Already Exist");
    }
    const password = await bcrypt.hash(data.password, 10)
    const UserData = await prisma.users.create({
        data: {
            name: data.name,
            email: data.email,
            password: password,
            userType: data.userType
        }
    })
    console.log(UserData);
    
    return UserData;
}

const login = async (data: User) => {

    if (!data.password) {
        console.log("Invalid Password");
    }
    const findUser = await prisma.users.findFirst({
        where: {
            email: data.email
        }
    })
    if (!findUser) {
        throw console.error("User Not Found");
    }
    const { name, id ,userType} = findUser;
    const loggedUser = {
        name: name,
        id: id,
        email: data.email,
        userType:userType
    }
    if (!await bcrypt.compare(data.password, findUser.password)) {
        console.log("Password not Matched");
    }
    return loggedUser;
}


export const userService = {
    signupUser, login
}