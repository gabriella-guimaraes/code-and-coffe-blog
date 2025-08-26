import Box from "@/components/atoms/Box/Box";
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
            </Box>
    )
}