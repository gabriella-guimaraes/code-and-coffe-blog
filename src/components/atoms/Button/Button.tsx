//Componentes
import { ColorVariant } from "@/theme/defaults/colors";

//Styles
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { colorVariantBy, Variant } from "@/theme/utils/colorVariantBy";

//Hooks
import { useTheme } from "@/theme/ThemeProvider";
import { buttonSize, ButtonSize } from "@/theme/defaults/buttonSize";

interface ButtonProps extends ButtonBaseProps {
    children: React.ReactNode;
    fullWidth?: boolean;
    colorVariant?: ColorVariant;
    variant?: Variant;
    size?: ButtonSize;
    href?: string;
}

export default function Button({ 
    children, 
    styleSheet, 
    fullWidth = false, 
    colorVariant = "primary", 
    variant = "contained",
    size = "md",
    href,
}: ButtonProps){
    const theme = useTheme();
    return(
        <ButtonBase
        href={href}
        styleSheet={{
            alignSelf: 'flex-start',
            // Full width se a prop for true
            ...(fullWidth && { width: '100%' }),
            // Tamanho
            ...buttonSize[size],
            // Cor + variante
            ...colorVariantBy(theme, colorVariant, variant),
            ...styleSheet,
        }}>
            {children}
        </ButtonBase>
    )
}

Button.Base = ButtonBase;