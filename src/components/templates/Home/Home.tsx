"use client";

//Components
import Background from "@/components/atoms/Background/Background";
import Banner from "@/components/molecules/Banner/Banner";
import Box from "@/components/atoms/Box/Box";
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
            flex: 1,
            alignItems: 'center',
            backgroundColor: theme.colors.neutral.x999,
            color: theme.colors.neutral.x000,
            }}
        >
                <Background>
                    <Banner />
                    <Feed />
                    <Feed.Posts />
                </Background>
                <Box
                    styleSheet={{
                        width: '100%',
                        height: '200vh',
                        backgroundColor: theme.colors.neutral.x000,
                    }}
                ></Box>
        </Box>
    )
}