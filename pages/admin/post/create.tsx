import { getSession } from "next-auth/client";
import React, { useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import type { Session } from "next-auth";
import type { GetServerSideProps } from "next";
import type { OutputData } from "@editorjs/editorjs";

const Editor = dynamic(() => import("components/Editorjs"), {
  ssr: false,
});

type Props = {
  session: Session;
};

async function createPost(title: string, content: string) {
  await fetch("http://localhost:3000/api/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });
}

const PostEditor: React.FC<Props> = (props: Props) => {
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
        onClick={() => {
          if (title && content) {
            createPost(title, JSON.stringify(content));
            Router.push("/admin");
          } else {
            alert("Nėra medžiagos");
          }
        }}
      >
        Išsaugoti
      </a>
    </div>
  ) : (
    <div />
  );
};

export default PostEditor;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};
