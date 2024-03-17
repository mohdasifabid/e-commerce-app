import authenticateUser from "@/app/lib/authenticaton";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
    
    if (req.method === "POST") {
        const { email, password } = req.body;
        const token = authenticateUser(email, password);
        if (token) {
            res.status(200).json({ token });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } else {
        res.status(405).end();
    }
};

export default handler;
