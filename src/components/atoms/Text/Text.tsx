import React from "react";

//Components
import { BaseComponent } from "@/theme/BaseComponent";

//Styles
import theme from "@/theme/theme";
import { StyleSheet } from "@/theme/StyleSheet";

interface TextProps {
    variant?: "display1" | "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "body1" | "body2" | "body3" | "body4" | "body5";
    tag?: "p" | "span" | "li" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

export default function Text({styleSheet, variant, ...props}: TextProps) {
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