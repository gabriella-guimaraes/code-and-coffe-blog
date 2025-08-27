//Components
import Box from "@/components/atoms/Box/Box";
import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";

export default function Banner() {
    return(
        <Box tag="div" styleSheet={{backgroundColor: { xs: 'red', md: 'blue', sm: 'green' }}}>
            <Text>
                I need a Hero!
                <Icon name="LinkedIn" size="xl" />
                <Icon name="Email" size="md" />
                <Icon name="GitHub" size="lg" />
                <Icon name="MenuIcon" size="xs" />
                <Icon name="Settings" size="md" />
                <Icon name="HomeIcon" size="md" />
                <Icon name="Search" size="lg" />
                <Icon name="ArrowUp" size="xs" />
                <Icon name="Terminal" size="lg" />
                <Icon name="School" size="md" />
                <Icon name="Clock" size="md" />
                <Icon name="Logo" size="xl" />
            </Text>
        </Box>
    )
}