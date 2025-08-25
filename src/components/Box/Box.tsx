import React from "react";

//Components
import { BaseComponent } from "@/theme/BaseComponent";

//Styles
import { StyleSheet } from "@/theme/StyleSheet";

interface BoxProps {
    tag: any; // já sei, vou arrumar isso depois!
    children: React.ReactNode;
    stylesheet: StyleSheet;
}

export default function Box({ stylesheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || "div";

  return <BaseComponent as={Tag} stylesheet={stylesheet} {...props}>{children}</BaseComponent>;
}
