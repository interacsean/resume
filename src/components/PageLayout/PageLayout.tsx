import { PropsWithChildren } from "react";
import styled from "styled-components";
import { print } from "theme/mediaQuery";

const PageWrap = styled.div(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  padding: `0 ${theme.fontSize(5)}`,
  maxWidth: "65rem",
  [print]: {
    maxWidth: "100%"
  }
}));

export default function PageLayout({ children }: PropsWithChildren<{}>) {
  return <PageWrap>{children}</PageWrap>;
}
