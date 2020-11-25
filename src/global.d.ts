
import type { Theme } from '@material-ui/core/styles/createMuiTheme';
import type { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {

    interface Theme {
        myCustomProp: {
            danger: React.CSSProperties['color'];
        }
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        myCustomProp: Theme["status"];
    }
}