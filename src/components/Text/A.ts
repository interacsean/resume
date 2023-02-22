import styled from "styled-components";

type Props = {
  underline?: "hover" | "none";
};

const A = styled.a<Props>(({ theme, underline }) => ({
  color: theme.palette.link[100],
  ":visited": {
    color: theme.palette.linkVisited[100]
  },
  ...(underline === "none"
    ? {
        textDecoration: "none"
      }
    : underline === "hover"
    ? {
        textDecoration: "none",
        ":hover": {
          textDecoration: "hover"
        }
      }
    : {})
}));

export default A;
