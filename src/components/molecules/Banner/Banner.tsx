"use client";

//Components
import Box from "@/components/atoms/Box/Box";
import Icon from "@/components/atoms/Icon/Icon";
import Image from "@/components/atoms/Image/Image";
import Link from "@/components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";

//Hooks
import { useTemplateConfig } from "@/services/templates/templateConfigContext";

//Styles
import theme from "@/theme/theme";

export default function Banner() {
  const templateConfig = useTemplateConfig();
  
  return (
    <Box
      tag="div"
      styleSheet={{
        width: "100%",
        minHeight: "70vh",
        padding: "5rem 0px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "center",
        background: "transparent",
      }}
    >

      <Box
        tag="div"
        styleSheet={{
          width: "100%",
          maxWidth: "100vw",
          padding: { xs: "0px 24px", md: "0px 120px" },
          display: { xs: "column", md: "row" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "2.5rem",
        }}
      >

        <Box
          tag="div"
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "8px",
            // width: { xs: "100%", md: "67%" },
          }}
        >
          <Text variant="display1">Linhas de Código</Text>
          <Text variant="display2">&</Text>
          <Text variant="display1">Café</Text>

          <Text 
            variant="body1"
            styleSheet={{ 
              color: theme.colors.neutral.x200, 
              width: { xs: "100%", md: "80%" }
            }}
            >
            Compartilhando estudos, experimentos e aprendizados que encontro em minha jornada na programação.
          </Text>
        </Box>

        <Box
          tag="div"
          styleSheet={{
            // width: { xs: "100%", md: "32%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <Image
            styleSheet={{
              borderRadius: "100%",
              width: { xs: "98px", md: "128px" },
              height: { xs: "98px", md: "128px" },
            }}
            src={templateConfig.personal?.avatar || "/assets/images/avatar-default.png"}
            alt="Imagem de perfil da Gabriella Guimarães"
          />

          <Text variant="heading3" styleSheet={{ marginTop: "8px", textAlign: { xs: "left", md: "center" } }}>
            {templateConfig.personal?.name || "Gabriella Guimarães"}
          </Text>

          <Text variant="body1" styleSheet={{ marginTop: "8px", color: theme.colors.neutral.x300, textAlign: { xs: "left", md: "center" } }}>
            {templateConfig.personal?.occupation || "Desenvolvedora FullStack"}
          </Text>

          <Text variant="body1" styleSheet={{ marginTop: "6px", marginBottom: "8px", color: theme.colors.neutral.x300, textAlign: { xs: "left", md: "center" } }}>
            @gabriella-guimaraes - Brasil
          </Text>

          <Box
            tag="div"
            styleSheet={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <Link href={templateConfig.personal?.socialNetworks?.linkedin || ""} colorVariant="neutral">
              <Icon name="LinkedIn" size="md" />
            </Link>
            <Link href={templateConfig.personal?.socialNetworks?.email || ""} colorVariant="neutral">
              <Icon name="Email" size="md" />
            </Link>

            <Link href={templateConfig.personal?.socialNetworks?.github || ""} colorVariant="neutral">
              <Icon name="GitHub" size="md" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
