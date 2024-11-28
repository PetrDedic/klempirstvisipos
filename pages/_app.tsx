import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "../styles/globals.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider
      theme={{
        fontFamily: roboto.style.fontFamily,
        headings: { fontFamily: roboto.style.fontFamily },
      }}
      forceColorScheme="light"
    >
      <Head>
        {/* Meta tags */}
        <title>Klempířství Šipoš | Střechy na celý život</title>
        <meta
          name="description"
          content="Klempířství Šipoš nabízí široký výběr služeb v oblasti střech. Specializujeme se na rodinné domy, rekonstrukce a novostavby se zaměřením na šikmé i ploché střechy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Klempířství Šipoš" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Klempířství Šipoš | Střechy na celý život"
        />
        <meta
          property="og:description"
          content="Klempířství Šipoš nabízí široký výběr služeb v oblasti střech. Specializujeme se na rodinné domy, rekonstrukce a novostavby se zaměřením na šikmé i ploché střechy."
        />
        <meta
          property="og:image"
          content="https://klempirstvisipos.cz/Uvodni_a_proklikove_bannery_fotky/Domu_uvodni_foto.webp"
        />
        <meta property="og:url" content="https://klempirstvisipos.cz" />
        <meta property="og:site_name" content="Klempířství Šipoš" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Klempířství Šipoš | Střechy na celý život"
        />
        <meta
          name="twitter:description"
          content="Klempířství Šipoš nabízí široký výběr služeb v oblasti střech. Specializujeme se na rodinné domy, rekonstrukce a novostavby se zaměřením na šikmé i ploché střechy."
        />
        <meta
          name="twitter:image"
          content="https://klempirstvisipos.cz/Uvodni_a_proklikove_bannery_fotky/Domu_uvodni_foto.webp"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}
