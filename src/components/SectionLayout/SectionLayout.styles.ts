import styled from "styled-components";

export const SectionContainer = styled.section(({ theme }) => ({
  marginBlockEnd: theme.space(1 / 2)
}));

export const TitleWrap = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  borderBottom: `1px solid ${theme.palette.neutral[100]}`,
  marginBlockEnd: theme.space(1 / 3),
  paddingBlockEnd: theme.space(1 / 14)
}));
