// import original module declarations
import 'styled-components';

// extend the DefaultTheme interface
declare module 'styled-components' {
  export interface CSSVariables {
    '--cyan': string;
    '--green': string;
    '--dark-green': string;
    '--shadow': string;
    '--border': string;
    '--bg': string;
    '--bg-2': string;
    '--hColor': string;
    '--txtColor': string;
  }

  export interface DefaultTheme {
    bg: string;
    bg2: string;
    hColor: string;
    txtColor: string;
    cssVariables?: CSSVariables;
  }
}
