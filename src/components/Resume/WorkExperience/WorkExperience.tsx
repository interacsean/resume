import { Experience } from "data/experience";
import { P } from "components/Text";
import {
  WorkExperienceContainer,
  ExperienceEntryContainer,
  JobTitle,
  WorkPlace,
  WorkCapacity,
  DateRange,
  Line1,
  Line2,
  Highlights,
  Hi,
  Tech,
  TechItem,
  TechCategories
} from "./WorkExperience.styles";
import useExperienceFilter from "./useExperienceFilter";

interface Props {
  experience: Experience[];
  filter: {
    technologies: string[];
  };
}

function ExperienceEntry({ experience: exp }: { experience: Experience }) {
  const nestedTech = Array.isArray(exp.technologies)
    ? { "": exp.technologies }
    : exp.technologies;
  return (
    <ExperienceEntryContainer>
      <Line1>
        <JobTitle>{exp.jobTitle}</JobTitle>
        <DateRange>{exp.dateRange}</DateRange>
      </Line1>
      <Line2>
        <WorkPlace>@{exp.workPlace}</WorkPlace>
        <WorkCapacity>{exp.workCapacity}</WorkCapacity>
      </Line2>
      <Highlights>
        {exp.highlights.map((highlight) => (
          <Hi key={highlight}>{highlight}</Hi>
        ))}
      </Highlights>
      <TechCategories>
        {Object.keys(nestedTech).map((techName) => (
          <Tech key={techName}>
            {!!techName.length && <P noMargin>{techName}:</P>}
            {nestedTech[techName].map((tech) => (
              <TechItem key={tech}>{tech}</TechItem>
            ))}
          </Tech>
        ))}
      </TechCategories>
    </ExperienceEntryContainer>
  );
}

export default function WorkExperience({ experience, filter }: Props) {
  const filteredExperience = useExperienceFilter(experience, filter);
  return (
    <WorkExperienceContainer>
      {filteredExperience.map((exp, i) => (
        <ExperienceEntry
          experience={exp}
          key={`${exp.dateRange}-${exp.jobTitle}-${exp.workPlace}`}
        />
      ))}
    </WorkExperienceContainer>
  );
}
