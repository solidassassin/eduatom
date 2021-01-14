import prisma from "../../lib/prisma";
import { useSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const session = useSession();

  if (session) {
    const posts = await prisma.post.findMany({
      where: { published: false },
    });
    res.json(posts);
  } else {
    res.status(401);
  }
};
