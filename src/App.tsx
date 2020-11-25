import React, { useMemo } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { Types } from "./Types";
import { TypographyTheme } from "./TypographyTheme";

import { ThemeProvider } from "@material-ui/core/styles";
import { createAppTheme } from "./appTheme";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const { theme } = useMemo(
    () => createAppTheme({ "isDarkModeEnabled": prefersDarkMode }), 
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>

    <ScopedCssBaseline>
      <>
        <TypographyTheme>{"This div's text looks like that of a button."}</TypographyTheme>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Types />
      </>
    </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
