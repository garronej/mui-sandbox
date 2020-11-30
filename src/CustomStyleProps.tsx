
import styled from 'styled-components';
import { style, compose } from '@material-ui/system';
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// https://material-ui.com/system/basics/#custom-style-props
const gridGap = style({
  "prop": "gridGap",
  "themeKey": "spacing"
});

const Grid = styled(Box)`${gridGap}`;


export const textColor = style({
  prop: 'color',
  themeKey: 'palette',
});

export const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
});

const palette = compose(textColor, bgcolor);


export function GridExample(){

    const theme = useTheme();

    console.log(gridGap({ theme, "gridGap": [2, 3] }));
    console.log(palette({ theme, "bgcolor": "primary.main", "color": "primary.main" }));

    return <Grid display="grid" gridGap={[2, 3]} >...</Grid>
}


//const example = <Grid display="grid" gridGap={[2, 3]}>...</Grid>;