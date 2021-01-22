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

async function alterPost(id: number, method: "PUT" | "DELETE") {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method,
  });
}

export default function adminPage(props: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!props.session) {
      router.push("/api/auth/signin");
    }
  }, [props.session]);

  return props.session ? (
    <div>
      <a href="/admin/post/create">
        <div className="panel-button"><b>Naujas įrašas</b></div>
      </a>
      <div>
        <div className="acolumn">
          <h1 className="h1a">Juodraščiai</h1>
          {props.drafts.map((post) => {
            return (
              <div className="title-box">
                  <a href={`admin/post/${post.id}`}>{post.title}</a>
                <a>{post.id}</a>
                <a
                  className="delete"
                  href=""
                  onClick={() => alterPost(post.id, "DELETE")}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fad"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8192 8192"
                  >
                    <g>
                      <path d="m69.81 199.12 40.78 299.89c.98 7.43 7.33 12.99 14.82 12.99h261.18c7.49 0 13.84-5.56 14.82-12.99l40.78-299.89zm118.77 271.72c-7.62 0-14.14-5.8-14.87-13.54l-18.94-200.67c-.78-8.22 5.25-15.51 13.47-16.28 8.22-.79 15.51 5.25 16.28 13.47l18.95 200.67c.824 8.679-5.96 16.35-14.89 16.35zm82.37-14.94c0 8.25-6.7 14.94-14.95 14.94s-14.95-6.69-14.95-14.94v-200.68c0-8.25 6.7-14.94 14.95-14.94s14.95 6.69 14.95 14.94zm86.28-199.27-18.94 200.67c-.75 7.952-7.714 14.195-16.29 13.48-8.22-.78-14.25-8.07-13.47-16.29l18.95-200.67c.77-8.22 8.08-14.25 16.28-13.47 8.22.77 14.25 8.06 13.47 16.28z"></path>
                      <path d="m450.465 95.676h-388.93c-9.247 0-16.743 7.496-16.743 16.743v40.069c0 9.247 7.496 16.743 16.743 16.743h388.93c9.247 0 16.743-7.496 16.743-16.743v-40.069c0-9.247-7.496-16.743-16.743-16.743z"></path>
                      <path d="m258.65 0h-5.3c-36.556 0-66.386 29.392-67.074 65.788h29.89c.687-19.907 17.107-35.898 37.184-35.898h5.3c20.076 0 36.496 15.991 37.184 35.898h29.89c-.687-36.396-30.518-65.788-67.074-65.788z"></path>
                    </g>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
        <div className="acolumn">
          <h1 className="h1a">Naujienos</h1>
          {props.published.map((post) => {
            return (
              <div className="title-box">
                  <a href={`admin/post/${post.id}`}>{post.title}</a>
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
