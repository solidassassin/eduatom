import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });
  res.json(posts);
}
