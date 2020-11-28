import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
    createStyles({
        "root": {
            ...theme.typography.button,
            "backgroundColor": theme.myCustomProp.danger,
            [theme.breakpoints.up("md")]: {
                "backgroundColor": theme.typography.button.backgroundColor ?? "unset"
            },
            // https://material-ui.com/customization/spacing/#custom-spacing
            "padding": theme.spacing(2), //8px 16 32...
            "margin": theme.spacing(1, "auto"),
            "border": "1px solid black"
        }
    })
);


export function TypographyTheme(params: { children: React.ReactNode; }) {

    const { children } = params;

    const classes = useStyles();

    return <div className={classes.root}>{children}</div>;

}