import { AspectRatio, Card, Flex, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Hero from "../components/Hero";
import Image from "next/image";
import Link from "next/link";
import BeginCard from "../components/BeginCard";
import OfferCard from "../components/OfferCard";

export default function KontaktPage() {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Hero
        image="/Uvodni_a_proklikove_bannery_fotky/Kontakty_uvodni_foto.webp"
        title="Kontaktujte nás ještě dnes"
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
        <Title order={2} fz={32} ta="center" lh={1}>
          Kontakty - Klempířství Šipoš
        </Title>

        <Flex
          maw={720}
          mx="auto"
          w="100%"
          gap={smallWindow ? 16 : 64}
          direction={smallWindow ? "column" : "row"}
        >
          <Stack w="100%">
            <AspectRatio ratio={2 / 3} style={{ borderRadius: 16 }}>
              <Card
                p={0}
                radius={16}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
                  backgroundImage: `url(/Kontakt/374681337_2608911229267109_65386.webp)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "75%",
                }}
              />
            </AspectRatio>
          </Stack>
          <Stack w="100%" align="start" justify="center">
            <Stack gap={0} align="start" justify="start">
              <Text fz={48} fw={700} ta="center" lh={1}>
                Ladislav Šipoš
              </Text>
              <Text c="#e3000f" fz={24} fw={700}>
                Jednatel firmy
              </Text>
            </Stack>
            <Stack gap={0} align="start" justify="start">
              <Text fz={20}>IČ: 75398915</Text>
              <Text fz={20}>DIČ: CZ9203185387</Text>
            </Stack>
            <Stack gap={0} align="start" justify="start">
              <Text fz={20}>
                Telefon:{" "}
                <Text span fw={700} td="underlline" fz={20}>
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
              <Text fz={20}>
                Telefon:{" "}
                <Text span fw={700} td="underlline" fz={20}>
                  <Link
                    href="tel:+420 732 424 345"
                    style={{
                      color: "inherit",
                      whiteSpace: "nowrap",
                    }}
                  >
                    +420 732 424 345
                  </Link>
                </Text>
              </Text>
              <Text fz={20}>
                E-mail:{" "}
                <Text span fw={700} td="underlline" fz={20}>
                  <Link
                    href="mailto:l.sipos@seznam.cz"
                    style={{
                      color: "inherit",
                      whiteSpace: "nowrap",
                    }}
                  >
                    l.sipos@seznam.cz
                  </Link>
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Flex>

        <BeginCard />

        <Stack gap={48} align="center" justify="center" w="100%">
          <Stack align="center" justify="center" gap={8} w="100%">
            <Title order={2} fz={32} ta="center" lh={1}>
              Kde nás najdete na mapě?
            </Title>
            <Text ta="center">Morkovice-Slížany 87 / 768 33</Text>
            <AspectRatio ratio={16 / 9} w="100%" px="5vw">
              <iframe
                src="https://frame.mapy.cz/s/fujecajagu"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ borderRadius: 16 }}
              />
            </AspectRatio>
          </Stack>
        </Stack>

        <OfferCard />
      </Stack>
    </>
  );
}
