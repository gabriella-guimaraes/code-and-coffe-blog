//Components
import Box from "@/components/Box/Box";
import Text from "@/components/Text/Text";

export default function Menu() {
  return(
    <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
        <Text>
            Pega o pato, pega o pato
        </Text>
    </Box>

  ) 
}