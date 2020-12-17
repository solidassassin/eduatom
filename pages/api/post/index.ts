import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title, content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });
  res.json(result);
}
