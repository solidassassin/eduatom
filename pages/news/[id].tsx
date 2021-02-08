import React from "react";
import dynamic from "next/dynamic";
import type { PostJson } from "utils/prop-types";
import type { GetServerSideProps } from "next";

const Editor = dynamic(() => import("components/Editorjs"), {
  ssr: false,
});

type Props = {
  post: PostJson;
};

const News: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Editor data={JSON.parse(props.post.content)} readOnly={true} />
    </div>
  );
};

export default News;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postResponse = await fetch(
    `https://eduatom.eu/api/post/${context.params?.id}`
  );
  const post = await postResponse.json();

  return {
    props: {
      post,
    },
  };
};
