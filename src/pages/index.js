import Head from "next/head";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Workshop</title>
        <meta name="description" content="Next Js - Workshop Xarala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Body />
      <Footer />
    </>
  )
}
