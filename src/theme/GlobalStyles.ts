import { createGlobalStyle } from "styled-components";
import { print as mediaPrint } from "./mediaQuery";
import typography from "./typography";

export default createGlobalStyle({
  html: {
    fontSize: "16px",
    fontFamily: typography.fontFamily.content
  },
  body: {
    margin: 0,
    padding: 0
  },
  [mediaPrint]: {
    html: {
      fontSize: "13px"
    }
  },
  "*": {
    boxSizing: "border-box"
  }
});
