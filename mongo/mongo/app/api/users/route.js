import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

// To verify if the requested mongodb id is valid
const ObjectId = require("mongoose").Types.ObjectId 

export async function GET() {
    try {
        await connectToDatabase()
        const users = await User.find()

        return new NextResponse(JSON.stringify(users), {status: 200})

    } catch (err){
        return new NextResponse("Error fetching users" + err, {status: 500})
    }
}

export async function POST(request) {
    try {
        await connectToDatabase()
        const { name, email, password } = await request.json()
        const newUser = new User({ name, email, password })

        await newUser.save()
        return new NextResponse.json(newUser, {status: 201})

    } catch(err) {
        console.error(err.message)
    }
}

export async function PATCH(request) {
    try {
        await connectToDatabase()
        const { userId, userEmail } = await request.json()

        if (!userId || !userEmail) {
            return new NextResponse(
                JSON.stringify({ message: "id and username required "}), {status: 400 }
            )
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid userId" }))
        }

        const updatedUser = await User.findOneAndUpdate(
            {_id: new ObjectId(userId)},
            { email: userEmail},
            { new: true}
        )

        if (!updatedUser) {
            return new NextResponse(
                JSON.stringify({ message: "Error updating user"}), {status: 400 }
            )
        }

        // return success response
        return new NextResponse(
            JSON.stringify({
                message: "User successfully updated!",
                user: updatedUser,
            }),
            { status: 200 }
        )

    } catch(err) {
        console.error(err, { status: 500})
    }
}
