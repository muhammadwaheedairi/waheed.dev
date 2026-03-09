export interface ProjectCard {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  type: 'AI' | 'Full-Stack' | 'Robotics' | 'Frontend';
}

export const PROJECTS: ProjectCard[] = [
  {
    title: 'Personal-AI-Employee',
    description: 'A local-first autonomous AI Employee that monitors emails, finances, and tasks via MCP agents.',
    tech: ['Python', 'MCP', 'Agent skills', 'CLAUDE AI','GitHub Actions','Obsidian Sync','odoo'],
    type: 'AI',
    github: 'https://github.com/muhammadwaheedairi/Personal-AI-Employee',
  },
  {
    title: 'The Evolution of Todo',
    description: 'A todo app evolving from console script to AI-powered Kubernetes system via spec-driven development.',
    tech: ['Next.js', 'Python', 'FastAPI', 'Docker', 'Kubernetes', 'Oracle Cloud', 'Neon DB'],
    type: 'Full-Stack',
    github: 'https://github.com/muhammadwaheedairi/the-evolution-of-todo',
    link: 'https://the-evolution-of-todo-dun.vercel.app/',
  },
  {
    title: 'AI Robotics Textbook',
    description: 'Personal AI-Robotics portfolio: ROS 2, Gazebo, NVIDIA Isaac, VLA systems — built with latest AI tools.',
    tech: ['docusaurus', 'Python', 'Open AI Agents SDK', 'RAG','Qdrant','Cohere'],
    type: 'Robotics',
    github: 'https://github.com/muhammadwaheedairi/hackathon_textbook_ai_robotics',
    link: 'https://muhammadwaheedairi.github.io/hackathon_textbook_ai_robotics/',
  },
  {
    title: 'OutfitPlus',
    description: 'Modern fashion e-commerce marketplace with authentication and CMS-powered product management.Built with Next.js, Sanity CMS, and Firebase for a responsive shopping experience.',
    tech: ['Next.js','Tailwind CSS', 'Sanity CMS', 'Firebase', 'TypeScript'],
    type: 'Full-Stack',
    github: 'https://github.com/muhammadwaheedairi/OutfitPlus',
    link: 'https://outfit-plus.vercel.app/',
  },
  {
    title: 'Superwhisper Clone',
    description: 'Pixel-perfect Superwhisper landing page clone built with modern responsive UI.Includes a simulated AI writing demo showcasing interactive frontend behavior.',
    tech: ['Next.js','TypeScript', 'Tailwind CSS', 'Framer Motion'],
    type: 'Frontend',
    github: 'https://github.com/muhammadwaheedairi/superwhisper-clone',
    link: 'https://superwhisper-clone.vercel.app/',
  },
    {
    title: 'Portrait.so Clone',
    description: 'Pixel-perfect recreation of the Portrait.so landing page with 3D tilt effects, physics-based animations, interactive card stack, and adaptive SVG network diagram.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    type: 'Frontend',
    github: 'https://github.com/muhammadwaheedairi/Portrait-Frontend-Clone',
    link: 'https://portrait-frontend-clone.vercel.app',
  },
];

export const TECH_STACK = {
  ai: ['OpenAI Agents SDK', 'Claude Code', 'MCP', 'RAG', 'Python', 'FastAPI'],
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  devops: ['Docker', 'Kubernetes', 'Helm', 'Kafka', 'Dapr', 'GitHub Actions'],
  databases: ['PostgreSQL', 'Neon DB', 'Qdrant', 'Sanity CMS', 'Firebase'],
};
