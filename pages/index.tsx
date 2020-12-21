import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import Navbar from "../components/Navbar";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


type Props = {
  feed: PostProps[];
};

export default function Blog(props: React.FC<Props>) {
  return (
    <Layout>
      <div className="page">
        
        <div className="container-main">
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={51.5}
            totalSlides={3}
            className="carusel"
            interval={3000}
            isPlaying={true}
          >
            <Slider>
              <Slide index={0}>
                <Image className="imageSlide" src="https://s1.15min.lt/images/photos/2018/01/25/big/gimtadieni-svenciancio-vilniaus-vaizdai-5a699d5ede708.jpg"></Image>
              </Slide>
              <Slide index={1}>
                <Image className="imageSlide" src="https://i.ytimg.com/vi/CmKEySMuOjk/maxresdefault.jpg"></Image>
              </Slide>
              <Slide index={2}>
                <Image className="imageSlide" src="https://jp.lt/wp-content/uploads/2018/07/119-1411624545-950000.jpg"></Image>
              </Slide>
            </Slider>
          </CarouselProvider>
          <div className="container-post">
            <h1 className="title-post"></h1>
            <p className="text-post"></p>
          </div>
        </div>
       
      </div>
      <Navbar></Navbar>
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
