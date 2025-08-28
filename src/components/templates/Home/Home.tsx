"use client";

//Components
import Box from "@/components/atoms/Box/Box";
import Banner from "@/components/molecules/Banner/Banner";
import Feed from "@/components/organisms/Feed/Feed";

//Styles
import theme from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

export default function HomeTemplate(){
    const theme = useTheme();

    return(
        <Box
            tag="main"
            styleSheet={{
            fontFamily: theme.typography.fontFamily,
            backgroundColor: theme.colors.primary.x050,
            flex: 1,
            }}
        >
                <Banner />
                <Feed />
                <Feed.Posts />
        </Box>
    )
}