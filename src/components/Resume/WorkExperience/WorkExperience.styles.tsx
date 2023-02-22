import { ComponentProps } from "react";
import styled from "styled-components";
import { Heading, P } from "components/Text";
import { print } from "theme/mediaQuery";

export const WorkExperienceContainer = styled.div({});

export const ExperienceEntryContainer = styled.div(({ theme }) => ({
  marginBottom: theme.space(4)
  // [print]: {
  //   pageBreakInside: "avoid"
  // }
}));

const JobTitleDefault = (props: ComponentProps<typeof Heading>) => (
  <Heading h="3" {...props} />
);

export const JobTitle = styled(JobTitleDefault)(({ theme }) => ({
  fontSize: theme.fontSize(1),
  marginTop: 0,
  marginBottom: 0
}));

export const WorkPlace = styled(P).attrs({ noMargin: true })(({ theme }) => ({
  color: theme.palette.neutral[100],
  fontSize: theme.fontSize(1 / 2)
}));

export const WorkCapacity = styled(WorkPlace)({
  textAlign: "right"
});

export const DateRange = styled(WorkPlace)({
  textAlign: "right"
});

export const Line1 = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  columnGap: theme.space(1 / 3)
}));

export const Line2 = styled(Line1)({
  alignItems: "flex-start"
});

export const Highlights = styled.ul(({ theme }) => ({
  marginBlockStart: "0.25em",
  marginBlockEnd: "0.5em",
  paddingInlineStart: theme.space(3)
}));

export const Hi = styled.li(({ theme }) => ({
  fontWeight: theme.fontWeight.light
}));

export const TechCategories = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.space(1 / 9)
}));

export const Tech = styled.ul(({ theme }) => ({
  paddingInlineStart: 0,
  marginBlockStart: 0,
  marginBlockEnd: 0,
  listStyleType: "none",
  display: "flex",
  flexWrap: "wrap",
  rowGap: theme.space(1 / 9),
  columnGap: theme.space(1 / 8)
}));

export const TechItem = styled.li(({ theme }) => ({
  display: "inline-block",
  borderRadius: "1em",
  color: theme.palette.dark[90],
  border: `1px solid ${theme.palette.dark[90]}`,
  padding: "0.1em 0.75em",
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize(1 / 2),
  backgroundColor: theme.palette.primary[10]
}));
