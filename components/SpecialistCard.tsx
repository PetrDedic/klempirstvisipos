import { Card, Flex, Stack, Button, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

export default function SpecialistCard() {
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
      py={smallWindow ? 32 : 48}
    >
      <Flex
        direction={smallWindow ? "column" : "row"}
        gap={32}
        align="center"
        justify="space-between"
        w="100%"
        h="100%"
      >
        <Stack w="100%" gap={16}>
          <Flex mx="auto">
            <Image
              src="/SVG/Logo_Sipos.svg"
              alt="Logo"
              height={128}
              width={256}
            />
          </Flex>
          <Text c="white" ta="center">
            Specialisté na poskytování komplexních služeb v oblasti střech a
            klempířství.
          </Text>
        </Stack>
        <Flex align="center" justify="center" w="100%" h="100%">
          <Link
            href="/sluzby"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Button color="#e3000f" variant="filled" size="xl" radius="md">
              Zjistit více
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
}
