import dynamic from "next/dynamic";
import type { PostJson } from "utils/prop-types";

const Editor = dynamic(() => import("components/Editorjs"), {
  ssr: false,
});

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
              <Editor data={JSON.parse(post.content)} readOnly={true}/>
            </a>
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
