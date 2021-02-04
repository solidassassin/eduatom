import React from "react";
import dynamic from "next/dynamic";
import type { PostJson } from "utils/prop-types";
import type { NextPageContext } from "next";

const Editor = dynamic(() => import("components/Editorjs"), {
  ssr: false,
});

type Props = {
  post: PostJson;
};

type StaticPath = {
  params: {
    id: string;
  };
};

export default function News(props: Props) {
  return (
    <div>
      <Editor data={JSON.parse(props.post.content)} readOnly={true} />
    </div>
  );
}

export async function getServerSideProps(
  context: NextPageContext & StaticPath
) {
  const postResponse = await fetch(
    `http://localhost:3000/api/post/${context.params.id}`
  );
  const post = await postResponse.json();

  return {
    props: {
      post,
    },
  };
}
