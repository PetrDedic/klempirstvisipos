import { Card, Flex, Text, Title } from "@mantine/core";
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
  return (
    <Card
      radius={0}
      w="100%"
      px={16}
      py="15vh"
      mah={600}
      style={{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderBottom: "8px solid #e3000f",
      }}
    >
      <Flex direction="column" gap={32} align="center" justify="center">
        <Image src="/SVG/Logo_Sipos.svg" alt="Logo" height={128} width={256} />
        <Flex direction="column">
          <Title order={1} c="white" ta="center" fz={48}>
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
