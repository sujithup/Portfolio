import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiFigma,
  SiNextdotjs,
  SiMaterialdesign,
  SiCss3,
  SiFirebase,
} from "react-icons/si";

export const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const skills = [
  {
    text: "Javascript",
    icons: SiJavascript,
  },
  {
    text: "ReactJs",
    icons: SiReact,
  },
  {
    text: "NextJs",
    icons: SiNextdotjs,
  },
  {
    text: "CSS",
    icons: SiCss3,
  },
  {
    text: "Tailwind Css",
    icons: SiTailwindcss,
  },
  {
    text: "Material UI",
    icons: SiMaterialdesign,
  },
  {
    text: "Flutter",
    icons: SiFlutter,
  },
  {
    text: "Figma",
    icons: SiFigma,
  },
  {
    text: "NodeJs",
    icons: SiNodedotjs,
  },
];

export const webProjects = [
  {
    id: 0,
    title: "Lawnber",
    tech: [
      SiNextdotjs,
      SiFirebase,
      SiTailwindcss,
      SiMaterialdesign,
      SiNodedotjs,
    ],
    link: "https://lawnber.com/",
    heading: "Full-Stack Lawn Service Website",
    description:
      "As the designer and developer behind the Lawn Service Website in my previous organization, I have meticulously crafted a platform that delivers a seamless user experience while leveraging cutting-edge technologies such as Next.js and Firebase. This project underscores my proficiency in front-end design, back-end development, authentication, and data management, all geared towards providing users with an intuitive and efficient platform. Designed to handle a substantial volume of traffic, the platform has successfully managed over 40 customers and accommodated the needs of 200 members, showcasing its scalability and reliability.",
    cover: "/lawnber.jpg",
  },
  {
    id: 1,
    title: "Hoobank",
    tech: [SiReact, SiFirebase, SiTailwindcss, SiMaterialdesign, SiNodedotjs],
    link: "https://sujithup.github.io/CreditCard/",
    code: "https://github.com/sujithup/CreditCard",
    heading: "Translating Figma Design into a Responsive Website",
    description:
      "Witness the seamless transition from design to reality with the conversion of meticulously crafted Figma designs into a fully responsive and lightning-fast website. Harnessing the power of industry-standard frameworks such as Next.js and Tailwind CSS, I've brought the vision to life, elevating the user experience to new heights.",
    cover: "/moobank.jpg",
  },
];

export const mobileApps = [
  {
    title: "Jetbot",
    tech: [SiReact, SiFirebase, SiTailwindcss, SiMaterialdesign, SiNodedotjs],
    code: "https://github.com/sujithup/Flutter-Jetbot",
    heading: "Flutter Robot Control: MQTT and Bluetooth Connectivity",
    description:
      "By combining the power of Flutter App framework, Bluetooth connectivity, and Firebase Google Authentication, I created a robust and user-friendly application that empowers users to control the robot with confidence and convenience. This project exemplifies my proficiency in mobile app development and my ability to integrate multiple technologies to deliver innovative solutions.",
    cover: "/jetbot.jpg",
  },
  {
    title: "Lifepoints",
    tech: [SiReact, SiFirebase, SiTailwindcss, SiMaterialdesign, SiNodedotjs],
    link: "https://www.figma.com/file/ltAcoAmzESK41BX0aVnYQ1/Lifepoints?type=design&node-id=0%3A1&mode=design&t=RcUOh7mxoCsndQGc-1",
    code: "https://github.com/sujithup/LifePoints",
    heading: "Flutter UI Mastery: Figma-Inspired Design Implementation",
    description: "I developed a captivating Flutter application focusing solely on the user interface (UI) aspect. Through this project, I gained valuable experience in translating design concepts into functional Flutter UI components. By replicating the Figma design with utmost precision, I demonstrated my attention to detail and commitment to delivering polished and visually appealing user interfaces.",
    cover: "/lifepoints.jpg",
  },
];

export const figmaDesign = [
  {
    title: "Jetmow",
    tech: [SiReact, SiFirebase, SiTailwindcss, SiMaterialdesign, SiNodedotjs],
    heading: "Figma: Neumorphic Robot Control UI",
    link: "https://www.figma.com/file/Mgo5aJFkOav3hoDuaiBYOR/Alltramatic-app?type=design&mode=design&t=6v8zOJA1AUTQGzzy-0",
    description: "I designed a robot control interface using Figma, drawing inspiration from the industry's latest design trends, particularly the neumorphic style. This modern take on a robot control application incorporates sleek, futuristic elements to deliver an intuitive and visually striking user experience. Through this project, I explored the forefront of design trends and applied them to create a forward-thinking robot control interface.",
    cover: "/alltramtic.jpg",
  },
  {
    title: "Social Script",
    tech: [SiReact, SiFirebase, SiTailwindcss, SiMaterialdesign, SiNodedotjs],
    link: "https://www.figma.com/file/bPa6HvU3RYc84emyBpOnf1/Social-Script?type=design&node-id=0%3A1&mode=design&t=6v8zOJA1AUTQGzzy-1",
    heading: "Figma: Client-Centric Design Collaboration",
    description: "I collaborated closely with a client to create a bespoke website design that precisely met their needs and preferences. By incorporating their specific requirements and feedback, I crafted a tailor-made website that not only fulfilled their vision but also exceeded their expectations. This project exemplifies my dedication to delivering high-quality design solutions that drive results and exceed client expectations.",
    cover: "/socialScript.jpg",
  },
];

export const socialMedia = [
  {
    id: 0,
    title: "Github",
    icon: FaGithub,
    link: "https://github.com/sujithup",
  },
  {
    id: 1,
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/sujithup/",
  },
  {
    id: 2,
    title: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/sujithsubramanya/",
  },
];

export const projectNames = [
  {
    id: 0,
    title: "Website Development",
    onClick: "#web",
  },
  {
    id: 1,
    title: "Flutter Applications",
    onClick: "#app",
  },
  {
    id: 2,
    title: "UI/UX Figma Designs",
    onClick: "#figma",
  },
];
