import React, { useMemo, useEffect, useState } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { Types } from "./Types";
import { TypographyTheme } from "./TypographyTheme";

import { ThemeProvider } from "@material-ui/core/styles";
import { createAppTheme } from "./appTheme";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useEvt } from "evt/hooks";
import { Evt } from "evt";



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

  {

    const [isUpSm, setIsUpSm] = useState<boolean>(false);

    useEvt(
      ctx => {

        Evt.from(ctx, window, "resize")
          .toStateful()
          .attach(() => {

            setIsUpSm(window.innerWidth > theme.breakpoints.width("sm"))

          })

      },
      [theme]
    );

    useEffect(() => {

      console.log("evt", { isUpSm });

    }, [isUpSm]);

  }






  return (
    <ThemeProvider theme={theme}>

      <ScopedCssBaseline>
        <>
          <TypographyTheme>This div's text looks like that of a button.</TypographyTheme>
          <Button variant="contained" color="primary">
            Hello World
        </Button>
          <Types />
        </>
      </ScopedCssBaseline>
    </ThemeProvider>
  );

}

