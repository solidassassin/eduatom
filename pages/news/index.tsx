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

export default function NewsPage(props: Props) {
  return (
    <div>
      <h1 className="padtitle">Naujienos</h1>
      {props.posts.map((post) => {
        return (
          <div className="news-feed">
            <a href={`news/${post.id}`}>
              <h2>{post.title}</h2>
            </a>
            <ReactMarkdown renderers={{ image: maxImg }}>
              {post.content}
            </ReactMarkdown>
            <p className="flow"></p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const pub = await fetch("http://localhost:3000/api/feed");
  const posts = await pub.json();

  return {
    props: {
      posts,
    },
  };
}
