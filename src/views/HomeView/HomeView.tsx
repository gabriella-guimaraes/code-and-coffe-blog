//Components
import Box from "@/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Banner from "./patterns/Banner/Banner";

//Styles
import theme from "@/theme/theme";
import Footer from "./patterns/Footer/Footer";

export default function HomeView() {
  return(
    <Box
        tag="main"
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          backgroundColor: { xs: 'lightgray', md: 'lightblue', sm: 'lightgreen'},
          flex: 1,
        }}
      >
      <Background />
      <Menu />
      <Banner />
      <Feed />
      <Feed.Posts />
      <Footer />
    </Box>

  ) 
}