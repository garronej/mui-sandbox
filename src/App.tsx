import React, { useMemo, useEffect } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { Types } from "./Types";
import { TypographyTheme } from "./TypographyTheme";

import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createAppTheme } from "./appTheme";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MyButton } from "./MyButton";

export function App() {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const { theme } = useMemo(
    () => createAppTheme({
      "isDarkModeEnabled": prefersDarkMode,
      "isReactStrictModeEnabled": process.env.NODE_ENV !== "production"
    }),
    [prefersDarkMode]
  );

  {

    const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

    useEffect(() => {

      console.log({ isUpSm });

    }, [isUpSm]);

  }

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}> {/*https://material-ui.com/guides/interoperability/#theme*/}

        <StylesProvider injectFirst> {/*https://material-ui.com/guides/interoperability/#controlling-priority*/}


          <ScopedCssBaseline>
            <>
              <MyButton color="red">Red</MyButton>
              <MyButton color="blue">Blue</MyButton>
              <MyButton color="blue" disabled>Blue disabled</MyButton>
              <MyButton color="red" disabled>Red disabled</MyButton>
              <TypographyTheme>This div's text looks like that of a button.</TypographyTheme>
              <Button variant="contained" color="primary"> Hello World </Button>
              <Types />

            </>
          </ScopedCssBaseline>
        </StylesProvider>
      </StyledThemeProvider>
    </ThemeProvider>
  );

}

