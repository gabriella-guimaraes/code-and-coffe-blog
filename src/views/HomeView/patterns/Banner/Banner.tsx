import Box from "@/components/Box/Box";
import Text from "@/components/Text/Text";

export default function Banner() {
    return(
        <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
            <Text>
                I need a Hero!
            </Text>
        </Box>
    )
}