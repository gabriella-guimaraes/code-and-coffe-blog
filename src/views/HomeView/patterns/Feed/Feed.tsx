//Components
import Box from "@/components/Box/Box";
import Text from "@/components/Text/Text";

import React from "react";

interface FeedProps {
    children?: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return(
    <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
        <Text>
            Feed Base
        </Text>
        {children}
    </Box>
  );
}

Feed.Posts = () => {
    return(
        <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
        <Text>
            Rapaziada, bomba, bomba!
        </Text>
    </Box>
    )
}

