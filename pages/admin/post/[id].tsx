import type { Post } from "@prisma/client";
import prisma from "lib/prisma";
import { useSession } from "next-auth/client";

type StaticPath = {
  params: {
    id: string;
  };
};

type Props = {
  post: Post;
};

export default function PostEditor(props: Props) {
  const [session] = useSession();

  return session ? (
    <div>{props.post.title}</div>
  ) : (
    <div>
      <h1>Oops...</h1>
      <h2>Looks like you don't have permission to access this page. You can log in right <a>here</a></h2>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.id.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(path: StaticPath) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(path.params.id),
    },
  });

  return { props: { post } };
}
