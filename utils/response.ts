import type { Post } from "@prisma/client";

const formatResponse = (post: Post | null) => {
  if (!post) return {};
  return {
    id: post.id,
    createdDate: post.createdAt.toLocaleDateString(),
    createdTime: post.createdAt.toLocaleTimeString(),
    updatedDate: post.updatedAt.toLocaleDateString(),
    updatedTime: post.updatedAt.toLocaleTimeString(),
    title: post.title,
    content: post.content,
    published: post.published,
  };
};

export default formatResponse;
