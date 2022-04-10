import baseStyled, { ThemedStyledInterface, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  title: "theme",
  colors: {
    body: "#2b331f",
    black:"#000000",
    white:"#FFFFFF",
    transparent: "transparent"
  },

  fontSizes: {
    xs: "1.4rem",
    sm: "1.6rem",
    md: "1.8rem",
    large: "2.3rem",
  },
  fontFamily: {
    primary: "Poppins",
  },
  weight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;