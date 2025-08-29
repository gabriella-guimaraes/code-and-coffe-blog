"use client";

import React from "react";
import NextLink from "next/link";

//Components
import Text from "../Text/Text";

//Styles
import { StyleSheet } from "@/theme/StyleSheet";
import { TypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

type ColorVariant =
  | "primary"
  | "accent"
  | "neutral"
  | "warning"
  | "negative"
  | "success";

interface LinkProps {
  href: string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: TypographyVariants;
  colorVariant?: ColorVariant;
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef<HTMLElement, LinkProps>(
  (
    {
      href,
      children,
      colorVariant = "primary",
      styleSheet,
      colorVariantEnabled = true,
      ...props
    }: LinkProps,
    ref
  ) => {
    const isIExternalLink = href.startsWith("http");
    const theme = useTheme();

    // Mapeamento explícito entre os "colorVariant" e as chaves reais do tema
    const variantToThemeKey: Record<ColorVariant, keyof typeof theme.colors> = {
      primary: "primary",
      accent: "accent",
      neutral: "neutral",
      warning: "warning",
      negative: "negative",
      success: "positive",
    };

    const themeKey = variantToThemeKey[colorVariant];
    const colorSet = theme.colors[themeKey] ?? theme.colors.primary; // fallback seguro

    const currentColorSet = {
      color: colorSet.x500,
      hover: { color: colorSet.x400 },
      focus: { color: colorSet.x600 },
    };

    const linkProps = {
      tag: "p",
      children,
      styleSheet: {
        textDecoration: "none",
        cursor: "pointer",
        ...(colorVariantEnabled && {
          color: currentColorSet.color,
        }),
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }),
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }),
        },
      },
      ...props,
    };

    if (isIExternalLink)
      return (
        <NextLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Text {...linkProps} />
        </NextLink>
      );

    return (
      <NextLink
        href={href}
        passHref
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

Link.displayName = "Link";
export default Link;
