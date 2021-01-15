import React from "react";
import { getSession, signOut } from "next-auth/client";
import prisma from "lib/prisma";
import { Post } from "@prisma/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPageContext } from "next";
import type {Session, User} from "next-auth";
/*
type PostJson = {
  id: number;
  createdDate: string;
  createdTime: string;
  updatedDate: string;
  updatedTime: string;
  title: string;
  content: string;
  published: boolean;
};
*/
type Props = {
  drafts: Post[];
  published: Post[];
  session: Session & {user: User}
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
          {props.published.map((post) => {
            return <div className="title-box">{post.title}</div>;
          })}
        </div>
        <div className="acolumn">
          <h1 className="h1a">Naujienos</h1>
          {props.drafts.map((post) => {
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
  /*
  const draft = await fetch("http://localhost:3000/api/drafts");
  const pub = await fetch("http://localhost:3000/api/feed");

  const drafts: PostJson[] = await draft.json();
  const published: PostJson[] = await pub.json();
  */
  const drafts = await prisma.post.findMany({
    where: {
      published: false,
    },
  });

  const published = await prisma.post.findMany({
    where: {
      published: true,
    },
  });

  return {
    props: {
      drafts,
      published,
      session: await getSession(context),
    },
  };
}
