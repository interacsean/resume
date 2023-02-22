import { PropsWithChildren } from "react";
import { SkillsWrap, SkillLine, Name, Rank } from "./Skills.styles";

interface Props {
  skills: Record<string, number>;
}

const MAX_STARS = 3;

function Skill({ children, rank }: PropsWithChildren<{ rank: number }>) {
  return (
    <SkillLine>
      <Rank>
        {Array(MAX_STARS)
          .fill(0)
          .map((_, i) => (i < rank ? "★" : "☆"))}
      </Rank>
      <Name>{children}</Name>
    </SkillLine>
  );
}

export default function Skills({ skills }: Props) {
  return (
    <SkillsWrap>
      {Object.entries(skills).map(([skillTitle, rank]) => (
        <Skill rank={rank} key={skillTitle}>
          {skillTitle}
        </Skill>
      ))}
    </SkillsWrap>
  );
}
