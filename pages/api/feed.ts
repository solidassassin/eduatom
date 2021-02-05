import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import formatResponse from "utils/response";

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });
  posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const result = posts.map((post) => formatResponse(post));
  res.json(result);
};
