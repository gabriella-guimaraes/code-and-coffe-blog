"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { JSX } from "react";

//Styles
import styled from "styled-components";
import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";
import React from "react";

interface StyledBaseComponent {
  // prop transitória: não será forwardada ao DOM
  $styleSheet?: StyleSheet;
  ref: any;
}

interface BaseComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  styleSheet?: StyleSheet;
  as?: any;
  [key: string]: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    //Configuração default dos components
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    ${({ $styleSheet }) => parseStyleSheet($styleSheet as any)}
`;

export const BaseComponent = React.forwardRef<HTMLElement, BaseComponentProps>(({ styleSheet = {}, ...rest }, ref) => {
  return <StyledBaseComponent ref={ref as unknown} $styleSheet={styleSheet} {...rest} />;
});

BaseComponent.displayName = "BaseComponent";

// BaseComponent.defaultProps = {
//     styleSheet: {},
// };