import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
        body: string,
        black:string,
        white:string,
        transparent: string,
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      large: string;
    };

    fontFamily: {
      primary: string;
      secondary: string;
    };
    weight: {
      thin: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
}
