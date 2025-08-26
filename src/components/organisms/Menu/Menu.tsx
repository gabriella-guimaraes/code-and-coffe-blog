//Components
import Box from "@/components/atoms/Box/Box";
import Text from "@/components/atoms/Text/Text";

export default function Menu() {
  return(
    <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
        <Text>
            Pega o pato, pega o pato
        </Text>
    </Box>

  ) 
}