import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
  const posts = await prisma.post.findMany({
    where: { published: false },
  });
  res.json(posts);
}
