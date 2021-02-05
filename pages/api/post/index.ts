import prisma from "../../../lib/prisma";
import formatResponse from "utils/response";
import { getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";

// POST /api/post
// Required fields in body: title, content
export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getSession({ req });
  if (session) {
    const { title, content } = req.body;
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
    const result = formatResponse(post);
    res.json(result);
  } else {
    res.status(401).json({});
  }
};
