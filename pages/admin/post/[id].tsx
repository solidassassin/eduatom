import { getSession } from "next-auth/client";
import { useEffect } from "react";
import Router from "next/router";
import type { Session } from "next-auth";
import type { NextPageContext } from "next";
import type { PostJson } from "utils/prop-types";

type StaticPath = {
  params: {
    id: string;
  };
};

type Props = {
  post: PostJson;
  session: Session;
};

export default function PostEditor(props: Props) {
  useEffect(() => {
    if (!props.session) {
      Router.push("/api/auth/signin");
    }
  }, [props.session]);

  return props.session ? <div>{props.post.title}</div> : <div />;
}

export async function getServerSideProps(
  context: NextPageContext & StaticPath
) {
  const postResponse = await fetch(
    `http://localhost:3000/api/post/${context.params.id}`,
    {
      headers: {
        cookie: context.req?.headers.cookie!,
      },
    }
  );
  const post = await postResponse.json();

  return {
    props: {
      post,
      session: await getSession(context),
    },
  };
}
