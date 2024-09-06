
// https://<your-site.com>/api/revalidate?secrect=<token>

// http://localhost:3000/api/revalidate?path=/&secrect=c78c68144cdebcd717fdc69659e54b64

// Route handler for the revalidation request

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secrect !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: "Invalid token" })
    }

    // use try catch but in dev mode we will not use try-catch to have a detailed error
    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({ revalidated: true })
}