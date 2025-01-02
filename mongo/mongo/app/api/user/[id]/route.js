import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

// To verify if the requested mongodb id is valid
const ObjectId = require("mongoose").Types.ObjectId

export async function GET(request, { params }) {
    const { id } = await params
    
    if (!id || !Types.ObjectId.isValid(id)) {
        return new NextResponse(JSON.stringify({ message: "Invalid user id"}))
    }

    try {
        await connectToDatabase()
        const user = await User.findOne({ _id: id})

        return new NextResponse(JSON.stringify( user ), {status: 200})

    } catch (err) {

        return new NextResponse("Error fetching user" + err, {status: 500})
    }
}

export async function DELETE(request, { params }) {

    const { id } = await params
    
    try {
        await connectToDatabase()

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