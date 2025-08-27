/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from 'react';

import {
    ThemeProvider as StyledThemeProvider, 
    useTheme as useStyledTheme
} from 'styled-components';

//Styles
import theme, { Theme } from './theme';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function useTheme(): Theme {
 return useStyledTheme() as unknown as any;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return(
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    )
}