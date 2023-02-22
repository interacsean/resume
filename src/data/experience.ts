export type Experience = {
  jobTitle: string;
  workPlace: string;
  workPlaceLink?: string;
  workCapacity: string;
  highlights: string[];
  dateRange: string;
  technologies: string[] | Record<string, string[]>;
};

const experience: Experience[] = [
  {
    jobTitle: "Technical Lead",
    workPlace: "IAG",
    workCapacity: "Full-time (Contract)",
    highlights: [
      "I support 5 development squads in building IAG's strategic customer insurance portal",
      "Preparing to onboard 3mil customers migrated from legacy platform",
      "Estimating feature size and advisory on build sequencing against dependency release roadmaps",
      "Technical design, solution architecture, dependent systems requirement analysis",
      "Release management, development standards, team leadership"
      // "Educated squads on organisation-led "
    ],
    dateRange: "Apr 2022–Current (10 mo)",
    technologies: [
      "React",
      "Redux",
      "Tailwind",
      "Jest",
      "Micro-FrontEnds",
      "TypeScript",
      "Node",
      "AWS",
      "Lambda",
      "New Relic",
      "Jenkins",
      "GitHub Pipelines",
      "Jira",
      "CI/CD"
    ]
  },
  {
    jobTitle: "Lead Developer / Consultant",
    workPlace: "EatwellApp",
    workCapacity: "Part-time (Contract)",
    highlights: [
      "Led development of a hybrid mobile app to help people with dietary requirements find restaurants",
      "Scoping of requirements and design of solution architecture",
      "Sprint management, converting business requirements into technical user stories, peer-review of code by remote developer, app store deployment"
    ],
    dateRange: "Jul 2021–Mar 2022 (8 mo)",
    technologies: [
      "React",
      "Recoil",
      "Styled-Components",
      "TypeScript",
      "Next.js",
      "Node/Express",
      "Capacitor",
      "XCode",
      "Android Studio",
      "PostgreSQL",
      "GCP",
      "CI/CD"
    ]
  },
  {
    jobTitle: "Full-Stack Developer / Founder",
    workPlace: "Options Profit Calculator",
    workCapacity: "Varying",
    highlights: [
      "Developed single-page app stock-options profit and loss calculator",
      "SEO and accessibility to rank #1 on Google for short-tail keywords",
      "Supported 20,000+ users per day"
    ],
    dateRange: "2008-Dec 2022 (14 yrs)",
    technologies: {
      Beta: [
        "React",
        "SASS/CSS Modules",
        "Next.js",
        "TypeScript",
        "Node/Express",
        "GCP",
        "VPS admin"
      ],
      Legacy: ["PHP", "jQuery 😑"]
    }
  },
  {
    jobTitle: "Technical Manager / Full-Stack Developer",
    workPlace: "Station Five",
    workCapacity: "Full-time",
    dateRange: "Jan 2018–Dec 2019 (2 yr)",
    highlights: [
      "Consultation with clients to determine business requirements and technical design",
      "Conducted developer recruitment and onboarding processes",
      "Led team of 5 devs, including sprint planning, agile ceremonies, PRs, to build B2B seafood marketplace app and website",
      "Introduced coding standards and developer tooling, such as TypeScript, code auto-formatting, pre-commit hooks"
    ],
    technologies: [
      "React",
      "Functional Programming",
      "Jest",
      "Node/Express",
      "TypeScript",
      "React Native",
      "Jira",
      "Vue.js",
      "Firebase",
      "PostgreSQL",
      "AWS",
      "CI/CD"
    ]
  },
  {
    jobTitle: "Full-Stack Developer",
    workPlace: "National Gallery Victoria",
    workCapacity: "Part-time (contract)",
    dateRange: "Oct 2015–Dec 2017 (2 yr)",
    highlights: [
      "Developed Gallery Guide app for web and native, using Ionic (Angular + Cordova)",
      "Integrated WordPress site with external APIs",
      "Automated workflow by connecting in-gallery info-screens to exhibition data",
      "Reduced load time from 15+ secs to < 2 secs on booking pages",
      "Consulted on system architecture, deployment workflow, diagnosis of site performance issues"
    ],
    technologies: [
      "Ionic",
      "Angular.js",
      "Cordova",
      "React Native",
      "Wordpress",
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL/MSSQL"
    ]
  },
  {
    jobTitle: "Web Developer",
    workPlace: "Australian College of Rural & Remote Medicine",
    workCapacity: "Part-time",
    dateRange: "2009–2015 (6 yrs)",
    highlights: [
      "Scoping, UX design and build of invoice system; integrated with payment gateway and MYOB",
      "Collaboration with CSIRO to build and integrate video-conference scheduling system",
      "CSS UI library design and maintenance"
    ],
    technologies: ["Drupal", "REST APIs", "HTML", "JavaScript", "CSS"]
  }

  // {
  //   jobTitle: "Web Developer",
  //   workPlace: "Bloomtools",
  //   workCapacity: "Full-time",
  //   workPlaceLink: "https://www.bloomtools.com/",
  //   dateRange: "2006–2008 (2 yrs)",
  //   highlights: [
  //     "Developed libraries for proprietary CMS and Email marketing platform, Payment gateway integration"
  //   ],
  //   technologies: ["PHP", "MySQL", "JavaScript", "REST APIs", "PayPal API"]
  // }
];

export default experience;
