
// http://localhost:3000/api/revalidate?path=/&secrect=1edeb8685cad987006eedf1ee5e187d0

// route handler for the revalidation request

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secrect !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: "Invalid token"})
    }

    const path = req.query.path as string
    await res.revalidate(path)
    return res.json({ revalidated: true})
}