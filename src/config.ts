import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bordbari.netlify.app/", // replace this with your deployed domain
  author: "Adel Bordbari",
  desc: "A simple personal website.",
  title: "Adel Bordbari",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 40,
  height: 40,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Stackoverflow",
    href: "https://stackoverflow.com/users/7958330/nitwit",
    linkTitle: `${SITE.title} on Stackoverflow`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adel-bordbari/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:bordbariadel@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/gradual_descent",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
];
