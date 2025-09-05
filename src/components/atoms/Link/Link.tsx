"use client";

import React from "react";
import NextLink from "next/link";

//Components
import Text from "../Text/Text";

//Styles
import { StyleSheet } from "@/theme/StyleSheet";
import { TypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";
import { ColorVariant } from "@/theme/defaults/colors";

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

    const colorSet = theme.colors[colorVariant] ?? theme.colors.primary;

    const currentColorSet = {
      color: colorSet.x050,
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
