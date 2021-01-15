import prisma from "../../lib/prisma";
import { getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session) {
    const posts = await prisma.post.findMany({
      where: { published: false },
    });
    res.json(posts);
  } else {
    res.status(401);
  }
  res.end();
};
