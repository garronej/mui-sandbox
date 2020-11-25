
import { createMuiTheme } from '@material-ui/core/styles';
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

export const createAppTheme = (params: { isDarkModeEnabled: boolean; }) => {

    const { isDarkModeEnabled } = params;

    const theme = createMuiTheme({
        // https://material-ui.com/customization/palette/#using-a-color-object
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
            "danger": '#e53e3e'
        }
    });

    return { theme };

};


