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

export default function SluzbyPage() {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Hero
        image="/Uvodni_a_proklikove_bannery_fotky/Sluzby_uvodni_foto.webp"
        title="Vyberte si službu dle svých požadavků"
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
        <Stack gap={16} align="center" justify="center" w="100%">
          <Title order={2} fz={32} ta="center" lh={1}>
            Na jaké služby se nejvíce specializujeme?
          </Title>
          <Text ta="center" maw={960}>
            Naše firma se specializuje na poskytování komplexních služeb v
            oblasti střech a klempířství. Naším cílem je zajistit, aby každý
            projekt byl dokončen s nejvyšší kvalitou a precizností.
          </Text>
        </Stack>

        <Grid w="100%" gutter={32}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack align="center" justify="center" w="100%" gap={64}>
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1}>
                  Klempířství
                </Title>
                <Text ta="center" maw={480}>
                  Provádíme veškeré klempířské práce. Nabízíme klempířské
                  materiály z rovinných plechů či svitků: měď, titanzinek,
                  hliník, pozink, barvené plechy, okapové systémy (žlaby, svody,
                  okapy) měděné a titanzinkové.kompletni výroba na míru vše
                  zaměříme a vyrobíme i atypicke výrobky.
                </Text>
              </Stack>
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1}>
                  Pokrývačství
                </Title>
                <Text ta="center" maw={480}>
                  Nabízíme profesionální pokrývačství různých typů střešních
                  krytin, včetně tašek, plechů, šindele a plochých střech.
                </Text>
                <Text ta="center" maw={480}>
                  Naše služby zahrnují kompletní montáž od přípravy po finální
                  dokončení.
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <AspectRatio
              ratio={4 / 3}
              style={{ position: "relative", borderRadius: 16 }}
              h={smallWindow ? 360 : "100%"}
            >
              <Image
                quality={100}
                src="/Sluzby/1_foto_Sluzby.webp"
                alt="/Sluzby/1_foto_Sluzby.webp"
                fill
                style={{ borderRadius: 16 }}
              />
            </AspectRatio>
          </Grid.Col>
        </Grid>

        <Card
          py="5vh"
          px="lg"
          radius={0}
          style={{
            position: "relative",
            width: "100lvw",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
          }}
          c="white"
          bg="#e3000f"
        >
          <Stack gap={16} align="center" justify="center" w="100%">
            <Title order={3} fz={32} ta="center" lh={1}>
              Potřebujete poradit s Vašim výběrem?
            </Title>
            <Text ta="center" maw={480}>
              Nevíte, jakou službu vybrat a nebo potřebujete slyšet odborný
              názor? Neváhajte nám zavolat na telefon:{" "}
              <Text span fw={700} td="underlline">
                <Link
                  href="tel:+420 605 743 535"
                  style={{
                    color: "inherit",
                    whiteSpace: "nowrap",
                  }}
                >
                  +420 605 743 535
                </Link>
              </Text>
            </Text>
          </Stack>
          <Stack gap={16} align="center" justify="center" w="100%">
            <Title order={3} fz={32} ta="center" lh={1}>
              Nebo .. vyplňtě bezplatný formulář!
            </Title>
            <Button color="white" size="lg" c="black">
              Vyplnit formulář
            </Button>
          </Stack>
        </Card>

        <Grid w="100%" gutter={32}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <AspectRatio
              ratio={4 / 3}
              style={{ position: "relative", borderRadius: 16 }}
              h={smallWindow ? 360 : "100%"}
            >
              <Image
                quality={100}
                src="/Sluzby/2_foto_Sluzby.webp"
                alt="/Sluzby/2_foto_Sluzby.webp"
                fill
                style={{ borderRadius: 16 }}
              />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack align="center" justify="center" w="100%" gap={64}>
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1}>
                  Tesařství a montáže střešních oken
                </Title>
                <Text ta="center" maw={400}>
                  Nabízíme tesařské služby, výrobu krovů, speciální tesařské
                  konstrukce i menší stavby, jako jsou například: pergoly,
                  altány a jiné...
                </Text>
                <Text ta="center" maw={400}>
                  Dále se taky specializujeme na montáže střešních oken.
                </Text>
              </Stack>
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1}>
                  Opravy a renovace střech
                </Title>
                <Text ta="center" maw={400}>
                  Provádíme opravy a renovace střech, včetně odstraňování
                  poškozených částí a materiálů.
                </Text>
                <Text ta="center" maw={400}>
                  Naši odborníci zajistí, že vaše střecha bude opět v perfektním
                  stavu.
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        <BeginCard />

        <Grid w="100%" gutter={32}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack
              align="center"
              justify="center"
              w="100%"
              gap={64}
              py={smallWindow ? 0 : 72}
            >
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1}>
                  Údržba a čištění produktů
                </Title>
                <Text ta="center" maw={480}>
                  Nabízíme pravidelnou údržbu a čištění střešních systémů a
                  klempířských prvků, aby se zajistil jejich dlouhá životnost a
                  optimální výkon.
                </Text>
              </Stack>
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1}>
                  Analýza a diagnostika problémů
                </Title>
                <Text ta="center" maw={480}>
                  Naši specialisté provádějí podrobnou analýzu a diagnostiku
                  problémů se střechou, aby přesně identifikovali a vyřešili
                  všechny možné závady.
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <AspectRatio
              ratio={4 / 3}
              style={{ position: "relative", borderRadius: 16 }}
              h={smallWindow ? 360 : "100%"}
            >
              <Image
                quality={100}
                src="/Sluzby/3_foto_Sluzby.webp"
                alt="/Sluzby/3_foto_Sluzby.webp"
                fill
                style={{ borderRadius: 16 }}
              />
            </AspectRatio>
          </Grid.Col>
        </Grid>

        <Flex w="100%" gap={32} align="center" justify="center">
          <AspectRatio ratio={1 / 2} w="33%" mah={smallWindow ? "auto" : "50%"}>
            <Card
              h={smallWindow ? "auto" : "50%"}
              radius={16}
              style={{
                background: `url(/Sluzby/5_foto_Sluzby.webp)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </AspectRatio>
          <AspectRatio ratio={1 / 1} w="100%">
            <Card
              radius={16}
              style={{
                background: `url(/Sluzby/4_foto_Sluzby.webp)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </AspectRatio>
          <AspectRatio ratio={1 / 2} w="33%" h={smallWindow ? "auto" : "50%"}>
            <Card
              h={smallWindow ? "auto" : "50%"}
              radius={16}
              style={{
                background: `url(/Sluzby/6_foto_Sluzby.webp)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </AspectRatio>
        </Flex>

        <Stack gap={32} align="center" justify="center" w="100%">
          <Title order={2} fz={32} ta="center" lh={1}>
            Děláme dva typy střech
          </Title>
          <Text ta="center" maw={960}>
            <Text span fw={700}>
              Šikmé střechy:
            </Text>{" "}
            Krovy dřevěné, krovy ocelové atd..
          </Text>
          <Text ta="center" maw={960}>
            <Text span fw={700}>
              Ploché střechy:
            </Text>{" "}
            Dřevěné konstrukce - trámové a bednění. Provádíme hydroizolace
            plochých střech fóliovým systémem PVC + asfaltovými pásy.
            Hydroizolace jsou vhodné na panelové i rodinné domy včetně garáží,
            teras, balkónů. Též zemní izolace.
          </Text>
        </Stack>

        <Grid w="100%" gutter={32}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack align="center" justify="center" w="100%" gap={64}>
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1} pb={16}>
                  Jaké používáme střešní krytiny?
                </Title>
                <Text ta="center" maw={960}>
                  <Text span fw={700}>
                    Tvrdé krytiny:
                  </Text>{" "}
                  tašky pálené, betonové, břidlice, vláknocementové šablony
                </Text>
                <Text ta="center" maw={960}>
                  <Text span fw={700}>
                    Povlakové krytiny:
                  </Text>{" "}
                  živičné pásy, folie
                </Text>
                <Text ta="center" maw={960}>
                  <Text span fw={700}>
                    Asfaltové šindele
                  </Text>{" "}
                </Text>
                <Text ta="center" maw={960}>
                  <Text span fw={700}>
                    Plechové krytiny:
                  </Text>{" "}
                  profilované krytiny imitující tašky, falcovaná krytina,
                  trapézové plechy
                </Text>
                <Text ta="center" maw={960}>
                  <Text span fw={700}>
                    Vlnovky:
                  </Text>{" "}
                  vláknocementové, prolisované asfaltové
                </Text>
                <Text ta="center" maw={960}>
                  <Text span fw={700}>
                    Polykarbonátové krytiny
                  </Text>{" "}
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack align="center" justify="center" w="100%" gap={64}>
              <Stack gap={16} align="center" justify="center" w="100%">
                <Title order={3} fz={32} ta="center" lh={1} pb={16}>
                  Děláme i stavební práce
                </Title>
                <Text ta="center" maw={960}>
                  Bourání zdiva, štítů, komínů, podezdívek atd. včetně likvidace
                  stavebních sutí
                </Text>
                <Text ta="center" maw={960}>
                  Vyzdívky nových podezdívek včetně železobetonových věnců pod
                  pozednice
                </Text>
                <Text ta="center" maw={960}>
                  Vyzdívky nových nosných zdí a štítů
                </Text>
                <Text ta="center" maw={960}>
                  Vyzdívky nových komínových těles
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}
