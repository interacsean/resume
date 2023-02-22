import { ComponentProps } from "react";
import { Heading, P } from "components/Text";
import styled from "styled-components";

export const AchievementDateCtnr = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end"
});

const AchTitleDefault = (props: ComponentProps<typeof Heading>) => (
  <Heading h="3" {...props} />
);

export const AchTitle = styled(AchTitleDefault)(({ theme }) => ({
  fontSize: theme.fontSize(1),
  marginTop: 0,
  marginBottom: 0
}));

export const Place = styled(P).attrs({ noMargin: true })(({ theme }) => ({
  color: theme.palette.neutral[100],
  fontSize: theme.fontSize(1 / 2)
}));
export const ItemCtnr = styled.div(({ theme }) => ({
  marginBlockEnd: theme.space(1)
}));

export const Date = styled(Place)({
  textAlign: "right"
});
