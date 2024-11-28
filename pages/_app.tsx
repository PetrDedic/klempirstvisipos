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
        <title>Klempířství Ladislav Šipoš | Střechy na celý život!</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta
          name="description"
          content="Spojuji kreativitu a strategii, abych vaší značce dodal nový rozměr. Specializuji se na brand identitu, logotvorbu, webové stránky, tiskoviny a další kreativní služby."
        />
        <meta
          name="keywords"
          content="Paryn Design, kreativní služby, brand identita, logotvorba, bannery, tiskoviny, návrhy na textil, webové stránky, správa sociálních sítí, fotografie"
        />
        <meta name="author" content="Paryn Design" />
        <meta
          property="og:title"
          content="Paryn Design | Kreativní služby pro Vaši značku"
        />
        <meta property="og:site_name" content="Paryn Design" />
        <meta
          property="og:description"
          content="Specializuji se na brand identitu, logotvorbu, webové stránky, tiskoviny a další kreativní služby, které dodají vaší značce nový rozměr."
        />
        <meta
          property="og:image"
          content="/Fotky/paryn_design_banner_odkaz_socky.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paryndesign.cz/" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}
