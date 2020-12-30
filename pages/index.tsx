import React from "react";
import { GetServerSideProps } from "next";
import Post, { PostProps } from "../components/Post";
import Navbar from "../components/Navbar";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

type Props = {
  feed: PostProps[];
};

export default function MainPage(props: React.FC<Props>) {
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
            <Slide index={0}>
              <Image
                hasMasterSpinner={false}
                isBgImage={true}
                src="/static/images/light1.jpg"
              ></Image>
            </Slide>
            <Slide index={1}>
              <Image
                hasMasterSpinner={false}
                isBgImage={true}
                src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg"
              ></Image>
            </Slide>
            <Slide index={2}>
              <Image
                hasMasterSpinner={false}
                isBgImage={true}
                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_1280.jpg"
              ></Image>
            </Slide>
          </Slider>
          <div className="comp-name">Eduatom</div>
        </CarouselProvider>
        <div className="container-main">
          <div className="section" id="news">
            <h1>Naujienos</h1>
            <p className="text-post">Pildyti čia</p>
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
                <h2>Saulius Mickevičius</h2>
                <img src="/static/images/sm.jpg"></img>
              </div>
              <div className="column">
                <h2>Ilona Tandzelgoskienė</h2>
                <img src="/static/images/it.jpg"></img>
              </div>
              <div className="column">
                <h2>Linara Dovydaitytė</h2>
                <img src="/static/images/ld.jpg"></img>
              </div>
            </div>
          </div>
          <div className="section" id="results">
            <h1>Rezultatai</h1>
            <h2>Mokslo publikacijos</h2>
            <ul id="members">
              <li>
                <a className="person-name" href="/static/images/light1.jpg">
                  Test
                </a>
              </li>
              <li>
                <a href="/static/images/light1.jpg">Test</a>
              </li>
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
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/feed");
  const feed = await res.json();
  return {
    props: { feed },
  };
};
