import styled from "styled-components";

const SectionTitle = styled.h3(({ theme }) => ({
  marginBlockEnd: theme.space(1 / 15),
  marginBlockStart: 0,
  fontFamily: theme.fontFamily.content,
  fontSize: theme.fontSize(1),
  fontWeight: theme.fontWeight.light,
  color: theme.palette.neutral[100],
  textTransform: "uppercase",
  letterSpacing: "0.06em"
}));

export default SectionTitle;
