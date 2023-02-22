import { Experience } from "data/experience";
import { useMemo } from "react";

const filterExperienceTechnologiesByPartialTerms = (
  terms: string[],
  experienceTechnologies: string[]
) =>
  terms.every(
    (term) =>
      experienceTechnologies.filter((expTech) =>
        expTech.toLowerCase().startsWith(term)
      ).length > 0
  );

function useExperienceFilter(
  experience: Experience[],
  filter: { technologies: string[] }
) {
  const filterTechnologiesLower = useMemo(
    () => filter.technologies.map((t) => t.toLowerCase().trim()),
    [filter.technologies]
  );
  return useMemo(
    () =>
      !filterTechnologiesLower.length
        ? experience
        : experience.filter((experienceRecord) =>
            filterExperienceTechnologiesByPartialTerms(
              filterTechnologiesLower,
              Object.values(experienceRecord.technologies).flat()
            )
          ),
    [experience, filterTechnologiesLower]
  );
}

export default useExperienceFilter;
