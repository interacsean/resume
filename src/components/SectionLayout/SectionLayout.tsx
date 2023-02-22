import { PropsWithChildren } from "react";
import { TitleWrap, SectionContainer } from "./SectionLayout.styles";
import { SectionTitle } from "components/Text";

type Props = PropsWithChildren<{
  title: string;
  actions?: React.ReactNode;
}>;

export default function SideBarLayout({ actions, title, children }: Props) {
  return (
    <SectionContainer>
      <TitleWrap>
        <SectionTitle>{title}</SectionTitle>
        {actions || null}
      </TitleWrap>
      <section>{children}</section>
    </SectionContainer>
  );
}
