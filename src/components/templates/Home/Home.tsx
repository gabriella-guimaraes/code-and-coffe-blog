import Box from "@/components/atoms/Box/Box";
import Text from "@/components/atoms/Text/Text";
import Banner from "@/components/molecules/Banner/Banner";
import Feed from "@/components/organisms/Feed/Feed";
import theme from "@/theme/theme";

export default function HomeTemplate(){
    return(
        <Box
            tag="main"
            styleSheet={{
            fontFamily: theme.typography.fontFamily,
            backgroundColor: { xs: 'lightgray', md: 'lightblue', sm: 'lightgreen'},
            flex: 1,
            }}>
                <Banner />
                <Feed />
                <Feed.Posts />
            <Text tag="h1" variant="display1">
                Teste do h1
            </Text>
            <Text tag="h2" variant="heading2">
                Teste do h1
            </Text>
            <Text tag="h3" variant="body3">
                Teste do h1
            </Text>
            </Box>
    )
}