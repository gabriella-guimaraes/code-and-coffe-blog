"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { JSX } from "react";

//Styles
import styled from "styled-components";
import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
    styleSheet?: StyleSheet;
}

interface BaseComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  styleSheet?: StyleSheet;
  viewBox?: string;
  xmlns?: string;
  as?: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    //Configuração default dos components
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = ({ styleSheet = {}, ...rest }: BaseComponentProps) => {
  return <StyledBaseComponent styleSheet={styleSheet} {...rest} />;
};

BaseComponent.defaultProps = {
    styleSheet: {},
};