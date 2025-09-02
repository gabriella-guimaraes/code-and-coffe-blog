import { Theme } from "@/theme/theme";

export type ColorVariant = keyof Theme["colors"];
export type Variant = "ghost" | "contained" | "outlined";

function createVariant(theme: Theme, colorVariant: ColorVariant) {
  const colorSet = theme.colors[colorVariant];
  const neutralText = theme.colors.neutral.x000;

  return {
    contained: {
      backgroundColor: colorSet.x500,
      color: neutralText,
      hover: {
        backgroundColor: colorSet.x400,
      },
      focus: {
        backgroundColor: colorSet.x600,
      },
    },
    outlined: {
      border: "1px solid",
      backgroundColor: "transparent",
      color: colorSet.x500,
      borderColor: colorSet.x400,
      hover: {
        backgroundColor: colorSet.x050,
      },
      focus: {
        backgroundColor: colorSet.x100,
      },
    },
    ghost: {
      backgroundColor: "transparent",
      color: colorSet.x500,
      hover: {
        backgroundColor: colorSet.x050,
      },
      focus: {
        backgroundColor: colorSet.x100,
      },
    },
  } as const;
}

export function colorVariantBy(
  theme: Theme,
  colorVariant: ColorVariant,
  variant: Variant
) {
  const styles: Record<ColorVariant, ReturnType<typeof createVariant>> = {
    primary: createVariant(theme, "primary"),
    accent: createVariant(theme, "accent"),
    positive: createVariant(theme, "positive"),
    negative: createVariant(theme, "negative"),
    warning: createVariant(theme, "warning"),
    neutral: createVariant(theme, "neutral"),
  };

  return styles[colorVariant][variant];
}