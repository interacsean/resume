export type Education = {
  degree: string;
  major?: string;
  achievements: string[];
  institution: string;
  date: string;
};

const education: Education[] = [
  {
    degree: "Bachelor of Multimedia",
    major: "Major in Screen Production / Digital Video",
    achievements: ["GPA 6.1", "Recipient of multimedia medal"],
    institution: "Griffith University",
    date: "2002-2004"
  },
  {
    degree: "Improv Comedy training",
    achievements: ["Level 5"],
    institution: "The Improv Conspiracy Theatre",
    date: "2020-Ongoing"
  },
  {
    degree: "Diploma of Sociology",
    achievements: [],
    institution: "Alison online university",
    date: "2021"
  },
  {
    degree: "JavaScript ES6 course",
    achievements: [],
    institution: "Marcos Cáceres (Mozilla)",
    date: "2016"
  },
  {
    degree: "Intro to Functional Programming",
    institution: "NICTA",
    achievements: [],
    date: "2015"
  }
];

export default education;
