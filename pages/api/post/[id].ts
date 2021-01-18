import prisma from "../../../lib/prisma";
import formatResponse from "utils/response";
import { getSession, Session } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const postId = Number(req.query.id);

  if (isNaN(postId)) {
    res.status(400).json({});
    return;
  }

  if (req.method === "GET") {
    handleGet(postId, res, session);
  } else if (req.method === "DELETE") {
    handleDelete(postId, res, session);
  } else if (req.method === "PUT") {
    handlePut(postId, req, res, session);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/post/:id
async function handleGet(
  postId: number,
  res: NextApiResponse,
  session: Session | null
) {
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    res.status(404).json({});
  } else if (session || post.published) {
    const result = formatResponse(post);
    res.json(result);
  } else {
    res.status(401).json({});
  }
}

// DELETE /api/post/:id
async function handleDelete(
  postId: number,
  res: NextApiResponse,
  session: Session | null
) {
  try {
    if (session) {
      const post = await prisma.post.delete({
        where: { id: postId },
      });

      const result = formatResponse(post);
      res.json(result);
    } else {
      res.status(401).json({});
    }
  } catch (RecordNotFound) {
    res.status(404).json({});
  }
}

// PUT /api/post/:id
async function handlePut(
  postId: number,
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session | null
) {
  const { title, content } = req.body;
  try {
    if (session) {
      const post = await prisma.post.update({
        where: { id: postId },
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
  } catch (RecordNotFound) {
    res.status(404).json({});
  }
}
