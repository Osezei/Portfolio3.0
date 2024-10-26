import Drinks from "../public/assets/images/drinks.png";
import Kick from "../public/assets/images/kicks.png";
import Space from "../public/assets/images/space.png";
import Add from "../public/assets/images/add.png";
import Gym from "../public/assets/images/gym.png";
import Portfolio from "../public/assets/images/portfolio.png";
import TakeStudio from "../public/assets/images/photo.png";
import Grocery from "../public/assets/images/grocery.png";

export const link = [
  {
    id: 1,
    url: "/",
    title: "home",
  },
  {
    id: 2,
    url: "/about",
    title: "about",
  },
  {
    id: 3,
    url: "/project",
    title: "project",
  },
  {
    id: 4,
    url: "/contact",
    title: "contact",
  },
];

export const profileLink = [
  {
    id: 1,
    url: "https://github.com/Osezei",
    title: "GH",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/john-ikhimioya-652b071a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoQ8oXJKrRvG8ZloZME0G1A%3D%3D",
    title: "LN",
  },
  {
    id: 3,
    url: "https://www.twitter.com/osezei",
    title: "TW",
  },
];

export const project = [
  {
    id: 1,
    stack: "HTML 5, CSS 3, JAVASCRIPT",
    url: "https://takestudio.netlify.app/",
    github: "https://github.com/Osezei/TakeStudios",
    title: "TakeStudio",
    image: TakeStudio,
  },
  {
    id: 2,
    stack: "HTML 5, CSS 3, JAVASCRIPT",
    url: "https://prognexgym.netlify.app/",
    github: "https://github.com/Osezei/Gym-site",
    title: "Progenex",
    image: Gym,
  },
  {
    id: 3,
    stack: "REACTJS, CSS 3",
    url: "https://quotess-five.vercel.app/",
    github: "https://github.com/Osezei/Quotess",
    title: "Quotes",
    image: Add,
  },
  {
    id: 4,
    stack: "REACTJS, TAILWIND",
    url: "https://grocery-assistant.vercel.app/",
    github: "www.google.com",
    title: "Grocery Assistant",
    image: Grocery,
  },
  {
    id: 5,
    stack: "REACTJS, TAILWIND",
    url: "wine-flax.vercel.app",
    github: "https://github.com/Osezei/httpRequest",
    title: "Drinks",
    image: Drinks,
  },
  {
    id: 6,
    stack: "REACTJS, TAILWIND",
    url: "",
    github: "https://products-display-pracice.vercel.app/",
    title: "Kicks",
    image: Kick,
  },
  {
    id: 7,
    stack: "REACTJS, TAILWIND",
    url: "http://osezei-portfolio.vercel.app/",
    github: "https://github.com/Osezei/Osezei-react",
    title: "Portfolio",
    image: Portfolio,
  },
  {
    id: 8,
    stack: "NEXTJS, TAILWIND",
    url: "https://space-next-sigma.vercel.app/",
    github: "https://github.com/Osezei/SpaceNext",
    title: "Space",
    image: Space,
  },
];
