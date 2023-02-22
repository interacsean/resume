import breakpoint from "./breakpoint";
import { fontWeight, fontSize, fontFamily } from "./typography";
import palette from "./palette";
import space from "./space";
import { max, min, range } from "./mediaQuery";

export { default as GlobalStyles } from "./GlobalStyles";

const theme = {
  breakpoint,
  fontWeight,
  fontSize,
  fontFamily,
  mediaQuery: { max, min, range },
  palette,
  space
};

export default theme;
