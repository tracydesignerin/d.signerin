import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { theme } from './themeConstants';

export const ThemeProvider = (props) => {

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
