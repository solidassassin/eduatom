import fs from "fs";
import path from "path";
import Navbar from "../components/Navbar";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";

type StaticFile = {
  fileName: string;
  filePath: string;
};

type Props = {
  material: StaticFile[];
  carousel: StaticFile[];
};

export default function MainPage(props: Props) {
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
                <Slide index={value[0]}>
                  <Image
                    hasMasterSpinner={false}
                    isBgImage={true}
                    src={value[1].filePath}
                  ></Image>
                </Slide>
              );
            })}
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
                <img src="/static/images/team/sm.jpg"></img>
              </div>
              <div className="column">
                <h2>Ilona Tandzelgoskienė</h2>
                <img src="/static/images/team/it.jpg"></img>
              </div>
              <div className="column">
                <h2>Linara Dovydaitytė</h2>
                <img src="/static/images/team/ld.jpg"></img>
              </div>
            </div>
          </div>
          <div className="section" id="results">
            <h1>Rezultatai</h1>
            <h2>Mokslo publikacijos</h2>
            <ul id="members">
              {props.material.map((file) => {
                return (
                  <li>
                    <a className="person-name" href={file.filePath}>
                      {file.fileName}
                    </a>
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
}

function getPath(...folder: string[]) {
  return path.join(process.cwd(), "public", "static", ...folder);
}

function getFiles(...folder: string[]) {
  return fs.readdirSync(getPath(...folder)).map((file: string) => {
    const filePath = path.join("static", ...folder, file);
    const fileName = file.replace(/-/g, " ").replace(/\.\w*$/, "");
    return {
      fileName,
      filePath,
    };
  });
}

export async function getStaticProps() {
  const material = getFiles("material");
  const carousel = getFiles("images", "carousel");

  return {
    props: {
      material,
      carousel,
    },
  };
}
