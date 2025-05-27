import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  java,
  docker,
  Recipeking,
  goshop1,
  math,
  movie,
  nyeusi,
  space,
  techciti,
  vidu,
  goshop,
  daycare,
  traffic,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  
  {
    title: 'Software Developer Intern',
    company_name: 'Vidu Solutions',
    icon: vidu,
    iconBg: '#333333',
    date: '2025',
  },
  {
    title: 'Full stack Recipe Sharing website',
    company_name: 'Recipe King',
    icon: traffic,
    iconBg: '#81b29a',
    date: '2024',
  },
  {
    title: 'Full Stack E-Commerce',
    company_name: 'Go Shop Platform',
    icon: goshop,
    iconBg: '#e07a5f',
    date: '2023',
  },
  {
    title: 'Java Application',
    company_name: 'Daycare Management System',
    icon: daycare,
    iconBg: '#3d405b',
    date: '2022',
  },
  {
    title: 'Software Developer Intern',
    company_name: 'TechCiti Software Consulting',
    icon: techciti,
    iconBg: '#333333',
    date: '2021',
  }
  
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A simple Recipe sharing app where users can see or write recipes',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: Recipeking,
    repo: 'https://github.com/steja108/recipeking',
    demo: 'https://recipeking.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Go Shop',
    description:
      'This is full pledged online shop, with products, users, orders and payment. Admins have full control of al aspects with admin-dashboard. Users can reset their password through a webpage.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: goshop1,
    repo: 'https://github.com/steja108/Goshop',
    demo: 'https://github.com/steja108/Goshop',
  },
  
];

export { services, technologies, experiences, projects };
