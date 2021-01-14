import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";

// PUT /api/publish/:id
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    const postId = req.query.id;
    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: { published: true },
    });
    res.json(post);
  } else {
    res.status(401);
  }
};
