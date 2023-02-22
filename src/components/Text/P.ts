import styled from "styled-components";

type Props = {
  noMargin?: true;
};

const P = styled.p<Props>(({ theme, noMargin }) => ({
  fontSize: theme.fontSize(1),
  fontWeight: theme.fontWeight.light,
  lineHeight: "140%",
  color: theme.palette.dark[100],
  margin: noMargin ? 0 : undefined
}));

export default P;
