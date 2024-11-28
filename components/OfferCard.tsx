import { Card, Flex, Stack, Button, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export default function OfferCard() {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <Card
      w="100%"
      radius={16}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
        backgroundImage:
          "url(/Uvodni_a_proklikove_bannery_fotky/Jake_sluzby_nabizime_foto.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      p={smallWindow ? 32 : 72}
    >
      <Stack w="100%" gap={16}>
        <Text fz={32} ta="center" lh={1} fw={700} c="white">
          Jaké služby nabízíme?
        </Text>
        <Flex align="center" justify="center" w="100%" h="100%">
          <Link
            href="/sluzby"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button color="#e3000f" variant="filled" size="xl" radius="md">
              Naše služby
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Card>
  );
}
