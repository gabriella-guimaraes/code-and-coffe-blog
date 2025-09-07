  /* eslint-disable react/display-name */

//Components
import Box from "@/components/atoms/Box/Box";
import Text from "@/components/atoms/Text/Text";
import theme from "@/theme/theme";

//React
import React from "react";

interface FeedProps {
    children?: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return(
    <Box 
      tag="div" 
      styleSheet={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        tag="div"
        styleSheet={{
          backgroundColor: theme.colors.neutral.x999,
          color: theme.colors.neutral.x000,
          width: { xs: "100%", md: "60%" },
          minHeight: "70vh",
          borderRadius: "24px",
          padding: "24px",
        }}
        >
          <Text variant="heading1" styleSheet={{ marginBottom: "16px" }}>
              Últimas postagens
          </Text>
          {children}
      </Box>
    </Box>
  );
}

Feed.Posts = () => {
    return(
        <Box tag="div" styleSheet={{}}>
        <Text>
            Rapaziada, bomba, bomba!
        </Text>
    </Box>
    )
}