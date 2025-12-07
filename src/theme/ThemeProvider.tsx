'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <AppRouterCacheProvider>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </AppRouterCacheProvider>
    );
}
