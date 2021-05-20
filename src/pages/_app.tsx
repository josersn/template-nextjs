import { AppProps } from "next/app";
import Head  from "next/head";
import Global from "../styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template React Next JS</title>
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default App
