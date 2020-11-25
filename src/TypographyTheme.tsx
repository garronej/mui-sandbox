import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
    createStyles({
        "root": {
            ...theme.typography.button,
            //"backgroundColor": theme.palette.background.paper,
            "padding": theme.spacing(2), //8px 16 32...
            "border": "1px solid black"

        },
    })
);


export function TypographyTheme(params: { children: React.ReactNode; }) {

    const { children } = params;

    const classes = useStyles();

    return <div className={classes.root}>{children}</div>;

}