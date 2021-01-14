import "../public/static/styles/navbar.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Provider } from 'next-auth/client'
import type { AppProps } from "next/dist/next-server/lib/router/router";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session} >
      <Component {...pageProps} />
    </Provider>
  )
}
