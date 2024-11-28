import { Burger, Menu, Text, Flex, Drawer } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const smallWindow = useMediaQuery("(max-width: 1200px)");
  const [opened, { open, close }] = useDisclosure(false);

  const router = useRouter();

  const links = [
    { label: "Domů", link: "/" },
    { label: "Služby", link: "/sluzby" },
    { label: "Realizace", link: "/realizace" },
    { label: "Kontakt", link: "/kontakt" },
  ];

  return (
    <Flex
      p={8}
      px={32}
      justify={smallWindow ? "space-between" : "space-around"}
      align="center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,.25)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link href="/" style={{ color: "inherit", textDecoration: "inherit" }}>
        <Image src="/SVG/Logo_Sipos.svg" alt="Logo" height={48} width={96} />
      </Link>
      {smallWindow ? (
        <>
          <Burger
            opened={opened}
            onClick={opened ? close : open}
            color="white"
          />
          <Drawer size="100%" opened={opened} onClose={close}>
            <Flex gap={16} direction="column">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.link}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Text
                    c="black"
                    fw={router.pathname === link.link ? 700 : 400}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Drawer>
        </>
      ) : (
        <Flex gap={24} align="center" justify="center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Text
                py={4}
                px={16}
                c="white"
                fw={router.pathname === link.link ? 700 : 400}
                style={{
                  borderBottom:
                    router.pathname === link.link ? "solid 3px #e3000f" : "",
                }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
