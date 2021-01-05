import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.post.findMany({
    where: { published: false },
  });
  res.json(posts);
}
