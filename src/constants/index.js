export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Movix',
    desc: 'Movix is a dynamic platform offering seamless movie browsing and streaming, powered by a robust API for easy exploration.',
    subdesc:
      'Built with Next.js 14, Tailwind CSS, and TypeScript, Movix ensures optimal performance and a visually appealing user experience.',
    href: 'https://movixtwo.vercel.app/',
    texture: '/textures/project/movix.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Apple VR Site Clone ',
    desc: 'A high-fidelity Apple VR website clone featuring sleek design, interactive elements, and immersive visuals for an engaging user experience.',
    subdesc:
      "This project replicates Apple's VR site using HTML, CSS, JavaScript, and Locomotive Library, focusing on UI/UX and smooth animations.",

    href: 'https://appleclone-phi.vercel.app/',
    texture: '/textures/project/apple.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.063,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, -4, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 0, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'DezineXpert Uphomes',
    pos: 'Full-Stack Developer',
    duration: 'Aug 2023 - May 2024',
    title:
      'Developed Next.js website and React Native app, enhancing engagement 60%, collaborating cross-functionally to deliver quality code.',
    icon: '/assets/dezine.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Freelancer',
    pos: 'Full-Stack Developer',
    duration: 'July 2022 - April 2023',
    title:
      'Developed product website utilizing Next.js and React and component libraries Designed intuitive and responsive web pages to enhance user engagement and experience',
    icon: '/assets/freelance.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Pitney Bowes',
    pos: 'Software Engineer',
    duration: 'Jan 2022 - June 2022',
    title:
      'Developed APIs with Python/Django, resolved bugs using React/Node.js, and collaborated on IoT printer management projects.',
    icon: '/assets/pitney.png',
    animation: 'clapping',
  },
];
