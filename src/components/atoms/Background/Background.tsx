//Components
import Box from "../Box/Box";
import Text from "../Text/Text";

export default function Background() {
  return(
    <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
        <Text>
            Reza 3 ave maria e vai meu filho
        </Text>
    </Box>

  ) 
}