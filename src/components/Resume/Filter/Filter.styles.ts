import styled, { CSSObject } from "styled-components";
import FilterFilled from "@ant-design/icons/FilterFilled";
import Input from "components/Input";

export const FilterContainer = styled.span(({ theme }) => ({
  position: "relative",
  ":hover": {
    [FilterIcon]: {
      color: theme.palette.primary[100]
    }
  }
}));

export const FilterIcon = styled(FilterFilled)({});

// https://gist.github.com/MoOx/9137295
const buttonReset: CSSObject = {
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  lineHeight: "normal",
  WebkitFontSmoothing: "inherit",
  MozOsxFontSmoothing: "inherit",
  WebkitAppearance: "none"
};

export const FilterIconCtnr = styled.div(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: theme.space(4),
  height: theme.space(4),
  [FilterIcon]: {
    color: theme.palette.neutral[100]
  }
}));

export const FilterInput = styled(Input)(({ theme }) => ({
  position: "relative",
  backgroundColor: "transparent",
  textIndent: theme.space(5),
  paddingLeft: 0,
  transition: "width .2s ease-out",
  ":not(:focus)": {
    width: theme.space(4)
  },
  ":focus": {
    width: "11em",
    textIndent: theme.space(4)
  }
}));
