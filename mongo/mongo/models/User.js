import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User

// mongoose.models.User --> Checks whether user exists if they exist, we use that connection channel
// mongoose.model("User", UserSchema) if no user exists --> we create a new user model