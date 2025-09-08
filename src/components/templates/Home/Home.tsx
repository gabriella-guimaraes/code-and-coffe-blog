//Components
import Background from "@/components/atoms/Background/Background";
import Banner from "@/components/molecules/Banner/Banner";
import Box from "@/components/atoms/Box/Box";
import Feed from "@/components/organisms/Feed/Feed";

//Styles
import theme from "@/theme/theme";

//Configs
import { withTemplateConfig } from "@/services/withTemplateConfig";

export default async function HomeTemplate(){
    const { templateConfig } = await withTemplateConfig({
        exemplo: "Ponpon shit",
    })

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