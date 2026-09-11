export interface SkillGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface ExperienceRole {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly techStack: string;
  readonly bullets: readonly string[];
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

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly display: string;
  readonly external: boolean;
}

export interface ContactCard {
  readonly title: string;
  readonly links: readonly ContactLink[];
}

export interface CvData {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly availability: string;
  readonly email: string;
  readonly telegram: string;
  readonly telegramHandle: string;
  readonly whatsapp: string;
  readonly whatsappHandle: string;
  readonly linkedin: string;
  readonly github: string;
  readonly summary: readonly string[];
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
  readonly contactCards: readonly ContactCard[];
}

export const cv: CvData = {
  name: 'Oleksandr Nesterenko',
  role: 'Frontend Developer',
  location: 'Nicosia, Cyprus',
  availability: 'Based in Nicosia, Cyprus. Open to on-site, remote, and freelance.',
  email: 'stan0men@yahoo.com',
  telegram: 'https://t.me/Stan0men',
  telegramHandle: 'Telegram',
  // Deep link only — never render the digits as visible page text.
  whatsapp: 'https://wa.me/380667145684',
  whatsappHandle: 'WhatsApp',
  linkedin: 'https://www.linkedin.com/in/oleksandr-nesterenko-133b74146/',
  github: 'https://github.com/Stan0men',
  summary: [
    'Frontend Developer with 5+ years of experience building and scaling high-load web applications using React, TypeScript, and the modern JavaScript ecosystem. Experienced in delivering performance-critical frontend systems in fast-paced environments, including complex gambling platforms and enterprise web products.',
    'Proven impact in reducing production issues by 10% through legacy codebase refactoring, achieving a stable 60 FPS rendering experience by migrating to react-virtuoso, and accelerating daily development workflows by an estimated 20-30% using AI-assisted tools (GitHub Copilot, Cursor). Strong focus on performance optimization, UI architecture, and maintainable code.',
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS'],
    },
    {
      title: 'State Management',
      items: ['Redux Toolkit'],
    },
    {
      title: 'UI & Styling',
      items: ['Responsive Design', 'BEM', 'Tailwind CSS'],
    },
    {
      title: 'AI & Productivity',
      items: ['GitHub Copilot', 'Cursor'],
    },
    {
      title: 'Tools & Testing',
      items: ['Webpack', 'Git', 'Jenkins', 'Gulp', 'Jest'],
    },
  ],
  experience: [
    {
      company: 'Playtech',
      role: 'Frontend Developer',
      period: 'May 2021 - April 2026',
      techStack: 'React, TypeScript, HTML5, CSS/SCSS, Jenkins',
      bullets: [
        'Developed and maintained high-load gambling web applications using React and TypeScript, delivering stable and scalable UI for complex, performance-sensitive gaming flows.',
        'Replaced the deprecated react-virtualized library with react-virtuoso to handle massive data lists, which achieved a stable 60 FPS scrolling experience, completely eliminated UI lag, and significantly reduced memory footprint.',
        'Integrated AI-assisted development tools (GitHub Copilot, Cursor) into the daily workflow, accelerating boilerplate generation, code refactoring, and debugging processes by an estimated 20-30%.',
        'Investigated and resolved production issues while refactoring legacy codebases, successfully reducing production bugs by 10% and improving long-term application stability.',
        'Profiled and optimized component re-rendering strategies across high-load scenarios, improving UI responsiveness and frame rates during peak user traffic.',
        'Collaborated with cross-functional teams (design, backend, QA) to redesign core product flows, enhancing user engagement and overall UI/UX quality.',
      ],
      note: 'From September 2022 to September 2025, remained officially employed while serving in the Armed Forces of Ukraine.',
      decoration: 'arcs',
    },
    {
      company: 'Infopulse Ukraine',
      role: 'Frontend Developer',
      period: 'October 2019 - March 2021',
      techStack: 'HTML5, CSS3, Vanilla JS, DX8, Adaptive design',
      bullets: [
        'Successfully delivered over 10+ web applications and landing pages for international pharmaceutical clients.',
        'Achieved consistently high performance and SEO metrics (90+ Lighthouse scores).',
      ],
      decoration: 'rings',
    },
    {
      company: 'Energy Soft',
      role: 'Frontend Developer',
      period: 'February 2019 - August 2019',
      techStack: 'HTML5, CSS3, SCSS, Angular 6',
      bullets: [
        'Responsible for creating user-friendly UIs and responsive designs for 13+ projects.',
        'Developed landing pages and web applications using Angular 6 and SCSS.',
      ],
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
        'At Infopulse Ukraine I shipped 10+ applications and landing pages for international pharma clients - mobile-first, cross-browser, and tuned to Lighthouse 90+.',
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
    degree: 'Specialist Degree in Energy Faculty',
    school: 'National University of Food Technologies',
    year: '2011',
    city: 'Kyiv',
  },
  languages: [
    { name: 'English', level: 'Upper-Intermediate (B2)' },
    { name: 'Ukrainian', level: 'Native' },
  ],
  contactCards: [
    {
      title: 'Email',
      links: [
        {
          label: 'Email',
          href: 'mailto:stan0men@yahoo.com',
          display: 'stan0men@yahoo.com',
          external: false,
        },
      ],
    },
    {
      title: 'Messengers',
      links: [
        {
          label: 'WhatsApp',
          href: 'https://wa.me/380667145684',
          display: 'WhatsApp',
          external: true,
        },
        {
          label: 'Telegram',
          href: 'https://t.me/Stan0men',
          display: 'Telegram',
          external: true,
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/Stan0men',
          display: 'GitHub',
          external: true,
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/oleksandr-nesterenko-133b74146/',
          display: 'LinkedIn',
          external: true,
        },
      ],
    },
  ],
};

export function toJsonLd(data: CvData): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.role,
    description: `${data.summary.join(' ')} ${data.availability}`,
    email: `mailto:${data.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nicosia',
      addressCountry: 'CY',
    },
    url: data.github,
    sameAs: [data.linkedin, data.telegram, data.github],
    knowsAbout: data.skills.flatMap((group) => group.items),
    knowsLanguage: data.languages.map((language) => language.name),
  };

  return JSON.stringify(schema);
}
