import ReactMarkdown from "react-markdown";
import { maxImg } from "utils/helpers";
import type { PostJson } from "utils/prop-types";
import type { NextPageContext } from "next";

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
    <div className="pad-title">
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
