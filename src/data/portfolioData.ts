export type ProjectCategory = 'all' | 'web' | 'academic';

export interface SkillItem {
  id: string;
  title: string;
  tools: string;
  proficiency: number;
  iconName: 'layout' | 'code' | 'server' | 'compass';
  focus: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  title: string;
  summary: string;
  stack: string[];
  visualType: 'renthub' | 'library';
  year: string;
  role: string;
  highlights: string[];
}

export const PORTFOLIO_PROFILE = {
  brand: 'arafat.',
  name: 'Arafat Hossain',
  initials: 'AH',
  avatarPhoto: '/assets/aistudio/492220894_1394380354897874_1890604988178394954_n_05956062.jpg',
  degree: 'Computer Science & Engineering',
  university: 'Daffodil International University',
  email: 'hossain23105101306@diu.edu.bd',
  availability: 'Available for opportunities',
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
  ],
};

export const QUICK_TRAITS = [
  { index: '01', label: 'Curious learner' },
  { index: '02', label: 'Problem solver' },
  { index: '03', label: 'Web developer' },
];

export const SKILLS: SkillItem[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    tools: 'HTML5 · CSS3 · JavaScript',
    proficiency: 78,
    iconName: 'layout',
    focus: 'Responsive semantic layouts, interactive DOM interfaces, and accessible styling.',
  },
  {
    id: 'programming',
    title: 'Programming',
    tools: 'C · C++ · Python',
    proficiency: 65,
    iconName: 'code',
    focus: 'Core problem solving, data structures, algorithms, and structured programming.',
  },
  {
    id: 'backend',
    title: 'Backend & Tools',
    tools: 'Python · Django · Git · GitHub',
    proficiency: 60,
    iconName: 'server',
    focus: 'Server-side templates, database models, version control, and collaborative workflows.',
  },
  {
    id: 'design',
    title: 'Design & Concepts',
    tools: 'Figma · UI/UX · OOP · DBMS',
    proficiency: 62,
    iconName: 'compass',
    focus: 'Interface wireframing, object-oriented design patterns, and relational schemas.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'renthub',
    number: '01',
    category: 'web',
    categoryLabel: 'Web Development',
    title: 'RentHub',
    summary:
      'A rental platform concept for listing and discovering items such as cameras, laptops, bikes and furniture.',
    stack: ['Flask', 'Python', 'SQLite'],
    visualType: 'renthub',
    year: '2025',
    role: 'Backend & UI Developer',
    highlights: [
      'Designed lightweight Flask routes and SQLite relational tables for item listings and availability.',
      'Created category browsing for everyday gear including cameras, laptops, bikes, and furniture.',
      'Focused on clear listing cards and straightforward item discovery.',
    ],
  },
  {
    id: 'library-management',
    number: '02',
    category: 'academic',
    categoryLabel: 'Academic Project',
    title: 'Library Management System',
    summary:
      'A shell-script project for adding, viewing, searching, deleting and issuing library books.',
    stack: ['Bash', 'Linux', 'Shell Script'],
    visualType: 'library',
    year: '2024',
    role: 'Systems Scripting',
    highlights: [
      'Engineered an interactive CLI menu in Bash supporting full CRUD operations on book records.',
      'Used Linux text-processing utilities for fast search, deletion, and book issue tracking.',
      'Persisted catalog entries reliably in structured flat-file storage.',
    ],
  },
];
