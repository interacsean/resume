import { useState } from "react";
import config from "config";
import SideBarLayout from "components/SideBarLayout";
import SectionLayout from "components/SectionLayout";
import { P } from "components/Text";
import {
  NameTitle,
  Header,
  First,
  Last,
  RoleSubTitle,
  HidePrint
} from "./Resume.styles";
import useResumeData from "./useResumeData";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Filter from "./Filter";
import Achievements from "./Achievements";

export default function Resume() {
  const {
    statement,
    technicalSkills,
    offlineSkills,
    contactDetails,
    experience,
    education,
    achievements
  } = useResumeData();
  const [filterTerm, setFilterTerm] = useState("");
  const filter = {
    technologies: filterTerm.split(",").filter((s) => !!s.length)
  };

  return (
    <>
      <Header>
        <NameTitle>
          <First>Sean</First> <Last>Hasselback</Last>
        </NameTitle>
        <RoleSubTitle>
          Senior {config.mode === "front-end" ? "Front-end" : "Full-stack"}{" "}
          Developer
        </RoleSubTitle>
        {statement.map((line, i) => (
          <P key={i}>{line}</P>
        ))}
      </Header>
      <SideBarLayout>
        <SideBarLayout.SideBar>
          <SectionLayout title="Contact">
            <Contact contactDetails={contactDetails} />
          </SectionLayout>
          <SectionLayout title="Tech Skills">
            <Skills skills={technicalSkills} />
          </SectionLayout>
          <SectionLayout title="Offline Skills">
            {offlineSkills.map((s) => (
              <P key={s} noMargin>
                • {s}
              </P>
            ))}
          </SectionLayout>
          <SectionLayout title="Education">
            <Education education={education} />
          </SectionLayout>
        </SideBarLayout.SideBar>
        <SideBarLayout.Main>
          <SectionLayout
            title="Work Experience"
            actions={
              <HidePrint>
                <Filter
                  placeholder="Search technology..."
                  onTermChanged={setFilterTerm}
                />
              </HidePrint>
            }
          >
            <WorkExperience experience={experience} filter={filter} />
          </SectionLayout>

          <SectionLayout title="Achievements / Interests">
            <Achievements achievements={achievements} />
          </SectionLayout>
        </SideBarLayout.Main>
      </SideBarLayout>
    </>
  );
}
