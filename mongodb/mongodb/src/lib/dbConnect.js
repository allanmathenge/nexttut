import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI){
    throw new Error("Please define MONGO_URI env variable")
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn:null, promise:null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        cached.promise = (await mongoose.connect(MONGO_URI, opts)).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    console.log("Mongodb connected successfully")
    return cached.conn
}

export default dbConnect