//Components
import Background from "@/components/atoms/Background/Background";
import Banner from "@/components/molecules/Banner/Banner";
import Box from "@/components/atoms/Box/Box";
import Feed from "@/components/organisms/Feed/Feed";

//Styles
import theme from "@/theme/theme";

//Configs
import { TemplateConfig } from './../../../services/templates/withTemplateConfig';

type HomeTemplateProps = { templateConfig: TemplateConfig };

export default function HomeTemplate({ templateConfig }: HomeTemplateProps){
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
                    <p>{templateConfig?.site?.title}</p>
                </Background>
        </Box>
    )
}

// export default templatePageHOC(HomeTemplate, {
//     title: "Home",
// });