"use client";

//Components
import Box from "@/components/atoms/Box/Box";
import Button from "@/components/atoms/Button/Button";
import ButtonBase from "@/components/atoms/Button/ButtonBase";
import Link from "@/components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";
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

                <ButtonBase href="/sobre" textVariant="body1" styleSheet={{marginBottom: '16px'}}>
                    Ir para a página Sobre
                </ButtonBase>

                <ButtonBase textVariant="body1">
                    Quero caféeee
                </ButtonBase>

                <Text variant="display1" tag="h1" styleSheet={{color: theme.colors.accent.x500}}>
                    Testando o Text
                </Text>

                <ButtonBase textVariant="heading1" styleSheet={{backgroundColor: theme.colors.accent.x500}} href="https://music.youtube.com/watch?v=bfl76Sr-Rsk&si=oPyxlBgTTfC-6VuA">
                    Olha a musiquinha 2000s
                </ButtonBase>
        </Box>
    )
}