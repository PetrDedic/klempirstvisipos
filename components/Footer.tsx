import { AspectRatio, Card, Flex, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <Stack w="100%" gap={0}>
      <Card
        radius={0}
        w="100%"
        px={32}
        py="5vh"
        style={{
          background: `url(/Uvodni_a_proklikove_bannery_fotky/Zapati_foto.webp)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderTop: "8px solid #e3000f",
          borderBottom: "8px solid #e3000f",
        }}
      >
        <Flex
          maw={1280}
          mx="auto"
          w="100%"
          gap={smallWindow ? 16 : 64}
          direction={smallWindow ? "column" : "row"}
        >
          <Stack w="100%">
            <Text c="white" fz={32} fw={700} ta="center">
              Kde nás naleznete?
            </Text>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://frame.mapy.cz/s/fujecajagu"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ borderRadius: 16 }}
              />
            </AspectRatio>
          </Stack>
          <Stack w="100%" align="start" justify="center">
            <Text c="white" fz={32} fw={700} ta="center">
              Šipoš Klempířství
            </Text>
            <Stack gap={0} align="start" justify="start" c="white">
              <Text>IČ: 75398915</Text>
              <Text>DIČ: CZ9203185387</Text>
            </Stack>
            <Stack gap={0} align="start" justify="start" c="white">
              <Text>
                Telefon:{" "}
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
              <Text>
                Podrobné Kontakty naleznete{" "}
                <Text span fw={700} td="underlline">
                  <Link
                    href="/kontakt"
                    style={{
                      color: "inherit",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ZDE!
                  </Link>
                </Text>
              </Text>
            </Stack>
            <Stack gap={8} align="start" justify="start" c="white">
              <Text c="white" fz={32} fw={700} ta="center">
                Sledujte nás!
              </Text>
              <Flex wrap="wrap" gap={32} align="center" justify="center">
                <Image
                  src="/SVG/Instagram.svg"
                  alt="/SVG/Instagram.svg"
                  height={48}
                  width={48}
                />
                <Image
                  src="/SVG/Facebook.svg"
                  alt="/SVG/Facebook.svg"
                  height={48}
                  width={48}
                />
              </Flex>
            </Stack>
          </Stack>
        </Flex>
      </Card>
      <Stack align="center" justify="center" p={16} gap={8}>
        <Text>
          Klempířství Šipoš, Morkovice © 2012 Všechna práva vyhrazena.
        </Text>
        <Text>Designed by: paryn design</Text>
      </Stack>
    </Stack>
  );
};

export default Footer;
