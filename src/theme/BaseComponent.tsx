import React from "react";

//Styles
import styled from "styled-components";
import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
    stylesheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
    ${({ stylesheet }) => parseStyleSheet(stylesheet)}
`;

export const BaseComponent = (props) => {
    return (
        <StyledBaseComponent {...props} />
    )
}

BaseComponent.defaultProps = {
    stylesheet: {},
};