import prisma from "lib/prisma";
import { getSession } from "next-auth/client";
import formatResponse from "utils/response";
import type { NextApiRequest, NextApiResponse } from "next";

// PUT /api/publish/:id
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getSession({ req });
  if (session) {
    const postId = req.query.id;
    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: {
        published: true,
        createdAt: new Date(),
      },
    });

    const result = formatResponse(post);
    res.json(result);
  } else {
    res.status(401).json({});
  }
};
