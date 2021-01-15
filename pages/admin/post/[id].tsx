import prisma from "lib/prisma";
import { getSession } from "next-auth/client";
import { useEffect } from "react";
import Router from "next/router";
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
  useEffect(() => {
    if (!props.session) {
      Router.push("/api/auth/signin");
    }
  }, [props.session]);

  return props.session ? (
    <div>{props.post.title}</div>
  ) : (
    <div />
  );
}

export async function getServerSideProps(
  context: NextPageContext & StaticPath
) {
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
