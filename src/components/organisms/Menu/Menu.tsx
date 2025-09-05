//Components
import Box from "@/components/atoms/Box/Box";
import ButtonBase from "@/components/atoms/Button/ButtonBase";
import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";
import theme from "@/theme/theme";

export default function Menu() {
  return (
    <Box
      tag="div"
      styleSheet={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "0px 24px", md: "0px 120px" },
        color: theme.colors.neutral.x000,
        backgroundColor: "transparent",
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        zIndex: 1000,
        // opcional: considerar safe-area do iOS
        paddingTop: `calc(env(safe-area-inset-top) + 0px)`,
        isolation: "isolate",
        mixBlendMode: "difference",
      }}
    >
      <ButtonBase
        href="https://gabriellaguimaraesdev.vercel.app"
        textVariant="body3"
        styleSheet={{
          padding: "8px",
          borderRadius: "100%",
          backgroundColor: theme.colors.neutral.x000,
          color: theme.colors.neutral.x999,
          isolation: "isolate",
        }}
      >
        GG
      </ButtonBase>

      <ButtonBase
        textVariant="body3"
        styleSheet={{
          padding: "8px",
          borderRadius: "100%",
          backgroundColor: theme.colors.neutral.x000,
          color: theme.colors.neutral.x999,
          isolation: "isolate",
        }}
      >
        <Icon name="MenuIcon" size="sm" />
      </ButtonBase>
    </Box>
  );
}
