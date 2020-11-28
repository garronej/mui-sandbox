
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import type { ButtonProps, ButtonClassKey } from '@material-ui/core/Button';
import { Omit } from '@material-ui/types';
import type { Id } from "evt/tools/typeSafety";
import styled  from "styled-components";
import { darken } from '@material-ui/core/styles';

export type Props = {
  color: "red" | "blue";
};

const useStyles = makeStyles(
  theme => createStyles<Id<ButtonClassKey, "root" | "label" | "disabled">, Props>({
    "root": {
      "background": ({ color }) =>
        color === "red"
          ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      "boxShadow": ({ color }) =>
        color === 'red'
          ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
          : '0 3px 5px 2px rgba(33, 203, 243, .3)',
      //"color": "white",
      "margin": theme.spacing(2),
      "&$disabled": { // https://material-ui.com/customization/components/#use-rulename-to-reference-a-local-rule-within-the-same-style-sheet
        "background": "rgba(0, 0, 0, 0.12)",
        "boxShadow": "none",
      }
    },
    "label": {
      "color": theme.palette.text.hint,
      "&:hover": {
        "color": theme.palette.text.primary
      }
    },
    "disabled": {
    }
  })
);


function MyButton(props: Props & Omit<ButtonProps, keyof Props>) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button classes={classes} className="MyButton" {...other} />;
}


const StyledMyButton = styled(MyButton)`
  ${({ theme, color }: Parameters<typeof MyButton>[0] & { theme: Theme; }) => `
    

  ${theme.breakpoints.up("sm")} {

    &.Mui-disabled .MuiButton-label {
        color: ${darken(color === "red" ? theme.palette.primary.main : theme.palette.primary.light, 0.2)};
    }

  }
  `}
`;


export { StyledMyButton as MyButton };

