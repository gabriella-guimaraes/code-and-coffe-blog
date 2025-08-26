import React from "react";
import Box from "../Box/Box";
import theme from "@/theme/theme";

interface TextProps {
    tag?: "p" | "span" | "li" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    children?: React.ReactNode;
}

export default function Text(props: TextProps) {
  return (
    <Box styleSheet={{ fontFamily: theme.typography.fontFamily }} {...props} />
  );
}

Text.defaultProps = {
  tag: "p",
};