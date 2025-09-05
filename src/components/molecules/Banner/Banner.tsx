//Components
import Box from "@/components/atoms/Box/Box";
import Icon from "@/components/atoms/Icon/Icon";
import Image from "@/components/atoms/Image/Image";
import Link from "@/components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";
import theme from "@/theme/theme";

export default function Banner() {
  return (
    <Box
      tag="div"
      styleSheet={{
        minHeight: "70vh",
        padding: "5rem 0px",
        marginBottom: "24px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "4rem",
        flexWrap: "wrap",
        margin: { xs: "0px 24px", md: "0px 120px" },
      }}
    >
      <Box
        tag="div"
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <Text variant="display1">Linhas de Código</Text>
        <Text variant="display2">&</Text>
        <Text variant="display1">Café</Text>
      </Box>

      <Box tag="div" styleSheet={{}}>
        <>
          <Image
            styleSheet={{
              borderRadius: "100%",
              width: "128px",
              height: "128px",
            }}
            src="https://github.com/gabriella-guimaraes.png"
            alt="Imagem de perfil da Gabriella Guimarães"
          />

          <Text variant="heading3" styleSheet={{ marginTop: "16px" }}>
            Gabriella Guimarães
          </Text>

          <Text variant="body1" styleSheet={{ marginTop: "8px", color: theme.colors.neutral.x300 }}>
            Desenvolvedora FullStack
          </Text>

          <Text variant="body1" styleSheet={{ marginTop: "6px", marginBottom: "8px", color: theme.colors.neutral.x300 }}>
            @gabriella-guimaraes - Brasil
          </Text>
          <Box
            tag="div"
            styleSheet={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <Link href="https://www.linkedin.com/in/gabriella-guimaraes/" colorVariant="neutral">
                <Icon name="LinkedIn" size="md" />
            </Link>
            <Link href="mailto:gabriellaguimaraes01@outlook.com" colorVariant="neutral">
                <Icon name="Email" size="md" />
            </Link>

            <Link href="https://github.com/gabriella-guimaraes" colorVariant="neutral">
                <Icon name="GitHub" size="md" />
            </Link>
          </Box>
        </>
      </Box>
    </Box>
  );
}
