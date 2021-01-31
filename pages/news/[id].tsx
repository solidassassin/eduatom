import ReactMarkdown from "react-markdown";
import type { PostJson } from "utils/prop-types";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import type { NextPageContext } from "next";

type Props = {
  post: PostJson;
};

type StaticPath = {
  params: {
    id: string;
  };
};

function maxImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return <img {...props} style={{ maxWidth: "100%" }} />;
}

export default function News(props: Props) {
  return (
    <div className="padtitle">
      <h2>{props.post.title}</h2>
      <ReactMarkdown renderers={{ image: maxImg }}>
        {props.post.content}
      </ReactMarkdown>
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
