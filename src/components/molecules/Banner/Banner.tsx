//Components
import Box from "@/components/atoms/Box/Box";
import Icon from "@/components/atoms/Icon/Icon";
import Image from "@/components/atoms/Image/Image";
import Text from "@/components/atoms/Text/Text";

export default function Banner() {
    return(
        <Box tag="div" styleSheet={{}}>
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
                <Icon name="LinkedIn" size="md" />
                <Icon name="Email" size="md" />
                <Icon name="GitHub" size="md" />
            </Text>
        </Box>
    )
}