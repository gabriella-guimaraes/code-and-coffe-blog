import React from "react";

//Styles
import styled from "styled-components";
import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
    styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    //Configuração default dos components
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
    return (
        <StyledBaseComponent {...props} />
    )
}

BaseComponent.defaultProps = {
    styleSheet: {},
};