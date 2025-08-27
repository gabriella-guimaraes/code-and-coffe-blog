import { typography } from "./defaults/typography";

const theme = {
    typography,
};

export type Theme = typeof theme;
export type TypographyVariants = keyof typeof typography.variants;

export default theme;