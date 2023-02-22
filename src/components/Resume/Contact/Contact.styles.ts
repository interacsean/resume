import styled from "styled-components";
import { P } from "components/Text";

export const ContactWrap = styled.div({
  display: "flex"
});

export const Icon = styled.div(({ theme }) => ({
  paddingInlineEnd: theme.space(1 / 6)
}));

export const ContactDetail = styled(P).attrs({ noMargin: true })({});
