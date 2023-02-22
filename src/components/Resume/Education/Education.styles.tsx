import { Heading, P } from "components/Text";
import { ComponentProps } from "react";
import styled from "styled-components";

export const EducationContainer = styled.span(({ theme }) => ({}));

export const DegreeDateCtnr = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end"
});

export const ItemCtnr = styled.div(({ theme }) => ({
  marginBlockEnd: theme.space(1)
}));

export const Degree = (props: ComponentProps<typeof Heading>) => (
  <Heading h="5" {...props} noMargin />
);

export const Institution = styled(P).attrs({ noMargin: true })(({ theme }) => ({
  color: theme.palette.neutral[100],
  fontSize: theme.fontSize(1 / 2)
}));

export const DegreeDate = Institution;
