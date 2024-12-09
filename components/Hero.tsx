import { Card, Flex, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { ReactNode } from "react";

const Hero = ({
  image,
  title,
  subText,
}: {
  image: string;
  title: ReactNode | string;
  subText?: ReactNode | string;
}) => {
  const smallWindow = useMediaQuery("(max-width: 1200px)");

  return (
    <Card
      radius={0}
      w="100%"
      px={16}
      py="15vh"
      mah={600}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderBottom: "8px solid #e3000f",
        position: "relative",
      }}
    >
      <Image
        src={image}
        alt=""
        style={{
          pointerEvents: "none",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
        fill
        quality={100}
        priority
      />
      <Flex
        direction="column"
        gap={32}
        align="center"
        justify="center"
        style={{ zIndex: 1 }}
      >
        <Image src="/SVG/Logo_Sipos.svg" alt="Logo" height={128} width={256} />
        <Flex direction="column">
          <Title
            order={1}
            c="white"
            ta="center"
            fz={smallWindow ? 32 : 48}
            lh={1.25}
          >
            {title}
          </Title>
          {subText && (
            <Text ta="center" c="#e3000f" fz={20} fw={100} lts={0.5}>
              {subText}
            </Text>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default Hero;
