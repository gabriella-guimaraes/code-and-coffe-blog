//Components
import Box from "@/components/atoms/Box/Box";
import Text from "@/components/atoms/Text/Text";
import theme from './../../../theme/theme';
import Link from "@/components/atoms/Link/Link";

export default function Footer() {
    return(
        <Box tag="footer" styleSheet={{backgroundColor: theme.colors.neutral.x999, alignItems: 'center', justifyContent: 'center', padding: '16px', gap: '8px', display: 'flex', flexDirection: 'column'}}>
            <Link href="https://github.com/gabriella-guimaraes" styleSheet={{  color: theme.colors.neutral.x000}}>
                Feito com ❤️️ por Gabriella Guimarães
            </Link>
            <Text styleSheet={{  color: theme.colors.neutral.x900}}>
                YHWH
            </Text>
        </Box>
    )
}