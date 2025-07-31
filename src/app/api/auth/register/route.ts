import dbConnect from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const { username, email, password, mobilenumber} = await req.json();
        
        if(!username || !email || !password){
            return NextResponse.json(
                {message: "All fields are required"},
                {status: 400}
            )
        }
        console.log('Registering user:', { username, email, mobilenumber });
        await dbConnect();

        const existingUser = await User.findOne({email});
        if(existingUser){
            return NextResponse.json(
                {message: "User already exists"},
                {status: 400}
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            mobilenumber,
        });

        await newUser.save();
        console.log(newUser);

        return NextResponse.json(
            {message: "User created successfully"},
            {status: 201}
        );
    } catch (error) {
        console.error('REGISTRATION_ERROR', error);
        return NextResponse.json(
            { message: "An internal server error occurred." },
            { status: 500 }
        );
    }
}