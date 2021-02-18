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
              <b>Mokslinis EDUATOM projektas</b> skirtas sukurti edukacinio ir
              pažintinio turizmo plėtros didaktinius sprendimus Lietuvos
              muziejams, turizmo paslaugų plėtotojams, švietimo ir ugdymo
              institucijoms, kurios vykdo neformalųjį ir formalųjį ugdymą,
              kultūros ir mokslo komunikaciją.
            </p>
            <p>
              Edukacinio turizmo principai, strategijos ir technologijos
              tiriamos ir konstruojamos EDUATOM projekte remiantis Ignalinos
              atominės elektrinės regiono edukacinio branduolinio/atominio
              maršruto kūrimo pavyzdžiu. Siekiama sukurti mokslinės
              eksperimentinės plėtros (MTEP) produktą –{" "}
              <b>virtualų edukacinį maršrutą</b>, kuris atitiktų branduolinio/
              atominio turizmo, atominių muziejų, informacinių centrų ir
              edukacinių mokslo centrų plėtros tendencijas.
            </p>
            <p>
              Kuriant maršrutą taikomi inovatyvūs edukaciniai ir didaktiniai
              principai bei technologijos – suartinamas rengiamo branduolinio/
              atominio turizmo maršruto turinys su formaliojo ugdymo turiniu
              (fizikos, geografijos, istorijos, ekonimikos dalykais), taikomi
              edukacinio turizmo ir pramoginės edukacijos (<i>edutainment</i>),
              medijų ir skaitmeninės pedagogikos (<i>digital pedagogy</i>)
              principai, bus pritaikyti dalyvavimo, interaktyvumo, pramogos,
              personalizavimo ir diferencijavimo sprendimai. Maršrutas bus
              išbandytas su tikslinėmis grupėmis – mokytojų, skirtingų amžiaus
              grupių moksleivių, šeimų, suaugusiųjų ir senjorų, atskirai
              užsieniečių grupėmis (bendrai apie 300 tyrimo dalyvių).
            </p>
            <p>
              Projekto EDUATOM metu bus sukurtas ir moksliškai pagrįstas
              mokslinės eksperimentinės plėtros (MTEP) produktas –{" "}
              <b>nuotolinio mokymosi Moodle kursas</b> apie didaktinius
              edukacinio turizmo principus. Kursas skirtas mokytojams, muziejų
              ir turizmo sektoriaus specialistams.
            </p>
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
                <a href="/material/cvs/lk.pdf">
                  <h2>Lina Kaminskienė</h2>
                </a>
                <Image
                  className="c-img"
                  src="/images/team/lk.jpg"
                  width={800}
                  height={600}
                  objectFit="contain"
                ></Image>
              </div>
              <div className="column">
                <a href="/material/cvs/on.pdf">
                  <h2>Odeta Norkutė</h2>
                </a>
                <Image
                  className="c-img"
                  src="/images/team/on.jpg"
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
                [Kolektyvinė monografija] N. Mažeikienė (ed.) (2021,{" "}
                <i>rengiama</i>).
                <i>Innovations in Science and Culture Commmunication</i>, Peter
                Lang Publishing.
              </li>
              <br />
              <li>
                [Kolektyvinė monografija] N. Mažeikienė (Sud.) (2021,{" "}
                <i>rengiama</i>).
                <i>
                  Edukacinis turizmas: konstruojant naująjį ugdymą už mokyklos
                  ribų
                </i>
                .
              </li>
              <br />
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
                Dovydaitytė, L. (2021, priimta spaudai). (Re)Imagining the
                nuclear in Lithuania following the shutdown of the Ignalina
                Nuclear Power Plant, <i>Journal of Baltic Studies</i>,
                ISSN0162-9778 [Web of Sciences; Scopus].
              </li>
              <br />
              <li>
                <a href="/material/content/framing-nuclearity-2.pdf">
                  Mazeikiene, N., Kasperiūnienė, J., Tandzegolskienė, I. (2021)
                  Framing Nuclearity: Online media Discourses in Lithuania.{" "}
                  <i>Media and Communication,</i> 9(2), DOI:
                  10.17645/mac.v9i2.3818 [Web of Science; Scopus]
                </a>
              </li>
              <br />
              <li>
                <a href="/material/content/nuclear-media-3.pdf">
                  Mažeikienė, N., Kasperiūnienė, J., Tandzegolskienė, I. (2019).
                  Nuclear media discourses after the closure of the Ignalina
                  Nuclear Power Plant: is the game over?{" "}
                  <i>Central European Journal of Communication.</i> ISSN
                  1899-5101, 2019, Vol. 12, no. 3, p. 335-360. [Scopus].
                </a>
              </li>
              <br />
              <li>
                Dabašinskienė, I., Kubiliūtė, S.. (atiduota spaudai). Language
                competence in education: re-thinking minority issues in
                Lithuania. Eesti Rakenduslingvistika Ühingu aastaraamat =
                Estonian papers in applied linguistics, [Web of Sciences;
                Scopus].
              </li>
              <br />
              <li>
                <a href="/material/content/smart-learning-5.pdf">
                  Tandzegolskiene, I. and Kasperiuniene, J. (2020) Smart
                  learning environments in a contemporary museum: a case study.{" "}
                  <i>Journal of Education Culture and Society,</i> 11(2),
                  353-375. ISSN2081-1640 [Web of Science]
                </a>
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
                <a href="/material/content/commodification-7.pdf">
                  Mažeikienė N. and Gerulaitienė E. (2018). Commodification of
                  Cultural Identities and/or empowerment of local communities:
                  developing a route of nuclear tourism‘ konferencijoje
                  &quot;Society, integration, education = Sabiedrība,
                  integrācija, izglītība&quot;.
                  <i>
                    Sabiedrība, integrācija, izglītība: starptautiskās
                    zinātniskās konferences materiāli,
                  </i>{" "}
                  Rēzekne = Society, integration, education: proceedings of the
                  international scientifical conference, Rezekne. Rēzekne :
                  Rēzeknes Augstskola, 145-158. [Conference Proceedings Citation
                  Index (Web of Science)].
                </a>
              </li>
              <br />
              <li>
                <a href="/material/content/education-nuclear-8.pdf">
                  Mažeikienė N., Gerulaitienė E. (2018). Educational aspects of
                  nuclear tourism: sites, objects and museums. EDULEARN 2018:
                  10th International conference on education and new learning
                  technologies, Jul 2-4, 2018, Palma, Spain: conference
                  proceedings. ISBN 9788409027095 p. 5692-5702. [Conference
                  Proceedings Citation Index- Social Science & Humanities (Web
                  of Science)]
                </a>
              </li>
              <br />
              <li>
                <a href="/material/content/">
                  Kasperiūnienė, J. and Norkutė, O. (2018). Common facets of
                  museum virtual self - presentation: experimenting with
                  interactive image and text // Society, integration, education
                  : proceedings of the international scientific conference, May
                  25th-26th, 2018 = Sabiedrība, integrācija, izglītība:
                  starptautiskās zinātniskās konferences materiāli, 2018.gada
                  25.-26.maijs Rēzekne: Rēzeknes Tehnoloģiju akadēmija. ISSN
                  1691-5887. 2018, Vol. 5, p. 304-314 [Conference Proceedings
                  Citation Index (Web of Science)].
                </a>
              </li>
              <br />
              <li>
                <a href="/material/content/edutaintment-10.pdf">
                  Mažeikienė N., Norkutė O, Tandzegolskienė. (2018). Looking for
                  edutainment at Lithuanian science museums. EDULEARN 2018
                  Conference proceedings. 10th international conference on
                  education and new learning technologies, Jul 2-4, 2018, Palma,
                  Spain: conference proceedings. ISBN 9788409027095 p.
                  5692-5702. [Conference Proceedings Citation Index- Social
                  Science & Humanities (Web of Science)]
                </a>
              </li>
            </ol>
            <h2>Tyrimas</h2>
            <div>
              <p>
                Tyrėjai atlieka šiuos <b>mokslinius tyrimus</b>:
              </p>
              <ul>
                <li>
                  Kokybinis tyrimas (veiklos tyrimas ir etnografinis tyrimas)
                  apie Visagino miesto ir IAE regiono identitetą, atskleidžiant
                  socialinį ir kultūrinį kontekstą, branduolinio turizmo
                  plėtojimo galimybes. Atliekant kokybinį tyrimą apie Visagino
                  miesto ir IAE regiono identitetą atlikti{" "}
                  <b>daugiau nei 30 individualių ir grupinių interviu</b> su
                  ekspertais, Visagino bendruomenės nariais (Visagino
                  savivaldybės atstovai, miesto administracija, turizmo
                  plėtotojai, IAE vadovybė ir specialistai, gyventojais), miesto
                  ir šalies menininkais, radiacinės fizikos ir medicinos
                  mokslininkais, verslininkais, viešojo administravimo
                  atstovais, t.t.).
                </li>
                <br />
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
                <br />
                <li>
                  Lietuvos ir užsienio muziejų ekspozicijų, atominių elektrinių
                  analizė, jų tinklalapių analizė (
                  <b>iki 2020 m. kovo parengta 19 ekspozicijų analizė</b>, kuri
                  integruota į mokslines publikacijas ir rengiamo virtualaus
                  maršruto turinį bei Moodle nuotolinį kursą muziejų ir turizmo
                  specialistams).
                </li>
                <br />
                <li>
                  Kokybinė ir kiekybinė branduolinių diskursų 2018-2020 metais
                  analizė (išanalizuoti <b>4 Lietuvos dienraščių portalų</b>{" "}
                  (LRT, Delfi, 15 min, Lrytas) virš{" "}
                  <b>700 straipsnių apie IAE, Visaginą, atominę energetiką</b>{" "}
                  taikant kritinę diskurso analizę, kiekybinę socialinių tinklų
                  analizę.
                </li>
                <br />
                <li>
                  <b>10 meno projektų</b>, susijusių su Visagino miestu ir
                  gyvenimu, atominio miesto identitetu, kokybinė analizė.
                </li>
                <br />
                <li>
                  Bendrojo ugdymo mokyklos ugdymo turinio,{" "}
                  <b>
                    formaliojo ir neformaliojo ugdymo, turizmo ir ugdymo
                    jungties
                  </b>{" "}
                  analizė (analizuojamas{" "}
                  <b>geografijos, istorijos, fizikos ugdymo turinys</b> (ugdymo
                  programos ir mokymo(si) medžiaga),{" "}
                  <b>16 geografijos ir 20 istorijos vadovėlių</b> turinys) ir
                  galimybės susieti su neformaliuoju ugdymu branduolinio ir
                  industrinio turizmo objektuose,{" "}
                  <b>interviu su 10 geografijos mokytojais</b>.
                </li>
                <br />
                <li>
                  <b>
                    Interviu, focus grupės ir konsultacijos su 25 ekspertais ir
                    specialistais
                  </b>{" "}
                  (Lietuvos muziejų darbuotojais, edukatoriais, mokytojais,
                  ekspozicijų kuratoriais, kt.) siekiant sukurti ir moksliškai
                  išbandyti mokslinės eksperimentinės plėtros (MTEP) produktą -
                  nuotolinio mokymosi Moodle kursą.
                </li>
                <br />
                <li>
                  2021 metais planuojamas maršruto turinio ir edukacinių
                  metodikų išbandymas su min. <b>350 dalyviais</b>.
                </li>
              </ul>
            </div>
            <h2>Konferencijos</h2>
            <div>
              <p>
                Siekiant moksliškai pagrįsti naują edukacinį ir mokslo
                komunikacijos maršrutą, atlikta{" "}
                <b>
                  atominio/ branduolinio turizmo, industrinio paveldo objektų ir
                  maršrutų edukacinio potencialo analizė ir šie rezultatai
                  pristatyti tarptautinės mokslinėse konferencijose
                </b>
                :
              </p>
              <ol>
                <li>
                  Perskaitytas pranešimas tarptautinėje mokslinėje
                  konferencijoje SIE2018 Society. Integration. Education
                  vykusioje Rėzegnėje, Latvijoje 2018 m. gegužės 25-26 d.
                  Natalijos Mažeikienės ir Eglės Gerulaitienės
                  &quot;COMMODIFICATION OF CULTURAL IDENTITIES AND/OR
                  EMPOWERMENT OF LOCAL COMMUNITIES: DEVELOPING A ROUTE OF
                  NUCLEAR TOURISM&quot;.
                </li>
                <br />
                <li>
                  Perskaitytas pranešimas tarptautinėje mokslinėje
                  konferencijoje SIE2018 Society. Integration. Education
                  vykusioje Rėzegnėje, Latvijoje 2018 m. gegužės 25-26 d. Odetos
                  Norkutės &quot;COMMON FACETS OF MUSEUM VIRTUAL
                  SELF-PRESENTATION: EXPERIMENTING WITH INTERACTIVE IMAGE AND
                  TEXT&quot;.
                </li>
                <br />
                <li>
                  Perskaitytas pranešimas EDULEARN 2018 konferencijoje
                  Ispanijoje nuotoliniu būdu 2018 m. Liepos 4-6 d. N.
                  Mazeikiene, O. Norkute, I. Tandzegolskiene skaitė pranešimą
                  &quot;Looking for Edutainment at Lithuanian Science
                  Museums&quot;.
                </li>
                <br />
                <li>
                  Perskaitytas pranešimas EDULEARN 2018 konferencijoje
                  Ispanijoje nuotoliniu būdu 2018 m. Liepos 4-6 d.N. Mazeikiene,
                  E. Gerulaitienė skaitė pranešimą &quot;Educational Aspects of
                  Nuclear Tourism: Sites, Objects and Museums&quot;.
                </li>
                <br />
                <li>
                  Pranešimas perskaitytas tarptautinėje mokslinėje
                  konferencijoje Vroclave, Lenkijoje, International
                  Communication in the Network Society, kuri vyko 2018 m. Spalio
                  11-12 d. Mažeikienė, Dovydaitytė, Juraitė skaitė pranešimą
                  &quot;Transforming city identity: from the Soviet industrial
                  (nuclear) center to the European multicultural city&quot;.
                </li>
                <br />
                <li>
                  Pranešimas perskaitytas tarptautinėje mokslinėje
                  konferencijoje Vroclave, Lenkijoje, International
                  Communication in the Network Society, kuri vyko 2018 m. Spalio
                  11-12 d. Gerulaitienė, Mažeikienė pristatė pranešimą
                  &quot;AUTHENTICITY AND PERFORMANCE OF CULTURAL IDENTITIES IN
                  TOURISM&quot;.
                </li>
                <br />
                <li>
                  Pranešimas perskaitytas tarptautinėje mokslinėje
                  konferencijoje Vroclave, Lenkijoje, International
                  Communication in the Network Society, kuri vyko 2018 m. Spalio
                  11-12 d. Kasperiūnienė ir Mažeikienė skaitė pranešimą
                  &quot;Nuclear media discourses after the closure of the
                  Ignalina Nuclear Power Plant: is the game over?&quot;.
                </li>
                <br />
                <li>
                  Ineta Dabašinskienė skaitė pranešimą Stanforde
                  &quot;Conflicting vs. harmonious multilingualism: the case of
                  language development of children in Lithuania&quot; (2018 m.
                  Liepos 1-3 d., vyko ne iš projekto lėšų).
                </li>
                <br />
                <li>
                  Ineta Dabašinskienė, Natalija Mažeikienė skaitė pranešimą
                  Bostone, JAV &quot;Performance of authentic cultural
                  identities at stake: between dominant discourses and theatre
                  performances&quot; 2018 m. Gruodžio 6 - 9, ( į konferenciją
                  buvo vykstama ne iš projekto lėšų).
                </li>
                <br />
                <li>
                  Linara Dovydaitytė dalyvavo tarptautinėje konferencijoje
                  Švedijoje HOW TO REMEMBER, HOW TO FORGET? Ir skaitė pranešimą
                  &quot;Post-Soviet Museum Practices around the Baltic Sea ir
                  skaitė pranešimą tema Representations of the contested past:
                  museums and communities in the shaping of post-soviet
                  memory&quot; (vyko ne iš projekto lėšų).
                </li>
                <br />
                <li>
                  Kristina Juraitė skaitė pranešimą 13th Conference on Baltic
                  Studies in Europe 2019: Baltic Solidarity, Gdanske, Lenkijoje.
                  Regenerating Cultural Identity and Rebranding of
                  Post-Industrial City: The Case of Visaginas.
                </li>
                <br />
                <li>
                  Ineta Dabašinskienė skaitytė pranešimą 13th Conference on
                  Baltic Studies in Europe 2019: Baltic Solidarity, Gdanske,
                  Lenkijoje. Tensions between Language Policies and Practices:
                  Case study of Visaginas (Lithuania).
                </li>
                <br />
                <li>
                  Linara Dovydaitytė skaitytė pranešimą 13th Conference on
                  Baltic Studies in Europe 2019: Baltic Solidarity, Gdanske,
                  Lenkijoje. Narrating History of Labour and Industry in
                  Post-Soviet Museums.
                </li>
                <br />
                <li>
                  Lietuvoje vyksiančioje mokslinėje konferencijoje: 8-ojoje
                  tarptautinėje tarpdisciplininėje mokslinėje konferencijoje
                  REGIONAS:ISTORIJA,KULTŪRA,KALBA. Pranešimo tema: Visagino
                  miestas ir Ignalinos atominė elektrinė: energetinis
                  žiniasklaidos diskursas , 2019 m. kovo 28–29d. Šiauliai.
                  Pranešimo bendradautoriai: Prof. Dr. Natalija Mažeikienė; Doc.
                  dr. Ilona Tandzegolskienė, Dr. Judita Kasperiūnienė.
                </li>
                <br />
                <li>
                  Judita Kasperiūnienė ir Ilona Tandzegolskienė dalyvavo
                  International Applied Research Conference Information
                  Technologies 2019 (2019-05-09): Theory, Practice, Innovations,
                  Alytaus kolegijoje ir pristatė pranešimą tema: &quot;Methods
                  and Techniques of Virtual tours for Heritage
                  Reconstruction&quot;.
                </li>
                <br />
                <li>
                  Natalija Mažeikienė ir Odeta Norkutė skaitė pranešimą IARTEM
                  tarptautinėje mokslinėje konferencijoje, Danijoje, Odense 2019
                  09 11-13: Teaching about nuclear energy in geography
                  curriculum: moving from energy literacy to nuclear imaginary.
                </li>
                <br />
                <li>
                  Ilona Tandzegolskienė skaitė pranešimą Hamburge vykstančioje
                  tarptautinėje mokslinėje konferencijoje ECER European
                  Educational Research Association, Rugsėjo 2-6 d. &quot;The
                  educational role of the Science museums: objects and
                  Stories&quot;.
                </li>
                <br />
                <li>
                  Ilona Tandzegolskienė dalyvavo Vilniaus universiteto
                  organizuojamoje konferencijoje The 4th International
                  Scientific Conference EDUCATION POLICY IN CULTURAL CONTEXTS:
                  TRANSMISSION AND/OR TRANSFORMATION, November 7-8, 2019 ir
                  skaitė pranešimą tema: &quot;Naujos mokymosi formos ir
                  galimybės industrinio paveldo kontekste&quot;.
                </li>
                <br />
                <li>
                  Linara Dovydaitytė vyko į Milaną, vykstančią tarptautinę
                  mokslinę konferenciją Society for the History of Technology
                  (SHOT) Annual Meeting, Milan, Spalio 24-27 d., 2019 m. ir
                  skaitė pranešimą &quot;Atomic Heritage: Assembling Atomic
                  Cultures, Communities and Knowledge&quot;.
                </li>
                <br />
                <li>
                  Judita Kasperiūnienė ir Ilona Tandzegolskienė dalyvavo
                  tarptautinėje mokslinėje konferencijoje UGDYMO IR ŠVIETIMO
                  ATEITIES IDĖJOS III - oji Lietuvos edukacinių tyrimų
                  asociacijos (LETA) konferencija Lietuvoje, 2019 m.. spalio
                  11-12 d. ir skaitė pranešimą tema: &quot;Industrinio paveldo
                  objektų transformacijos perteikimo metodai ir virtualaus
                  mokomojo maršruto pristatymo būdai&quot;.
                </li>
                <br />
                <li>
                  Ineta Dabašinkienė dalyvavo 26-ojoje tarptautinėje mokslinėje
                  Jono Jablonskio konferencijoje 2019 m. spalio 3-4 d. ir skaitė
                  pranešimą: LINGUISTIC IDENTITIES AND ATTITUDES: CASE STUDY OF
                  VISAGINAS MULTIETHNIC COMMUNITY.
                </li>
                <br />
                <li>
                  Linara Dovydaitytė sudalyvavo nuotolinėje mokslinėje
                  konferencijoje Nuclear Cultural Heritage: From Knowledge to
                  Practice, 12 May 2020. Ir skaitė pranešimą tema: &quot;Shaping
                  atomic tourism in Lithuania&quot; (Linara Dovydaityte,
                  Vytautas Magnus University).
                </li>
                <br />
                <li>
                  Natalija Mažeikienė, Odeta Norkutė, Genovaitė Kynė sudalyvavo
                  geografų kongrese ir skaitė pranešimą tema: Energetinis
                  raštingumas geografijos ugdymo turinyje: Atominė energetika ir
                  energetikos kraštovaizdžio kaita GEOGRAFIJOS MOKSLAS: TYRIMAI.
                  GAMTOS IR VISUOMENĖS GEROVEI. IV LIETUVOS GEOGRAFŲ KONGRESAS.
                  Vilnius, 2020 m. spalio 23 d.
                </li>
                <br />
                <li>
                  Judita Kasperiūnienė dalyvavo online mokslinėje konferencijoje
                  ECS2020 Lenkijoje 11-13 September 2020, Vroclavo
                  univeristetas, Poland, pranešimas &quot;Smart learning
                  environments in a contemporary museum: a case study&quot;.
                </li>
                <br />
                <li>
                  Natalija Mažeikienė dalyvavo online mokslinėje konferencijoje
                  ECS2020 Lenkijoje 11-13 September 2020, Vroclavo
                  univeristetas, Poland, pranešimas &quot;Toward a new energy
                  paradigm in geography: Revisiting the curriculum and teaching
                  practices&quot;.
                </li>
              </ol>
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
