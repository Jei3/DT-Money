import "styled-components";
import { defaultTheme } from "../styles/themes/defaults";

type ThemeType = typeof defaultTheme


declare module 'styled-components' {
    export interface defaultTheme extends ThemeType {}
}