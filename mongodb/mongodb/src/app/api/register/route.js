import dbConnect from "@/lib/dbConnect";
import User from "../../models/User";

export default async function GET(req, res) {
    if (req.method === 'POST') {
        try {
            await dbConnect()

            const { name, email, password } = req.body

            if (!name || !email || !password) {
                return res.status(400).json({ error: "All fields are required!"})
            }

            const user = new User({ name, email, password })

            await user.save()

            res.status(201).json({ message: "User successfully registered!", user})
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Inter server error"})
        }
    } else {
        res.status(405).json({ error: "Method not allowed! "})
    }
}