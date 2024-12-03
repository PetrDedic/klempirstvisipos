import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  AspectRatio,
  Button,
  Card,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import Hero from "../components/Hero";
import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Index.module.css";
import BeginCard from "../components/BeginCard";
import ImageCarousel from "../components/ImageCarousel";
import Form from "../components/Form";

export default function RealizacePage() {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Hero
        image="/Uvodni_a_proklikove_bannery_fotky/Realizace_uvodni_foto.webp"
        title="Ukázky provedených realizací"
        subText={
          <Text fw={100} c="#e3000f" fz={24} lts={0.5}>
            <Text span fw={700} c="#e3000f" fz={32} lts={0.5}>
              Klempířství Šipoš
            </Text>{" "}
            - Střechy na celý život!
          </Text>
        }
      />
      <Stack
        px={smallWindow ? 16 : 32}
        py={64}
        justify="center"
        align="center"
        gap={smallWindow ? 64 : 128}
        maw={1280}
        mx="auto"
        w="100%"
      >
        <ImageCarousel
          title="Welness Hulín Falcovaná krytina - Comax"
          carouselImages={[
            "/Realizace/Welness_Hulin/1_foto.webp",
            "/Realizace/Welness_Hulin/2_foto.webp",
            "/Realizace/Welness_Hulin/3_foto.webp",
            "/Realizace/Welness_Hulin/4_foto.webp",
            "/Realizace/Welness_Hulin/5_foto.webp",
            "/Realizace/Welness_Hulin/6_foto.webp",
            "/Realizace/Welness_Hulin/7_foto.webp",
            "/Realizace/Welness_Hulin/8_foto.webp",
            "/Realizace/Welness_Hulin/10_foto.webp",
          ]}
        />

        <ImageCarousel
          title="Bytový dům Šenov - Tondach"
          carouselImages={[
            "/Realizace/Bytovy_dum_Senov/1_foto.webp",
            "/Realizace/Bytovy_dum_Senov/2_foto.webp",
            "/Realizace/Bytovy_dum_Senov/3_foto.webp",
            "/Realizace/Bytovy_dum_Senov/4_foto.webp",
            "/Realizace/Bytovy_dum_Senov/5_foto.webp",
            "/Realizace/Bytovy_dum_Senov/6_foto.webp",
            "/Realizace/Bytovy_dum_Senov/7_foto.webp",
            "/Realizace/Bytovy_dum_Senov/8_foto.webp",
            "/Realizace/Bytovy_dum_Senov/9_foto.webp",
          ]}
        />

        <BeginCard />

        <ImageCarousel
          title="Rodinný dům Morkovice - Kolaříkova"
          carouselImages={[
            "/Realizace/Morkovice_Kolarikova/1_foto.webp",
            "/Realizace/Morkovice_Kolarikova/2_foto.webp",
            "/Realizace/Morkovice_Kolarikova/3_foto.webp",
            "/Realizace/Morkovice_Kolarikova/4_foto.webp",
            "/Realizace/Morkovice_Kolarikova/5_foto.webp",
            "/Realizace/Morkovice_Kolarikova/6_foto.webp",
            "/Realizace/Morkovice_Kolarikova/7_foto.webp",
            "/Realizace/Morkovice_Kolarikova/8_foto.webp",
            "/Realizace/Morkovice_Kolarikova/9_foto.webp",
          ]}
        />

        <ImageCarousel
          title="Rodinný dům Zborovice"
          carouselImages={[
            "/Realizace/Dum_Zborovice/1_foto.webp",
            "/Realizace/Dum_Zborovice/2_foto.webp",
            "/Realizace/Dum_Zborovice/3_foto.webp",
            "/Realizace/Dum_Zborovice/4_foto.webp",
            "/Realizace/Dum_Zborovice/5_foto.webp",
            "/Realizace/Dum_Zborovice/6_foto.webp",
            "/Realizace/Dum_Zborovice/7_foto.webp",
            "/Realizace/Dum_Zborovice/8_foto.webp",
            "/Realizace/Dum_Zborovice/9_foto.webp",
          ]}
        />

        <ImageCarousel
          title="Rodinný dům Morkovice"
          carouselImages={[
            "/Realizace/Rodinny_dum_Morkovice_2/1_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/2_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/3_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/4_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/5_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/6_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/7_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/8_foto.webp",
            "/Realizace/Rodinny_dum_Morkovice_2/9_foto.webp",
          ]}
        />

        <ImageCarousel
          title="Rodinný dům Ostravice Satjam - Rapid"
          carouselImages={[
            "/Realizace/Rodinny_dum_Ostravice/1_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/2_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/3_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/4_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/5_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/6_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/7_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/8_foto.webp",
            "/Realizace/Rodinny_dum_Ostravice/9_foto.webp",
          ]}
        />

        <ImageCarousel
          title="Rodinný dům Tísek - Falcová krytina"
          carouselImages={[
            "/Realizace/Dum_Tisek/1_foto.webp",
            "/Realizace/Dum_Tisek/2_foto.webp",
            "/Realizace/Dum_Tisek/3_foto.webp",
            "/Realizace/Dum_Tisek/4_foto.webp",
            "/Realizace/Dum_Tisek/5_foto.webp",
            "/Realizace/Dum_Tisek/6_foto.webp",
            "/Realizace/Dum_Tisek/7_foto.webp",
            "/Realizace/Dum_Tisek/8_foto.webp",
            "/Realizace/Dum_Tisek/9_foto.webp",
          ]}
        />

        <ImageCarousel
          title="Rodinný dům Želechovice"
          carouselImages={[
            "/Realizace/Dum_Zelechovice/1_foto.webp",
            "/Realizace/Dum_Zelechovice/2_foto.webp",
            "/Realizace/Dum_Zelechovice/3_foto.webp",
            "/Realizace/Dum_Zelechovice/4_foto.webp",
            "/Realizace/Dum_Zelechovice/5_foto.webp",
          ]}
        />
        <Form />
      </Stack>
    </>
  );
}
