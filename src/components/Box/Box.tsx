import React from "react";

//Components
import { BaseComponent } from "@/theme/BaseComponent";

//Styles
import { StyleSheet } from "@/theme/StyleSheet";

interface BoxProps {
    tag?: "main" | "div" | "section" | "article" | "ul" | string;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || "div";

  return <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>{children}</BaseComponent>;
}
