"use client";

//Components
import Box from "@/components/atoms/Box/Box";
import Link from "@/components/atoms/Link/Link";
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

                <Link href="https://www.alura.com.br/" colorVariant="accent">
                    Ir para a Alura
                </Link>

                <Link href="/sobre" colorVariant="warning">
                    Ir para a página Sobre
                </Link>
        </Box>
    )
}