import "../public/static/styles/navbar.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import type { AppProps } from "next/dist/next-server/lib/router/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
