import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import type { PostJson } from "utils/prop-types";

const Editor = dynamic(() => import("components/Editorjs"), {
  ssr: false,
});

type Props = {
  posts: PostJson[];
};

const NewsPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Naujienos</h1>
      {props.posts.map((post) => {
        return (
          <div className="news-feed" key={post.id}>
            <a href={`news/${post.id}`} className="div-link">
              <Editor data={JSON.parse(post.content)} readOnly={true} />
            </a>
            <p className="flow"></p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const pub = await fetch("http://localhost:3000/api/feed");
  const posts = await pub.json();

  return {
    props: {
      posts,
    },
  };
};
