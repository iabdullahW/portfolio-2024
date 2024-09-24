import {
  JavascriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  CPlain,
  JavaOriginal,
  GithubOriginal,
  GitOriginal,
  SassOriginal,
} from "devicons-react";

export const githubProjectsURL =
  "https://api.github.com/users/iabdullahW/repos";

const githubLink = "https://github.com/iabdullahW";

export const profileDescription = [
  "As a passionate frontend developer, I thrive on the creative challenge of crafting visually stunning and user-friendly interfaces. Currently, I'm expanding my skill set by delving into the world of backend development, exploring the realms of Node.js and Express.js and also doing OOPs in JAVA.",
  "My journey in the realm of coding has been a thrilling adventure. From mastering HTML, CSS, and JavaScript to diving into advanced frontend library like React.js and frameworks like Next.js, I've always had a hunger for knowledge and a drive to push my boundaries.",
  "Now, as I embark on my journey into backend development, I'm excited to unravel the mysteries of server-side scripting and database management. Node.js and Express.js have become my companions on this new leg of the journey, and I'm relishing every moment of the learning process.",
  "At the heart of it all, I'm a coder at heart, finding joy in the elegant solutions and the intricate dance of algorithms. Whether it's frontend magic or backend wizardry, I approach each line of code with enthusiasm and dedication.",
  "As I continue to grow and evolve as a developer, my ultimate goal is to become a versatile full-stack engineer, bridging the gap between frontend and backend seamlessly. With each project, I inch closer to realizing this dream, armed with curiosity, determination, and a love for all things code.",
];

export const workExperienceTemplate = [
  {
    key: 1,
    company: "Fast Tech", // Add company name here
    description: [
      "Internship at Fast Tech ", // Add description points here
    ],
    duration: "started OCT 2023", // Add duration here
    designation: "Software Development Intern", // Add designation here
    type: "work",
  },
];


export const githubRepos = [
  {
    name: "Portfolio",
    techUsed: ["HTML", "CSS", "JavaScript","Sass","Bootstrap"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/my-portfolio`,
    liveURL: "https://iabdullahw.github.io/my-portfolio/",
  },
  {
    name: "Emoji-TicTacToe",
    techUsed: ["React", "TailwindCSS"],
    description:
      "Emoji TicTacToe adds a fun twist to the classic game with colorful emojis, offering single and local multiplayer modes, responsive design, and captivating animations.",
    githubLink: `${githubLink}/tictactoe-react`,
    liveURL: "https://emoji-tic-tac-toe.vercel.app/",
  },
  {
    name: "Vantage CRM",
    techUsed: ["Next.js", "TailwindCSS"],
    description:
      "This is a Client Paid Project",
    githubLink: `${githubLink}/vantage-project`,
    liveURL: "https://vantage-crm.vercel.app/",
  },
  {
    name: "Daka Web",
    techUsed: ["Next.js", "TailwindCSS"],
    description:
      "This is a Client Paid Project",
    githubLink: `${githubLink}/daska-copy
`,
    liveURL:"https://daska.vercel.app/",
  },
];

export const educationExperience = [
  {
    key: 1,
    institution: "FUAAST",
    graduation: "started Feb 2024",
    degree: "BSCS",
    type: "education",
  },
  {
    key: 2,
    institution: "GOVT. Degree College Gulshan",
    graduation: "July 2023",
    degree: "XII",
    type: "education",
  },
  {
    key: 3,
    institution: "KMH School",
    graduation: "June 2021",
    degree: "X",
    type: "education",
  },
];

export const navLinks = [
  {
    key: 1,
    link: "home",
    url: "/",
  },
  {
    key: 2,
    link: "experience",
    url: "/experience",
  },
  {
    key: 3,
    link: "projects",
    url: "/projects",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  {
    key: 1,
    name: "Python",
    type: "language",
    icon: PythonOriginal ? (
      <PythonOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 6,
    name: "Next.js",
    type: "framework",
    icon: NextjsOriginal ? (
      <NextjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 10,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Node.JS",
    type: "framework",
    icon: NodejsOriginal ? (
      <NodejsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 12,
    name: "MongoDB",
    type: "database",
    icon: MongodbPlain ? (
      <MongodbPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 13,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 14,
    name: "C",
    type: "language",
    icon: CPlain ? <CPlain className={iconClass} size={iconSize} /> : null,
  },
  {
    key: 15,
    name: "Express",
    type: "framework",
    icon: ExpressOriginal ? (
      <ExpressOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 16,
    name: "Java",
    type: "language",
    icon: JavaOriginal ? (
      < JavaOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 17,
    name: "Github",
    type: "language",
    icon:GithubOriginal ? (
      <GithubOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 18,
    name: "Git",
    type: "language",
    icon:GitOriginal ? (
      <GitOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 19,
    name: "Sass",
    type: "language",
    icon: SassOriginal ? (
      < SassOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
];
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/i-abdullah/",
  github: githubLink,
  kaggle:"https://www.kaggle.com/iabdullahw",
  instagram: "https://www.instagram.com/abdullahhhh.w/?hl=en",
};
