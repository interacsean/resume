import React, { PropsWithChildren } from "react";
import { ColumnWrap, SidePanel, MainPanel } from "./SideBarLayout.styles";

interface Props {
  children: [React.ReactNode, React.ReactNode];
}

function SideBarLayout({ children: [sideChildren, mainChildren] }: Props) {
  return (
    <ColumnWrap>
      {sideChildren}
      {mainChildren}
    </ColumnWrap>
  );
}

export default SideBarLayout;

SideBarLayout.SideBar = function SideBar({ children }: PropsWithChildren<{}>) {
  return <SidePanel>{children}</SidePanel>;
};

SideBarLayout.Main = function Main({ children }: PropsWithChildren<{}>) {
  return <MainPanel>{children}</MainPanel>;
};
