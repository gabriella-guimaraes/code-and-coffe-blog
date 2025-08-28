//Components
import Box from "@/components/atoms/Box/Box";
import Icon from "@/components/atoms/Icon/Icon";
import Image from "@/components/atoms/Image/Image";
import Text from "@/components/atoms/Text/Text";

export default function Banner() {
    return(
        <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
            <Text>
                <Image 
                    styleSheet={{
                        borderRadius: '100%',
                        width: '128px',
                        height: '128px',
                        }}
                    src="https://github.com/gabriella-guimaraes.png" 
                    alt="Imagem de perfil da Gabriella Guimarães"
                 />
                <Icon name="LinkedIn" size="xl" />
                <Icon name="Email" size="md" />
                <Icon name="GitHub" size="lg" />
            </Text>
        </Box>
    )
}