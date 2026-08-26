import User from "@/model/user";

export const Contactus = async (data) =>{
    try{
         const {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
    }=data;

    if (!firstName || !email || !message){
        throw new Error("First Name , Email and Message is required");
    }

    // now save data into the database

    const query = await User.create({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message
    });
    return query
    }catch(error){
        throw new Error(error.message);
    }
};