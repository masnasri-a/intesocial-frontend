import "@/styles/globals.css";
import "@/styles/auth.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>InteSocial</title>
        <meta
          name="description"
          content="Elevate your social media and online news strategy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
