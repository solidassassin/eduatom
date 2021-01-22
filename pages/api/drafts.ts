import prisma from "../../lib/prisma";
import { getSession } from "next-auth/client";
import formatResponse from "utils/response";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    const posts = await prisma.post.findMany({
      where: { published: false },
    });

    const result = posts.map((post) => formatResponse(post));
    res.json(result);
  } else {
    res.status(401).json([]);
  }
};
