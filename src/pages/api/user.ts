import consola from "consola";
import type { NextApiRequest, NextApiResponse } from "next";

import { getUser } from "@/lib/server/api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await getUser();
        res.status(200).json(data);
    } catch (error) {
        consola.error("error fetching user");
        consola.error(error);
    }
};

export default handler;
