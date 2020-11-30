
import { useTheme } from '@material-ui/core/styles';
import {
  palette,
  spacing,
  typography
} from '@material-ui/system';

import {
  PaletteProps,
  SpacingProps,
  TypographyProps
} from '@material-ui/system';



import styled from "styled-components";

import Box from "@material-ui/core/Box";

import { styledTyped } from "./util/styledTyped";


const BoxFromHelper = styledTyped(
  (props: PaletteProps & SpacingProps & TypographyProps & React.HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  [
    palette,
    spacing,
    typography,
    () => `background-color: red !important;`
  ]
);


const BoxFromStyled = styled.div<
  PaletteProps & SpacingProps & TypographyProps
  >`${palette}${spacing}${typography}`;
// or import Box from '@material-ui/core/Box';

export function SystemDemo() {

  const { palette: { primary, background } } = useTheme();
  const { typography: { h3, h4, h6 } } = useTheme();

  const theme = useTheme();
  console.log("builtinPalette: ", (palette as any)({ "color": "primary.main", "theme": theme as any }));

  return (
    <>
      <BoxFromHelper
        color={primary.main}
        bgcolor={background.paper}
        fontFamily={h6.fontFamily}
        fontSize={{ "xs": h6.fontSize, "sm": h4.fontSize, "md": h3.fontSize }}
        p={{ "xs": 2, "sm": 3, "md": 4 }}
      >
        @material-ui/system
        </BoxFromHelper>
      <BoxFromStyled
        color="primary.main"
        bgcolor="background.paper"
        fontFamily="h6.fontFamily"
        fontSize={{ "xs": 'h6.fontSize', "sm": 'h4.fontSize', "md": 'h3.fontSize' }}
        p={{ "xs": 2, "sm": 3, "md": 4 }}
      >
        @material-ui/system
        </BoxFromStyled>

      <Box
      //color="primary.main"
      //bgcolor="background.paper"
      //fontFamily="h6.fontFamily"
      //fontSize={{ "xs": 'h6.fontSize', "sm": 'h4.fontSize', "md": 'h3.fontSize' }}
      //p={{ "xs": 2, "sm": 3, "md": 4 }}
      >
        @material-ui/system
        </Box>

    </>
  );
}