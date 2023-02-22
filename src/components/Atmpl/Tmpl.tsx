import { PropsWithChildren } from "react";
import { TMPLContainer } from "./TMPL.styles";

export default function TMPL({ children }: PropsWithChildren<{}>) {
  return <TMPLContainer>{children}</TMPLContainer>;
}
