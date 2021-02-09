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

type Props = {
  posts: PostJson[];
};

const MainPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="page">
        <CarouselProvider
          naturalSlideWidth={1920}
          naturalSlideHeight={1280}
          totalSlides={3}
          className="parent"
          interval={3000}
          isPlaying={true}
        >
          <Slider>
            <Slide index={0}>
              <Cimg
                hasMasterSpinner={false}
                isBgImage={true}
                src="/images/carousel/gauge.jpg"
              ></Cimg>
            </Slide>
            <Slide index={1}>
              <Cimg
                hasMasterSpinner={false}
                isBgImage={true}
                src="/images/carousel/meters.jpg"
              ></Cimg>
            </Slide>
            <Slide index={2}>
              <Cimg
                hasMasterSpinner={false}
                isBgImage={true}
                src="/images/carousel/reactor.jpg"
              ></Cimg>
            </Slide>
          </Slider>
          <div className="car-top">
            <div className="comp-name">Eduatom</div>
            <p className="sponsor">
              Projektas bendrai finansuotas iš Europos regioninės plėtros fondo
              lėšų (projekto Nr. 01.2.2-LMT-K-718-01-0084) pagal dotacijos
              sutartį su Lietuvos mokslo taryba (LMTLT).
            </p>
            <div className="logos">
              <img className="eu-size" src="/images/eu.png" />
              <img className="magnus-size" src="/images/magnus.svg" />
            </div>
          </div>
        </CarouselProvider>
        <div className="container-main">
          <div className="section" id="news">
            <h1>Naujienos</h1>
            <div className="row2">
              {props.posts.map((post) => {
                return (
                  <div className="column2" key={post.id}>
                    <a href={`/news/${post.id}`} className="div-link">
                      <Editor data={JSON.parse(post.content)} readOnly={true} />
                    </a>
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
            <div>
              <h2>Projekte suplanuoti 3 uždaviniai:</h2>
              <ul>
                <li>
                  Atskleisti Visagino, kaip IAE satelitinio miesto
                  daugiakultūrinio identiteto potencialą kūrybinėms industrijoms
                  ir verslumui plėtoti pagrindžiant šiuolaikinio edukacinio
                  turizmo didaktinių sprendimų konstravimo principus.
                  Įgyvendinant šį uždavinį didžiausias dėmesys buvo skiriamas
                  1.1. veiklai – Edukacinio turizmo, mokslo ir kultūros
                  komunikacijos didaktinių sprendimų tyrimui. Tyrėjų komanda
                  dalyvavo 20 vietinių išvykų į Visaginą, IAE ir kitus regionus
                  renkant duomenis mokslo straipsniams, konferencijų pranešimams
                  ir monografijai. Taip pat buvo vykdomos užsienio mokslinės
                  išvykos į mokslo centrus, atomines, muziejus, renkant
                  informaciją ir gerąją patirtį, kurią siekiama panaudoti
                  Ignalinos regionui ir Visagino miesto turizmui plėtoti. Per
                  planuotus įgyvendinti užsaviniui 2 metus, tyrėjų komanda
                  parengė 6 mokslines publikacijas, dalyvauta 5 tarptautinėse
                  konferencijose ir perskaityti daugiau nei 10 mokslinių
                  pranešimų, parengta 1 monografija.
                </li>
                <br />
                <li>
                  Identifikuoti prielaidas ir pateikti sprendimus edukaciniam
                  turizmui Lietuvoje ir branduolinio turizmo plėtrai IAE
                  regione, remiantis pramoginės edukacijos principais.
                  Įgyvendinant šį uždavinį didžiausias dėmesys skiriamas 2.1.
                  veiklai – Branduolinio turizmo plėtros IAE regione mokslinis
                  tyrimas. Tyrėjų komanda vykdo kiek Covid-19 situacija leidžia
                  vietines mokslines išvykas renkant duomenis monografijai ir
                  straipniams, pristatyti 6 žodiniai pranešimai, užsienyje ir
                  Lietuvoje, rengiamas nuotolinis mokymosi kursas ir sintetinis
                  mokslo darbas.
                </li>
                <br />
                <li>
                  Sukurti ir ištirti inovatyvaus pagrįsto virtualiomis
                  informacinėmis technologijomis branduolinės edukacijos
                  maršruto sprendimus turinčius komercinimo galimybes Sukurtos
                  žinios ir edukaciniai ir technologiniai sprendimai,
                  pasitarnaus kuriant IAE regiono naują identitetą ir naują
                  vaidmenį - plėtoti edukacinį ir pažintinį turizmą.
                </li>
              </ul>
            </div>
          </div>
          <div className="section" id="team">
            <h1>Komanda</h1>
            <div className="row">
              <div className="column">
                <a href="/material/cvs/nm.pdf">
                  <h2>Natalija Mažeikienė</h2>
                </a>
                <Image
                  className="c-img"
                  src="/images/team/nm.jpg"
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
                <a href="/material/cvs/id.pdf">
                  <h2>Ineta Dabašinskienė</h2>
                </a>
                <Image
                  className="c-img"
                  src="/images/team/id.jpg"
                  width={800}
                  height={600}
                  objectFit="contain"
                ></Image>
              </div>
              <div className="column">
                <h2>Judita Kasperiūnienė</h2>
              </div>
              <div className="column">
                <h2>Andrei Stsiapanau</h2>
              </div>
              <div className="column">
                <h2>Eglė Gerulaitienė</h2>
              </div>
              <div className="column">
                <h2>Odeta Norkutė</h2>
              </div>
              <div className="column">
                <a href="/material/cvs/lk.pdf">
                  <h2>Lina Kaminskienė</h2>
                </a>
              </div>
              <div className="column">
                <h2>Genovaitė Kynė</h2>
              </div>
              <div className="column">
                <h2>Kristina Juraitė</h2>
              </div>
              <div className="column">
                <h2>Ina Žurkuvienė</h2>
              </div>
              <div className="column">
                <h2>Vida Montvydaitė</h2>
              </div>
            </div>
          </div>
          <div className="section" id="results">
            <h1>Rezultatai</h1>
            <h2>Mokslo publikacijos</h2>
            <ol id="members">
              <li>
                [Kolektyvinė monografija] N. Mažeikienė (ed.) (2021,
                leidykloje).{" "}
                <i>
                  Learning the Nuclear: Educational Tourism in (Post)Industrial
                  Sites,
                </i>{" "}
                Peter Lang Publishing.
              </li>
              <br />
              <li>
                Mazeikiene, N., Kasperiūnienė, J., Tandzegolskienė, I. (2021)
                Framing Nuclearity: Online media Discourses in Lithuania.{" "}
                <i>Media and Communication,</i> 9(2), DOI:
                10.17645/mac.v9i2.3818 [Web of Science; Scopus]
              </li>
              <br />
              <li>
                Mažeikienė, N., Kasperiūnienė, J., Tandzegolskienė, I. (2019).
                Nuclear media discourses after the closure of the Ignalina
                Nuclear Power Plant: is the game over?{" "}
                <i>// Central European Journal of Communication.</i> ISSN
                1899-5101, 2019, Vol. 12, no. 3, p. 335-360. [Scopus].
              </li>
              <br />
              <li>
                Dabašinskienė, I., Kubiliūtė, S.. (atiduota spaudai). Language
                competence in education: re-thinking minority issues in
                Lithuania. Eesti Rakenduslingvistika Ühingu aastaraamat =
                Estonian papers in applied linguistics.
              </li>
              <br />
              <li>
                Tandzegolskiene, I. and Kasperiuniene, J. (2020) Smart learning
                environments in a contemporary museum: a case study.{" "}
                <i>Journal of Education Culture and Society,</i> 11(2), 353-375.
                ISSN2081-1640 [Web of Science]
              </li>
              <br />
              <li>
                Mažeikienė, N., and Norkutė, O. (priimta spaudai, 2021). Toward
                a new energy paradigm in geography: revisiting the curriculum
                and teaching practices,{" "}
                <i>Journal of Education Culture and Society,</i> ISSN2081-1640
                [Web of Science]
              </li>
              <br />
              <li>
                Mažeikienė N. and Gerulaitienė E. (2018). Commodification of
                Cultural Identities and/or empowerment of local communities:
                developing a route of nuclear tourism‘ konferencijoje "Society,
                integration, education = Sabiedrība, integrācija, izglītība".
                <i>
                  Sabiedrība, integrācija, izglītība: starptautiskās zinātniskās
                  konferences materiāli,
                </i>{" "}
                Rēzekne = Society, integration, education: proceedings of the
                international scientifical conference, Rezekne. Rēzekne :
                Rēzeknes Augstskola, 145-158.
              </li>
              <br />
              <li>
                Mažeikienė N., Gerulaitienė E. (2018). Educational aspects of
                nuclear tourism: sites, objects and museums. EDULEARN 2018: 10th
                International conference on education and new learning
                technologies, Jul 2-4, 2018, Palma, Spain: conference
                proceedings. ISBN 9788409027095 p. 5692-5702. [Conference
                Proceedings Citation Index- Social Science & Humanities (Web of
                Science)]
              </li>
              <br />
              <li>
                Kasperiūnienė, J. and Norkutė, O. (2018). Common facets of
                museum virtual self - presentation: experimenting with
                interactive image and text // Society, integration, education :
                proceedings of the international scientific conference, May
                25th-26th, 2018 = Sabiedrība, integrācija, izglītība:
                starptautiskās zinātniskās konferences materiāli, 2018.gada
                25.-26.maijs Rēzekne: Rēzeknes Tehnoloģiju akadēmija. ISSN
                1691-5887. 2018, Vol. 5, p. 304-314 [Conference Proceedings
                Citation Index (Web of Science)].
              </li>
              <br />
              <li>
                Mažeikienė N., Norkutė O, Tandzegolskienė. (2018). Looking for
                edutainment at Lithuanian science museums. EDULEARN 2018
                Conference proceedings. 10th international conference on
                education and new learning technologies, Jul 2-4, 2018, Palma,
                Spain: conference proceedings. ISBN 9788409027095 p. 5692-5702.
                [Conference Proceedings Citation Index- Social Science &
                Humanities (Web of Science)]
              </li>
            </ol>
            <h2>Tyrimas</h2>
            <div>
              <p>
                Edukacinio turizmo principai, strategijos ir technologijos
                tiriamos ir konstruojamos EDUATOM projekte remiantis Ignalinos
                atominės elektrinės regiono edukacinio branduolinio maršruto
                kūrimo pavyzdžiu. Siekiama sukurti mokslinės eksperimentinės
                plėtros (MTEP) produktą – <b>virtualų edukacinį maršrutą</b>,
                kuris atitiktų branduolinio/ atominio turizmo, atominių muziejų,
                informacinių centrų ir edukacinių mokslo centrų plėtojimo
                tendencijas. Kuriant maršrutą taikomi inovatyvūs edukaciniai ir
                didaktiniai principai bei technologijos – suartinamas rengiamo
                branduolinio turizmo maršruto turinys su formaliojo ugdymo
                turiniu (fizikos, geografijos, istorijos dalykais), taikomi
                edukacinio turizmo ir pramoginės edukacijos (edutainment),
                medijų ir skaitmeninės pedagogikos (digital pedagogy) principai,
                bus pritaikyti dalyvavimo, interaktyvumo, pramogos,
                personalizavimo ir diferencijavimo sprendimai. Maršrutas bus
                išbandytas su tikslinėmis grupėmis – moksleivių, skirtingų
                amžiaus grupių moksleivių, šeimų, suaugusiųjų ir senjorų,
                atskirai užsieniečių grupėmis (bendrai apie 300 tyrimo dalyvių).
              </p>
              <p>
                Projekto EDUATOM metu bus sukurtas ir moksliškai pagrįstas
                mokslinės eksperimentinės plėtros (MTEP) produktas –{" "}
                <b>nuotolinio mokymosi Moodle kursas</b> apie didaktinius
                edukacinio turizmo principus. Kursas skirtas muziejų ir turizmo
                sektoriaus specialistams.
              </p>
              <p>
                Projekto EDUATOM mokslininkai-tyrėjai rengia{" "}
                <b>
                  aukšto tarptautinio lygio mokslines publikacijas, išleistas
                  Scopus ir Web of Science duomenų bazėse (bus parengta 14
                  straipsnių), 2 tarptautines monografijas
                </b>
                , išleistas tarptautinį pripažinimą turinčiose leidyklose,{" "}
                <b>sintetinį mokslinį darbą</b> ir atlieka{" "}
                <b>mokslinius tyrimus</b>:
              </p>
              <ol>
                <li>
                  Atominio/branduolinio turizmo, industrinio paveldo objektų ir
                  maršrutų edukacinio potencialo analizė (iki 2020 m. kovo mėn.
                  atlikta daugiau nei{" "}
                  <b>400 mokslinių šaltinių turinio analizė</b>, kiekybinė
                  sisteminė <b>1268 mokslinių šaltinių analizė</b>, atliktas
                  <b>
                    20 virtualių maršrutų ir ekspozicijų, 20 muziejų tinklalapių
                    tyrimas
                  </b>
                  ).
                </li>
                <li>
                  Lietuvos ir užsienio muziejų ekspozicijų, atominių elektrinių
                  analizė, jų tinklalapių analizė (iki 2020 m. kovo parengta{" "}
                  <b>19 ekspozicijų analizė</b>, kuri integruota į mokslines
                  publikacijas ir rengiamo virtualaus maršruto turinį bei Moodle
                  nuotolinį kursą muziejų ir turizmo specialistams).
                </li>
                <li>
                  Kokybinis tyrimas (veiklos tyrimas ir etnografinis tyrimas)
                  apie Visagino miesto ir IAE regiono identitetą, atskleidžiant
                  socialinį ir kultūrinį kontekstą, branduolinio turizmo
                  plėtojimo galimybes. Atliekant kokybinį tyrimą apie Visagino
                  miesto ir IAE regiono identitetą{" "}
                  <b>
                    atlikti daugiau nei 30 individualių ir grupinių interviu
                  </b>{" "}
                  su ekspertais, Visagino bendruomenės nariais (Visagino
                  savivaldybės atstovai, miesto administracija, turizmo
                  plėtotojai, IAE vadovybė ir specialistai, gyventojais), miesto
                  ir šalies menininkais, radiacinės fizikos ir medicinos
                  mokslininkais, verslininkais, viešojo administravimo
                  atstovais, t.t.).
                </li>
                <li>
                  Kokybinė ir kiekybinė branduolinių diskursų 2017-2020 metais
                  analizė (išanalizuoti <b>4 Lietuvos dienraščių portalų</b>{" "}
                  (LRT, Delfi, 15 min, Lrytas) virš{" "}
                  <b>700 straipsnių apie IAE, Visaginą, atominę energetiką</b>{" "}
                  taikant kritinę diskurso analizę, kiekybinę socialinių tinklų
                  analizę.
                </li>
                <li>
                  <b>10 meno projektų</b>, susijusių su Visagino miestu ir
                  gyvenimu, atominio miesto identitetu, kokybinė analizė.
                </li>
                <li>
                  Bendrojo ugdymo mokyklos ugdymo turinio,{" "}
                  <b>
                    formaliojo ir neformaliojo ugdymo, turizmo ir ugdymo
                    jungties
                  </b>{" "}
                  analizė (analizuojamas{" "}
                  <b>geografijos, istorijos, fizikos ugdymo turinys</b>
                  (ugdymo programos ir mokymo(si) medžiaga),{" "}
                  <b>16 geografijos ir 20 istorijos vadovėlių</b> turinys) ir
                  galimybės susieti su neformaliuoju ugdymu branduolinio ir
                  industrinio turizmo objektuose,{" "}
                  <b>interviu su 10 geografijos mokytojais</b>.
                </li>
                <li>
                  <b>
                    Interviu, focus grupės ir konsultacijos su 25 ekspertais ir
                    specialistais
                  </b>{" "}
                  (Lietuvos muziejų darbuotojais, edukatoriais, mokytojais,
                  ekspozicijų kuratoriais, kt.) siekiant sukurti ir moksliškai
                  išbandyti mokslinės eksperimentinės plėtros (MTEP) produktą –{" "}
                  <b>nuotolinio mokymosi Moodle kursą</b>.
                </li>
              </ol>
              <p>
                Tyrimo rezultatai pristatyti{" "}
                <b>
                  22 parengtuose moksliniuose pranešimuose tarptautinėse
                  mokslinėse konferencijose užsienyje ir Lietuvoje
                </b>
                .
              </p>
            </div>
          </div>
          <div className="section" id="contact">
            <h1 className="title-post">Kontaktai</h1>
            <a href="mailto: natalija.mazeikiene@vdu.lt">
              <h2>natalija.mazeikiene@vdu.lt</h2>
            </a>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default MainPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const pub = await fetch(`${env.DOMAIN}/api/feed`);
  const posts: PostJson[] = await pub.json();

  return {
    props: {
      posts: posts.length > 2 ? posts.slice(0, 2) : posts,
    },
  };
};
