import { ComponentProps } from "react";
import styled from "styled-components";

interface Props {
  as: string;
  h: number;
  noMargin?: true;
}

const HeadingGeneric = styled.h2<Props>(({ h, theme, noMargin }) => ({
  fontFamily: theme.fontFamily.heading,
  fontWeight: theme.fontWeight.medium,
  fontSize: theme.fontSize(6 - h),
  color: theme.palette.dark[90],
  margin: noMargin ? "0" : undefined
}));

const Heading = ({
  h,
  as,
  ...props
}: ComponentProps<typeof HeadingGeneric>) => (
  <HeadingGeneric as={as || `h${h}`} h={h} {...props} />
);

export default Heading;
