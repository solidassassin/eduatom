import fs from "fs";
import path from "path";
import { env } from "process";
import Navbar from "../components/Navbar";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image as Cimg,
} from "pure-react-carousel";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { PostJson } from "utils/prop-types";
import { GetServerSideProps } from "next";

const Editor = dynamic(() => import("components/Editorjs"), {
  ssr: false,
});

type StaticFile = {
  fileName: string;
  filePath: string;
};

type Props = {
  carousel: StaticFile[];
  content: StaticFile[];
  cvs: StaticFile[];
  posts: PostJson[];
};

const MainPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="page">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={55}
          totalSlides={3}
          className="parent"
          interval={3000}
          isPlaying={true}
        >
          <Slider>
            {Array.from(props.carousel.entries()).map((value) => {
              return (
                <Slide index={value[0]} key={value[0]}>
                  <Cimg
                    hasMasterSpinner={false}
                    isBgImage={true}
                    src={value[1].filePath}
                  ></Cimg>
                </Slide>
              );
            })}
          </Slider>
          <div className="comp-name">Eduatom</div>
          <div className="eu-logo">
            <img className="eu-size" src="/images/eu.png" />
          </div>
        </CarouselProvider>
        <div className="container-main">
          <div className="section" id="news">
            <h1>Naujienos</h1>
            <div className="row2">
              {props.posts.map((post) => {
                return (
                  <div className="column2" key={post.id}>
                    <Editor data={JSON.parse(post.content)} readOnly={true} />
                  </div>
                );
              })}
              <p className="flow">
                <a className="read-more" href="/news">
                  Skaityti daugiau
                </a>
              </p>
            </div>
          </div>
          <div className="section" id="project">
            <h1>Projektas</h1>
            <p className="text-post">
              <b>EDUATOM</b> projektas skirtas sukurti edukacinio ir pažintinio
              turizmo plėtros didaktinių technologijų sprendinius remiantis
              Ignalinos atominės elektrinės regiono branduolinio edukacinio
              maršruto kūrimo atveju. Tyrėjai projekte siekia moksliškai
              pagrįsti Ignalinos atominės elektrinės regiono edukacinio maršruto
              kūrimo didaktinius sprendimus ir technologijas bei remiantis šio
              maršruto kūrimo atveju sustiprinti edukacinio turizmo ir mokslo
              komunikacijos metodologinį pagrindą. Siekiama moksliškai pagrįsti
              naują edukacinį ir mokslo komunikacijos maršrutą, kuris atitiktų
              branduolinio/ atominio turizmo, atominių muziejų, informacinių
              centrų ir edukacinių turistinių mokslo centrų plėtojimo
              tendencijas. Per ataskaitinį laikotarpį buvo atliekamas tyrimas
              siekiant atskleisti Visagino, kaip IAE satelitinio miesto
              daugiakultūrinio identiteto potencialą kūrybinėms industrijoms ir
              verslumui plėtoti pagrindžiant šiuolaikinio edukacinio turizmo
              didaktinių sprendimų konstravimo principus.
            </p>
            <p>
              <b>Projekto tikslas</b> - sukurti edukacinio ir pažintinio turizmo
              plėtros didaktinių technologijų sprendinius remiantis Ignalinos
              atominės elektrinės regiono branduolinio edukacinio maršruto
              kūrimo atveju. Projekto paskirtis – moksliškai pagrįsti Ignalinos
              atominės elektrinės (IAE) regiono edukacinio maršruto kūrimo
              didaktinius sprendimus ir technologijas bei remiantis šio maršruto
              kūrimo atveju sustiprinti edukacinio turizmo (educational tourism
              - ET) ir mokslo komunikacijos metodologinį pagrindą. Pasaulinė
              praktika rodo, kad įvairiose šalyse kiekvienas didesnis muziejus
              ar turizmo objektas turi moksliškai pagrįstą edukacinę programą,
              priemones, metodikas, technologijas, parengtus specialistus
              programų realizavimui, nuolat atliekami tyrimai. Projektas siekia
              spręsti platesnius ET plėtojimo iššūkius, kita vertus spręsdamas
              šią platesnę problemą koncentruojasi į konkretaus ET objekto
              atvejį – pažintinio ir edukacinio Ignalinos Atominės Elektrinės
              (IAE) regiono branduolinio maršruto kūrimo mokslinį pagrindimą.
            </p>
            <p>
              Siekiama moksliškai pagrįsti naują edukacinį ir mokslo
              komunikacijos maršrutą, kuris atitiktų branduolinio/ atominio
              turizmo (nuclear/ atomic tourism), atominių muziejų (atomic/
              nuclear museums), informacinių centrų ir edukacinių turistinių
              mokslo centrų (Science Centre) plėtojimo tendencijas.
            </p>
          </div>
          <div className="section" id="team">
            <h1>Komanda</h1>
            <div className="row">
              <div className="column">
                <a href="/material/cvs/sm.pdf">
                  <h2>Saulius Mickevičius</h2>
                </a>
                <Image
                  className="c-img"
                  src="/images/team/sm.jpg"
                  width={800}
                  height={600}
                  objectFit="contain"
                ></Image>
              </div>
              <div className="column">
                <a href="/material/cvs/it.pdf">
                  <h2>Ilona Tandzelgoskienė</h2>
                </a>
                <Image
                  className="c-img"
                  src="/images/team/it.jpg"
                  width={800}
                  height={600}
                  objectFit="contain"
                ></Image>
              </div>
              <div className="column">
                <a href="/material/cvs/ld.pdf">
                  <h2>Linara Dovydaitytė</h2>
                </a>
                <Image
                  className="c-img"
                  src="/images/team/ld.jpg"
                  width={800}
                  height={600}
                  objectFit="contain"
                ></Image>
              </div>
            </div>
          </div>
          <div className="section" id="results">
            <h1>Rezultatai</h1>
            <h2>Mokslo publikacijos</h2>
            <ul id="members">
              {props.content.map((file) => {
                return (
                  <li key={file.fileName}>
                    <a href={file.filePath}>{file.fileName}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="section" id="contact">
            <h1 className="title-post">Kontaktai</h1>
            <p className="text-post">Pildyti čia</p>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default MainPage;

function getPath(...folder: string[]) {
  return path.join(process.cwd(), "public", ...folder);
}

function getFiles(...folder: string[]) {
  return fs.readdirSync(getPath(...folder)).map((file: string) => {
    const filePath = path.join(...folder, file);
    const fileName = file.replace(/-/g, " ").replace(/\.\w*$/, "");
    return {
      fileName,
      filePath,
    };
  });
}

export const getServerSideProps: GetServerSideProps = async () => {
  const carousel = getFiles("images", "carousel");
  const content = getFiles("material", "content");
  const cvs = getFiles("material", "cvs");

  const pub = await fetch(`${env.DOMAIN}/api/feed`);
  const posts: PostJson[] = await pub.json();

  return {
    props: {
      carousel,
      content,
      cvs,
      posts: posts.length > 3 ? posts.slice(0, 3) : posts,
    },
  };
};
