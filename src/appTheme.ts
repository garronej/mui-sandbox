
import { createMuiTheme, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';
//import red from '@material-ui/core/colors/red';

/*
export interface SimplePaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}
*/

export const createAppTheme = (params: {
    isDarkModeEnabled: boolean;
    isReactStrictModeEnabled: boolean;
}) => {

    const {
        isDarkModeEnabled,
        isReactStrictModeEnabled
    } = params;

    const theme =
        responsiveFontSizes( //https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
            (isReactStrictModeEnabled ?
                unstable_createMuiStrictModeTheme :
                createMuiTheme
            )({ // https://material-ui.com/customization/palette/#using-a-color-object
                "palette": {
                    ...(!isDarkModeEnabled ? {} : { "type": "dark" }),
                    "primary": blue,
                    /*
                    "primary": {
                        "main": blue.A100,
                        "dark": red.A100,
                    }
                    */
                },
                "myCustomProp": {
                    "danger": "#e53e3e"
                },
                // https://material-ui.com/customization/globals/
                "overrides": {
                    // Style sheet name ⚛️
                    "MuiButton": {
                        // Name of the rule
                        "text": {
                            // Some CSS
                            "color": "white"
                        }
                    }
                }
            })
        );

    return { theme };

};


