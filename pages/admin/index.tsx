import React from "react";
import { env } from "process";
import { getSession, signOut } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth/client";
import type { PostJson } from "utils/prop-types";

type Props = {
  domain: string;
  drafts: PostJson[];
  published: PostJson[];
  session: Session;
};

async function alterPost(id: number, method: "PUT" | "DELETE", domain: string) {
  await fetch(`${domain}/api/post/${id}`, {
    method,
  });
}

function displayPost(post: PostJson, domain: string) {
  return (
    <div className="title-box">
      <a className="post-title" href={`admin/post/${post.id}`}>
        {post.title}
      </a>
      <a
        className="delete"
        href=""
        onClick={() => alterPost(post.id, "DELETE", domain)}
      >
        Pašalinti
      </a>
    </div>
  );
}

const AdminPage: React.FC<Props> = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (!props.session) {
      router.push("/api/auth/signin");
    }
  }, [props.session]);

  return props.session ? (
    <div>
      <div>
        <a className="new-post" href="/admin/post/create">
          Naujas įrašas
        </a>
        <a className="logout" href="/api/auth/signin" onClick={() => signOut()}>
          Atsijungti
        </a>
        <text className="username">{props.session.user.email}</text>
      </div>
      <div>
        <div className="acolumn">
          <h1 className="h1a">Juodraščiai</h1>
          {props.drafts.map((post) => displayPost(post, props.domain))}
        </div>
        <div className="acolumn">
          <h1 className="h1a">Naujienos</h1>
          {props.published.map((post) => displayPost(post, props.domain))}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const cookie = context.req?.headers.cookie;
  const headers = cookie ? { cookie } : undefined;
  const domain = env.DOMAIN;

  const pub = await fetch(`${domain}/api/feed`);
  const dra = await fetch(`${domain}/api/drafts`, {
    headers,
  });

  const published = await pub.json();
  const drafts = await dra.json();

  return {
    props: {
      domain,
      drafts,
      published,
      session,
    },
  };
};
