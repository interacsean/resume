import styled from "styled-components";

const Title = styled.h1(({ theme }) => ({
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.medium,
  fontSize: theme.fontSize(6.5),
  color: theme.palette.dark[90]
}));

export default Title;
