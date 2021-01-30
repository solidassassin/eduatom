import "public/static/styles/home.css";
import "public/static/styles/navbar.css";
import "public/static/styles/admin.css";
import "public/static/styles/news.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
