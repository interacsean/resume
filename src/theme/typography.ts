import { ratioToTheX } from "./space";

const fontRatio = 1.2;

export const fontSize = (n: number, inEm = false) =>
  `${Math.pow(fontRatio, ratioToTheX(n))}${inEm ? "" : "r"}em`;

export const fontFamily = {
  content: 'Lato, Helvetica, Arial, "sans-serif"',
  heading: 'Montserrat, Helvetica, Arial, "sans-serif"'
};

export const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

export default {
  fontFamily,
  fontWeight,
  fontSize
};
