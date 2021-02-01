import ReactMarkdown from "react-markdown";
import { maxImg } from "utils/helpers";
import type { PostJson } from "utils/prop-types";

type Props = {
  posts: PostJson[];
};

export default function NewsPage(props: Props) {
  return (
    <div>
      <h1 className="pad-title">Naujienos</h1>
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
