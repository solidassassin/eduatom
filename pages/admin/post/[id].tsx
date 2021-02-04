import { getSession } from "next-auth/client";
import { useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import type { Session } from "next-auth";
import type { NextPageContext } from "next";
import type { PostJson } from "utils/prop-types";
import type { OutputData } from "@editorjs/editorjs";

const Editor = dynamic(() => import("components/Editorjs"), {
  ssr: false,
});

type StaticPath = {
  params: {
    id: string;
  };
};

type Props = {
  post: PostJson;
  session: Session;
};

async function editPost(id: number, title: string, content: string) {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });
}

async function publishPost(id: number) {
  await fetch(`http://localhost:3000/api/publish/${id}`, {
    method: "PUT",
  });
}

export default function PostEditor(props: Props) {
  let title: string | undefined;
  let content: OutputData | undefined;

  useEffect(() => {
    if (!props.session) {
      Router.push("/api/auth/signin");
    }
  }, [props.session]);

  return props.session ? (
    <div style={{ textAlign: "center", width: "100%", padding: "2rem" }}>
      <Editor
        onChange={(_, data) => {
          title = data?.blocks[0]?.data.text;
          content = data;
        }}
      />
      <a
        className="new-post"
        href="/admin"
        onClick={() => {
          if (title && content) {
            editPost(props.post.id, title, JSON.stringify(content));
          }
        }}
      >
        Išsaugoti
      </a>
      {props.post.published ? (
        <div />
      ) : (
        <a
          className="new-post"
          href="/admin"
          onClick={() => {
            if (title && content) {
              publishPost(props.post.id);
            }
          }}
        >Publikuoti</a>
      )}
    </div>
  ) : (
    <div />
  );
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
