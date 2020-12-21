import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import Navbar from "../components/Navbar";
type Props = {
  feed: PostProps[];
};

export default function Blog(props: React.FC<Props>) {
  return (
    <Layout>
      <div className="page">
        <Navbar></Navbar>
        <div className="container-main">
          <div className="container-post">
            <h1 className="title-post"></h1>
            <p className="text-post"></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  const feed = await res.json();
  return {
    props: { feed },
  };
};
