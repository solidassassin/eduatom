import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import formatResponse from "utils/response";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });

  const result = posts.map((post) => formatResponse(post));
  res.json(result);
};
