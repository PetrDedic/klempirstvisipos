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
import Form from "../components/Form";
import SpecialistCard from "../components/SpecialistCard";

export default function IndexPage() {
  const smallWindow = useMediaQuery("(max-width: 1200px)");
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const cardsData = [
    {
      title: "Klempířství",
      image: "/Domu/1_foto_domu.webp",
      link: "/sluzby#klempistvi",
    },
    {
      title: "Tesařství",
      image: "/Domu/2_foto_domu.webp",
      link: "/sluzby#tesarstvi",
    },
    {
      title: "Pokrývačství",
      image: "/Domu/3_foto_domu.webp",
      link: "/sluzby#pokryvacstvi",
    },
  ];

  const carouselImages = [
    "/Domu/4_foto_domu.webp",
    "/Domu/5_foto_domu.webp",
    "/Domu/6_foto_domu.webp",
    "/Domu/7_foto_domu.webp",
    "/Domu/8_foto_domu.webp",
    "/Domu/9_foto_domu.webp",
    "/Domu/10_foto_domu.webp",
    "/Domu/11_foto_domu.webp",
  ];

  return (
    <>
      <Hero
        image="/Uvodni_a_proklikove_bannery_fotky/Domu_uvodni_foto.webp"
        title="Klempířství Ladislav Šipoš"
        subText="Střechy na celý život!"
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
        <Stack gap={48} align="center" justify="center" w="100%">
          <Stack align="center" justify="center" gap={8}>
            <Title order={2} fz={32} ta="center" lh={1}>
              Nejvíce užívané služby
            </Title>
            <Text ta="center">Nabízíme široký výběr služeb!</Text>
          </Stack>
          <Grid w="100%">
            {cardsData.map((card, index) => {
              return (
                <Grid.Col key={index} span={{ base: 12, sm: 4, lg: 4 }}>
                  <Link
                    href={card.link}
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                      height: "100%",
                    }}
                  >
                    <AspectRatio ratio={1 / 1}>
                      <Card
                        p={0}
                        radius={16}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
                          backgroundImage: `url(${card.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                        className={classes.card}
                      >
                        <Flex
                          w="100%"
                          h="100%"
                          align="end"
                          justify="center"
                          p={smallWindow ? 16 : 32}
                        >
                          <Text
                            c="white"
                            fz={smallWindow ? 24 : "1.5vw"}
                            lh={1.25}
                            ta="center"
                            fw={700}
                            lts={0.75}
                          >
                            {card.title}
                          </Text>
                        </Flex>
                      </Card>
                    </AspectRatio>
                  </Link>
                </Grid.Col>
              );
            })}
          </Grid>
        </Stack>

        <Stack gap={48} align="center" justify="center" w="100%">
          <Stack align="center" justify="center" gap={8}>
            <Title order={2} fz={32} ta="center" lh={1}>
              Proč spolupracovat zrovna s námi?
            </Title>
            <Text ta="center">Zde jsou 3 jasné důvody!</Text>
          </Stack>
          <Grid w="100%">
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Stack w="100%" h="100%" align="center" justify="center">
                <Image
                  src="/SVG/Domek.svg"
                  alt="Domek"
                  height={128}
                  width={128}
                />
                <Text fz={24} lh={1.25} ta="center" fw={700} lts={0.75}>
                  Velký výběr služeb
                </Text>
                <Text ta="center">
                  Nabízíme veliký výběr služeb, které pokryjí většinu Vašich
                  požadavků.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Stack w="100%" h="100%" align="center" justify="center">
                <Image
                  src="/SVG/Doporuceno.svg"
                  alt="Doporuceno"
                  height={128}
                  width={128}
                />
                <Text fz={24} lh={1.25} ta="center" fw={700} lts={0.75}>
                  Velký výběr služeb
                </Text>
                <Text ta="center">
                  Nabízíme veliký výběr služeb, které pokryjí většinu Vašich
                  požadavků.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack w="100%" h="100%" align="center" justify="center">
                <Image
                  src="/SVG/Overeno.svg"
                  alt="Overeno"
                  height={128}
                  width={128}
                />
                <Text fz={24} lh={1.25} ta="center" fw={700} lts={0.75}>
                  Velký výběr služeb
                </Text>
                <Text ta="center">
                  Nabízíme veliký výběr služeb, které pokryjí většinu Vašich
                  požadavků.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>

        <BeginCard />

        <Stack gap={32} align="center" justify="center" w="100%">
          <Title order={2} fz={32} ta="center" lh={1}>
            Kdo vlastně jsme?
          </Title>
          <Text ta="center" maw={480}>
            Naše rodinná firma vznikla v roce 2002, kterou poté v roce 2010
            převzal syn po svém otci.
          </Text>
          <Text ta="center" maw={480}>
            Od úplného počátku jsme postavili nespočet nových střech. Naše
            realizace sahají od rekonstrukcí až po plně nové stavby.
          </Text>
          <Text ta="center" maw={480}>
            Zabýváme se převážně na rodinné domy, rekonstrukce a novostavby, kde
            se specializujeme na šikmé, ale i ploché střechy.
          </Text>
          <Carousel
            w="100%"
            withIndicators
            height={320}
            slideSize={{ base: "100%", sm: "50%" }}
            slideGap={smallWindow ? 16 : 48}
            loop
            align="start"
            classNames={classes}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {carouselImages.map((img) => (
              <Carousel.Slide key={img}>
                <AspectRatio
                  ratio={16 / 9}
                  style={{ position: "relative", borderRadius: 16 }}
                  h="100%"
                >
                  <Image
                    quality={100}
                    src={img}
                    alt={`${img} alt`}
                    fill
                    sizes="100vw"
                    style={{ borderRadius: 16 }}
                  />
                </AspectRatio>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Stack>

        <SpecialistCard />

        <Stack gap={32} align="center" justify="center" w="100%">
          <Text ta="center" maw={960}>
            Naše služby nabízíme po celé České republice, nejvíce se však
            zaměřujeme na zlínský, olomoucký a jihomoravský kraj. Při našich
            realizacích používáme nejkvalitnější materiály od renomovaných
            českých a zahraničních výrobců. Na úplném počátku realizace střechy
            stojí projektová dokumentace, kterou pokud nemáte zařízenou, jsme
            Vám schopni vypracovat.
          </Text>
          <Text ta="center" maw={960}>
            Po osobní konzultaci Vašich požadavků, Vám vytvoříme cenovou
            nabídku.
          </Text>
        </Stack>

        <Grid w="100%" gutter="xl">
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <AspectRatio
              ratio={4 / 5}
              style={{ position: "relative", borderRadius: 16 }}
              h="100%"
            >
              <Image
                quality={100}
                src="/Domu/12_foto_domu.webp"
                alt="/Domu/12_foto_domu.webp"
                style={{ borderRadius: 16 }}
                height={500}
                width={400}
              />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <AspectRatio
              ratio={4 / 5}
              style={{ position: "relative", borderRadius: 16 }}
              h="100%"
            >
              <Image
                quality={100}
                src="/Domu/13_foto_domu.webp"
                alt="/Domu/13_foto_domu.webp"
                style={{ borderRadius: 16 }}
                height={500}
                width={400}
              />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <AspectRatio
              ratio={4 / 5}
              style={{ position: "relative", borderRadius: 16, height: 320 }}
              h="100%"
            >
              <Image
                quality={100}
                src="/Domu/14_foto_domu.webp"
                alt="/Domu/14_foto_domu.webp"
                style={{ borderRadius: 16 }}
                height={500}
                width={400}
              />
            </AspectRatio>
          </Grid.Col>
        </Grid>
        <Form />
      </Stack>
    </>
  );
}
