import React from "react";
import { getSession, signOut } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPageContext } from "next";
import type { Session } from "next-auth/client";
import type { PostJson } from "utils/prop-types";

type Props = {
  drafts: PostJson[];
  published: PostJson[];
  session: Session;
};

export default function myComponent(props: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!props.session) {
      router.push("/api/auth/signin");
    }
  }, [props.session]);

  return props.session ? (
    <div>
      <div className="arow">
        <div className="acolumn">
          <h1 className="h1a">Juodraščiai</h1>
          {props.drafts.map((post) => {
            return <div className="title-box">{post.title}</div>;
          })}
        </div>
        <div className="acolumn">
          <h1 className="h1a">Naujienos</h1>
          {props.published.map((post) => {
            return (
              <div className="title-box">
                {post.title}
                <br />
                {post.content}
              </div>
            );
          })}
        </div>
      </div>
      <br />
      Signed in as {props.session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  ) : (
    <div />
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  const pub = await fetch("http://localhost:3000/api/feed");
  const dra = await fetch("http://localhost:3000/api/drafts", {
    headers: {
      cookie: context.req?.headers.cookie!,
    },
  });

  const published = await pub.json();
  const drafts = await dra.json();

  return {
    props: {
      drafts,
      published,
      session,
    },
  };
}
