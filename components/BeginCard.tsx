import { Card, Flex, Stack, Button, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export default function BeginCard() {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <Card
      w="100%"
      radius={16}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
        backgroundImage:
          "url(/Uvodni_a_proklikove_bannery_fotky/Zacnete_nyni_foto.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      p={smallWindow ? 32 : 72}
    >
      <Flex
        direction={smallWindow ? "column" : "row"}
        gap={32}
        align="center"
        justify="space-between"
        w="100%"
        h="100%"
      >
        <Stack w="100%" gap={0}>
          <Text c="#e3000f" fz={32} fw={500} lts={0.5}>
            Začněte nyní!
          </Text>
          <Text c="white">
            Vyplňte bezplatný poptávkový formulář.
            <br />
            Nebo nám rovnou zavolejte:{" "}
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
        <Flex align="center" justify="center" w="100%" h="100%">
          <Link
            href="#form"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Button color="#e3000f" variant="filled" size="xl" radius="md">
              Vyplnit formulář
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
