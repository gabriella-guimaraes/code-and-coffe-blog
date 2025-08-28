"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { JSX } from "react";

//Styles
import styled from "styled-components";
import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
  // prop transitória: não será forwardada ao DOM
  $styleSheet?: StyleSheet;
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

export const BaseComponent = ({ styleSheet = {}, ...rest }: BaseComponentProps) => {
  // enviar como prop transitória para evitar que apareça como atributo HTML
  return <StyledBaseComponent $styleSheet={styleSheet} {...rest} />;
};

BaseComponent.defaultProps = {
    styleSheet: {},
};