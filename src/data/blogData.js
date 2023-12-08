import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

export const blogData = {
  title: "Eri Schön - Le Blog",
  description: "Blog d'un développeur",
  image: "/images/erischon-blog-1.png",
  madeBy: "Eri Schön",
  madeByLink: "https://erischon.dev",
  madeAt: "Thiais, France",
  poweredBy: "Next.js",
};

export const navData = [
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
];

export const legalPaths = [
  {
    title: "Mentions légales",
    path: "/legal/legal-notice",
  },
];

export const socialData = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ericschonhofen/",
    icon: <SiLinkedin />,
  },
  {
    title: "GitHub",
    url: "https://github.com/erischon",
    icon: <SiGithub />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/i/flow/login?redirect_after_login=%2Ferischon",
    icon: <SiTwitter />,
  },
];
