import config from "../config";

const isFe = config.mode === "front-end";

const statement =
  `Senior ${
    isFe ? "front-leaning" : ""
  } full-stack developer and consultant with 15 years of experience across agency, corporate, start-up and not-for-profit environments.  

Proficient at analysing requirements for system and application technical designs, delivery of front-end and full-stack web applications, third party API integrations, hybrid mobile apps, and UI component libraries in both modern and legacy web frameworks.

My strengths are understanding business requirements and architecting applications that meet current and future needs.  Passionate about pragmatic, maintainable application design` +
  `${isFe ? " and truly responsive UI." : ""}
`;

export default statement;
