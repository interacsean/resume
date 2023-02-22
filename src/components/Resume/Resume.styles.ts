import { Title, SectionTitle } from "components/Text";
import styled from "styled-components";

export const Header = styled.header({});

export const First = styled.span({});

export const Last = styled.span({});

export const HidePrint = styled.div(() => ({
  "@media print": {
    display: "none"
  }
}));

export const NameTitle = styled(Title)(({ theme }) => ({
  lineHeight: "100%",
  margin: "0.25em 0 0.125em",
  [First]: {
    fontWeight: theme.fontWeight.semiBold
  },
  [Last]: {
    color: theme.palette.primary[100]
  }
}));

export const RoleSubTitle = styled(SectionTitle)(({ theme }) => ({
  lineHeight: "100%",
  margin: "0.25em 0 0.5em",
  fontSize: theme.fontSize(2.5),
  color: theme.palette.neutral[100],
  borderBottom: "none"
}));
