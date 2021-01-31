import ReactMarkdown from "react-markdown";
import type { PostJson } from "utils/prop-types";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type Props = {
  posts: PostJson[];
};

function maxImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return <img {...props} style={{ maxWidth: "100%" }} />;
}

export default function MainPage(props: Props) {
  return (
    <div className="news-feed">
      {props.posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <ReactMarkdown renderers={{ image: maxImg }}>
              {post.content}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const posts = [
    {
      id: 1,
      title: "Nice and a really long title it is",
      content:
        "Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing Testing ",
    },
    {
      id: 2,
      title: "Nice2",
      content:
        "![Lol](https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)",
    },
    {
      id: 3,
      title: "Nice2",
      content: "*Test3*",
    },
  ];

  return {
    props: {
      posts,
    },
  };
}
