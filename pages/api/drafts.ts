import prisma from "../../lib/prisma";
import { getSession } from "next-auth/client";
import formatResponse from "utils/response";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getSession({ req });

  if (session) {
    const posts = await prisma.post.findMany({
      where: { published: false },
    });
    posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    const result = posts.map((post) => formatResponse(post));
    res.json(result);
  } else {
    res.status(401).json([]);
  }
};
