import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Web developer with a knack for crafting robust and scalable web applications. With 1.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Vite, as well as back-end technologies like JAVA, Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack Web developer with a passion for creating efficient and user-friendly web applications. With 1.5 years of professional experience, I have worked with a variety of technologies, including React, ViteJs, NodeJs, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Jul 2024",
    role: "Web Developer",
    company: "Techjet.Ai",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["ReactJs", "NodeJs","ExpressJs", "MongoDB"],
  },
  {
    year: "April 2023 - Aug 2023",
    role: "Python Intern",
    company: "WiseTech Source",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Core Python","Front-end"],
  },
  {
    year: "Feb 2023 - April 2023",
    role: "Frontend Developer",
    company: "Innosate Software",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Archestra",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://archestra.co/",
  },
  {
    title: "Slaycuts",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link:"https://slaycuts.certumventures.in/",
  },
  {
    title: "Suidhaga",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML","CSS","PHP", "Laravel"],
    link:"https://suidhaga.certumventures.in/",
  },
  {
    title: "E-commerce",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["ReactJs", "NodeJs","ExpressJs", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka, India ",
  phoneNo: "+91 6383389582",
  email: "samynathanshams@gmail.com",
};
