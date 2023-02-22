import styled from "styled-components";
import { print } from "theme/mediaQuery";

export const ColumnWrap = styled.div(({ theme }) => ({
  [theme.mediaQuery.min(theme.breakpoint.tablet)]: {
    display: "flex"
  },
  [print]: {
    display: "flex"
  },
  columnGap: "1rem"
}));

export const SidePanel = styled.aside(({ theme }) => ({
  flexBasis: `${(4 / 12) * 100}%`,
  [theme.mediaQuery.min(theme.breakpoint.tablet)]: {
    maxWidth: "13rem"
  },
  [print]: {
    flexBasis: `${(4 / 12) * 100}%`,
    maxWidth: "15rem"
  },
  flexShrink: 1
}));

export const MainPanel = styled.main({
  flexBasis: `${(8 / 12) * 100}%`,
  flexGrow: 1
});
