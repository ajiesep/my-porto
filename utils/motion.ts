export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ajiesep",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ajie-setiawan-putra-33a835178/",
  },
  {
    id: 3,
    img: "/instagram3.svg",
    link: "https://www.instagram.com/ajiesep/",
  },
];
