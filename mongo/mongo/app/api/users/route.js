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
        const { name, email, password } = await request.json()
        // Check if the email already exists in the db

        const existingUserEmail = await User.findOne({ email })
        if (existingUserEmail) {
            return new NextResponse(JSON.stringify({message:"User email already exists"}), {status: 400})
        }

        const newUser = new User({ name, email, password })
        
        await connectToDatabase()
        await newUser.save()

        return new NextResponse(JSON.stringify({message: "User successfully created!", user: newUser}), {status: 201})

    } catch(err) {
        console.error(err.message)
        return new NextResponse(JSON.stringify({message:"Server error"}), {status:500})
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

export async function DELETE(request, { params }) {
    try {
        await connectToDatabase()
        const { id } = await params

        if (!Types.ObjectId.isValid(id) || !id) {
            return new NextResponse(JSON.stringify({
                message:"Invalid or id not found!"
            }), {status:400})
        }

        const deletedUser = await User.findByIdAndDelete(
            new Types.ObjectId(id)
        )

        if (!deletedUser) {
            return new NextResponse(JSON.stringify({ message: "User could not be deleted"}), {status: 400})
        }

        // Success response on successfully deleting
        return new NextResponse(JSON.stringify({
            message:"User successfully deleted!"
        }), {status: 200})

    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Error deleting user"}, {status:500}))
    }
}
