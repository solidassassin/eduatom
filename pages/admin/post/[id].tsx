import prisma from "lib/prisma";
import { getSession } from "next-auth/client";
import type { Post } from "@prisma/client";
import type { Session } from "next-auth";
import type { NextPageContext } from "next";

type StaticPath = {
  params: {
    id: string;
  };
};

type Props = {
  post: Post;
  session: Session;
};

export default function PostEditor(props: Props) {
  return props.session ? (
    <div>{props.post.title}</div>
  ) : (
    <div>
      <h1>Oops...</h1>
      <h2>
        Looks like you don't have permission to access this page. You can log in
        right <a>here</a>
      </h2>
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

export async function getStaticProps(context: NextPageContext & StaticPath) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(context.params.id),
    },
  });

  return {
    props: {
      post,
      session: await getSession(context),
    },
  };
}
