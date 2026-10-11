export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  highlight: string;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: 'Design the landing page layout',
    description: 'Plan the visual structure, wireframe key sections, and create a clean layout with semantic HTML5 containers.',
    highlight: 'Semantic Structure & Wireframing'
  },
  {
    step: 2,
    title: 'Create responsive sections',
    description: 'Build flexible content sections using modern CSS Grid and Flexbox that seamlessly adapt to any screen dimension.',
    highlight: 'Fluid Layouts & Flexbox/Grid'
  },
  {
    step: 3,
    title: 'Add navigation and call-to-action buttons',
    description: 'Implement a sticky top navbar, smooth page scrolling, and prominent action buttons to guide user interaction.',
    highlight: 'Sticky Header & Action Links'
  },
  {
    step: 4,
    title: 'Implement basic animations',
    description: 'Enhance visual appeal with smooth hover transitions, card lift effects, and refined subtle animations.',
    highlight: 'CSS Transitions & Hover States'
  },
  {
    step: 5,
    title: 'Optimize for mobile devices',
    description: 'Refine touch-friendly tap targets, ensure zero horizontal scrolling, and perfect the mobile hamburger menu.',
    highlight: 'Mobile-First & Touch Usability'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'html-css',
    title: 'HTML & CSS',
    description: 'Understand the building blocks of the web with semantic elements, modern CSS styling, and standard box models.',
    points: ['Semantic HTML5 tags', 'CSS variables & styling', 'Modern Flexbox & Grid layouts'],
    icon: 'Code'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    description: 'Design websites that look stunning on smartphones, tablets, laptops, and large desktop screens alike.',
    points: ['Mobile-first principles', 'Media query breakpoints', 'Fluid images & typography'],
    icon: 'Smartphone'
  },
  {
    id: 'js-basics',
    title: 'JavaScript Basics',
    description: 'Add interactivity to static pages with event listeners, DOM manipulation, and dynamic client-side logic.',
    points: ['DOM selection & events', 'Interactive menu toggles', 'Form input validation'],
    icon: 'FileCode'
  },
  {
    id: 'ui-development',
    title: 'UI Development',
    description: 'Create user-friendly interfaces with clear visual hierarchy, accessible elements, and pleasant micro-interactions.',
    points: ['Clean component hierarchy', 'Accessible focus states', 'Smooth hover feedback'],
    icon: 'Layout'
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Adapts seamlessly across mobile, tablet, and desktop viewports with fluid grids and zero horizontal scroll.',
    icon: 'Laptop'
  },
  {
    id: 'navigation-menu',
    title: 'Navigation Menu',
    description: 'A sticky top navigation bar with one-click smooth scrolling and an intuitive responsive hamburger menu for mobile.',
    icon: 'Menu'
  },
  {
    id: 'cta-buttons',
    title: 'Call-to-Action Buttons',
    description: 'Eye-catching buttons with smooth hover animations that clearly direct visitors to important page sections.',
    icon: 'MousePointer'
  },
  {
    id: 'interactive-ui',
    title: 'Interactive UI',
    description: 'Real-time contact form validation, instant feedback messages, and interactive hover states across all cards.',
    icon: 'Sparkles'
  }
];
