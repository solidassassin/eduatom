import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import prisma from "lib/prisma";
import { Post } from "@prisma/client";
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
};

export default function myComponent(props: Props) {
  const [session] = useSession();

  return session ? (
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
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  ) : (
    <div>
      Sign in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}

export async function getServerSideProps() {
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
    },
  };
}
