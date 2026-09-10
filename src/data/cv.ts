export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface ExperienceRole {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly techStack: string;
  readonly responsibilities: string;
  readonly achievements?: readonly string[];
  readonly note?: string;
  readonly decoration: 'arcs' | 'rings' | 'core';
}

export interface Project {
  readonly title: string;
  readonly summary: string;
  readonly index: string;
  readonly tone: 'accent' | 'light';
  readonly href?: string;
}

export interface CvData {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly email: string;
  readonly telegram: string;
  readonly whatsapp: string;
  readonly linkedin: string;
  readonly github: string;
  readonly summary: readonly string[];
  readonly about: string;
  readonly skills: readonly SkillGroup[];
  readonly experience: readonly ExperienceRole[];
  readonly projects: readonly Project[];
  readonly education: {
    readonly degree: string;
    readonly school: string;
    readonly year: string;
    readonly city: string;
  };
  readonly languages: readonly { readonly name: string; readonly level: string }[];
}

export const cv: CvData = {
  name: 'Oleksandr Nesterenko',
  role: 'Frontend Developer',
  location: 'Nicosia, Cyprus',
  email: 'stan0men@yahoo.com',
  telegram: 'https://t.me/Stan0men',
  whatsapp: 'https://t.me/Stan0men',
  linkedin: 'https://www.linkedin.com/in/oleksandr-nesterenko-133b74146/',
  github: 'https://github.com/Stan0men',
  summary: [
    'Frontend Developer with 5+ years of experience building high-load web applications using React and the modern JavaScript/TypeScript ecosystem. Strong focus on performance optimization, scalable architecture, and maintainable UI systems.',
    'Experienced in working with complex, legacy-heavy products and improving their stability, performance, and user experience.',
  ],
  about:
    'I have worked as a frontend developer for more than 5 years, building high-load web applications with React, JavaScript, and TypeScript. I focus on rendering performance, scalable UI architecture, and staying current with modern web technologies. Three years of military service also shaped how I work: discipline, resilience, and delivering under pressure.',
  skills: [
    {
      title: 'Core',
      items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/SCSS'],
    },
    {
      title: 'Frameworks / Libraries',
      items: ['React.js', 'Redux Toolkit'],
    },
    {
      title: 'Tools',
      items: ['Webpack', 'Git', 'Jenkins', 'Gulp', 'Jest', 'Copilot', 'Cursor'],
    },
    {
      title: 'Architecture',
      items: ['Responsive Design', 'BEM', 'Tailwind'],
    },
  ],
  experience: [
    {
      company: 'Playtech',
      role: 'Middle Frontend Developer',
      period: 'May 2021 – April 2026',
      techStack: 'React, JavaScript, TypeScript, HTML5, CSS/SCSS, Jenkins',
      responsibilities:
        'Developed and maintained high-load gambling web applications. Built performance-sensitive UI with a focus on rendering efficiency, optimized re-renders and frame rates, and collaborated with design, backend, and QA. Improved legacy code quality and resolved production issues.',
      achievements: [
        'Reduced production issues by ~10% by improving debugging and stabilizing legacy code',
        'Improved frontend performance in high-load scenarios through render optimization',
        'Contributed to UI/UX improvements in complex product flows',
      ],
      note: 'From September 2022 to September 2025, remained officially employed while serving in the Armed Forces of Ukraine.',
      decoration: 'arcs',
    },
    {
      company: 'Infopulse Ukraine',
      role: 'Frontend Developer',
      period: 'October 2019 – March 2021',
      techStack: 'HTML5, CSS3, Vanilla JS, DX8, Adaptive design',
      responsibilities:
        'Delivered 10+ web applications and landing pages for international pharmaceutical clients. Ensured cross-browser compatibility and mobile-first responsiveness, with Lighthouse scores of 90+ for performance, UX, and SEO.',
      decoration: 'rings',
    },
    {
      company: 'Energy Soft',
      role: 'Frontend Developer',
      period: 'February 2019 – August 2019',
      techStack: 'HTML5, CSS3, SCSS, Angular 6, Bootstrap',
      responsibilities:
        'Created user-friendly UIs and responsive designs for 13+ projects, including landing pages and web applications built with Angular 6 and SCSS.',
      decoration: 'core',
    },
  ],
  projects: [
    {
      title: 'Personal CV site',
      summary:
        'This portfolio: a Vite + TypeScript rebuild of my CV, matching a dark Figma system with semantic HTML, accessible navigation, and a static production build.',
      index: '01',
      tone: 'accent',
      href: 'https://github.com/Stan0men/CV_Oleksandr_Nesterenko',
    },
    {
      title: 'High-load gambling UIs',
      summary:
        'Commercial work at Playtech: complex, performance-sensitive interfaces for high-load gambling products. Source is proprietary, so this card describes the work rather than a public demo.',
      index: '02',
      tone: 'accent',
    },
    {
      title: 'Pharma web apps',
      summary:
        'At Infopulse Ukraine I shipped 10+ applications and landing pages for international pharma clients — mobile-first, cross-browser, and tuned to Lighthouse 90+.',
      index: '03',
      tone: 'light',
    },
    {
      title: 'Angular landings',
      summary:
        'Energy Soft: 13+ responsive landing pages and web apps in Angular 6 and SCSS, focused on clear UI and fast delivery.',
      index: '04',
      tone: 'accent',
    },
  ],
  education: {
    degree: 'Specialist Degree, Energy Faculty',
    school: 'National University of Food Technologies',
    year: '2011',
    city: 'Kyiv',
  },
  languages: [
    { name: 'English', level: 'Upper Intermediate (B2)' },
    { name: 'Ukrainian', level: 'Native' },
  ],
};

export function toJsonLd(data: CvData): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.role,
    email: `mailto:${data.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nicosia',
      addressCountry: 'CY',
    },
    url: data.github,
    sameAs: [data.linkedin, data.telegram, data.github],
    knowsAbout: data.skills.flatMap((group) => group.items),
  };

  return JSON.stringify(schema);
}
