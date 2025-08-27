"use client";

import React from "react";

//Components
import { BaseComponent } from "@/theme/BaseComponent";

//Styles
import theme, { TypographyVariants } from "@/theme/theme";
import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";

interface TextProps {
    variant?: TypographyVariants;
    tag?: "p" | "span" | "li" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

export default function Text({styleSheet, variant, ...props}: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant || "body1"] || {};

  return (
    <BaseComponent 
      styleSheet={{ 
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }} 
      {...props}
    />
  );
}

Text.defaultProps = {
  tag: "p",
  variant: "body1"
};