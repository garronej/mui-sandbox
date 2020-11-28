
import styled from "styled-components";
import type { Theme } from '@material-ui/core/styles';

export function styledTyped<Props>(
    component: (props: Props) => JSX.Element,
    buildStyleSheet: (paramsWithTheme: { theme: Theme; } & Props) => string
) {
    return styled(component)`${buildStyleSheet}`;
}