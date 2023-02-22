import styled from "styled-components";
import { P } from "components/Text";
import { ComponentProps } from "react";

export const SkillsWrap = styled.div({});

export const SkillLine = styled.div(({ theme }) => ({
  display: "flex",
  columnGap: theme.space(1 / 8)
}));

const NameStyledP = styled(P)(({ theme }) => ({
  color: theme.palette.dark[90]
}));

export const Name = (props: ComponentProps<typeof P>) => (
  <NameStyledP as="span" {...props} />
);
// export const Name = Name1.withComponent('span');

export const Rank = styled.span(({ theme }) => ({
  color: theme.palette.primary[100]
}));
