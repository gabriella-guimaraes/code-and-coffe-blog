/* eslint-disable @typescript-eslint/no-explicit-any */
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
    tag?: "p" | "span" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

// tipagem do ref: use HTMLParagraphElement, HTMLSpanElement ou HTMLElement dependendo do BaseComponent
const Text = React.forwardRef<HTMLElement, TextProps>(({ tag = "p", styleSheet, variant, children, ...props }, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant || "body1"] || {};

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      // se BaseComponent aceitar ref corretamente, o tipo baterá; caso contrário pode ser necessário ajustar BaseComponent
      ref={ref as unknown as React.Ref<HTMLElement>}
      {...props}
    >
      {children}
    </BaseComponent>
  );
});

Text.displayName = "Text";

// Text.defaultProps = {
//   tag: "p",
//   variant: "body1"
// };

export default Text;