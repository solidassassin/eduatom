import "styles/home.css";
import "styles/navbar.css";
import "styles/admin.css";
import "styles/news.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
