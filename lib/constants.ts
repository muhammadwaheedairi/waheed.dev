export interface ProjectCard {
  title: string;
  slug: string;
  description: string;
  tagline: string;
  tech: string[];
  link?: string;
  github?: string;
  type: 'AI' | 'Full-Stack' | 'Robotics' | 'Frontend';
}

export const PROJECTS: ProjectCard[] = [
  {
    title: 'Personal-AI-Employee',
    slug: 'personal-ai-employee',
    description: 'A local-first autonomous AI Employee that monitors emails, finances, and tasks via MCP agents.',
    tagline: '15–20 hours recovered every week. Emails answered, invoices sent, clients followed up — without you touching any of it.',
    tech: ['Python', 'MCP', 'Agent skills', 'CLAUDE AI', 'GitHub Actions', 'Obsidian Sync', 'odoo'],
    type: 'AI',
    github: 'https://github.com/muhammadwaheedairi/Personal-AI-Employee',
  },
  {
    title: 'The Evolution of Todo',
    slug: 'evolution-of-todo',
    description: 'A todo app evolving from console script to AI-powered Kubernetes system via spec-driven development.',
    tagline: 'The same product built 5 different ways — from a script to a distributed system that handles real scale.',
    tech: ['Next.js', 'Python', 'FastAPI', 'Docker', 'Kubernetes', 'Oracle Cloud', 'Neon DB'],
    type: 'Full-Stack',
    github: 'https://github.com/muhammadwaheedairi/the-evolution-of-todo',
    link: 'https://the-evolution-of-todo-dun.vercel.app/',
  },
  {
    title: 'AI Robotics Textbook',
    slug: 'textbook-ai-robotics',
    description: 'Personal AI-Robotics portfolio: ROS 2, Gazebo, NVIDIA Isaac, VLA systems — built with latest AI tools.',
    tagline: 'Any body of knowledge — docs, manuals, curriculum — turned into an AI assistant that answers questions instantly from your own content.',
    tech: ['Docusaurus', 'Python', 'OpenAI Agents SDK', 'RAG', 'Qdrant', 'Cohere'],
    type: 'Robotics',
    github: 'https://github.com/muhammadwaheedairi/hackathon_textbook_ai_robotics',
    link: 'https://muhammadwaheedairi.github.io/hackathon_textbook_ai_robotics/',
  },
  {
    title: 'OutfitPlus',
    slug: 'outfitplus',
    description: 'Production-ready fashion ecommerce store with Stripe payments, Sanity CMS, Clerk auth, Neon Postgres, and automated order emails.',
    tagline: 'A complete, production-ready fashion store — built to be sold to local fashion businesses as a working solution.',
    tech: ['Next.js 16', 'Sanity CMS v5', 'Clerk Auth', 'Stripe', 'Neon Postgres', 'Resend', 'Vercel'],
    type: 'Full-Stack',
    github: 'https://github.com/muhammadwaheedairi/OutfitPlus-v2.git',
    link: 'https://outfit-plus-v2.vercel.app/',
  },
  {
    title: 'Superwhisper Clone',
    slug: 'superwhisper-clone',
    description: 'Pixel-perfect Superwhisper landing page clone built with modern responsive UI. Includes a simulated AI writing demo showcasing interactive frontend behavior.',
    tagline: 'Show me a design. I will build it exactly — not approximately.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    type: 'Frontend',
    github: 'https://github.com/muhammadwaheedairi/superwhisper-clone',
    link: 'https://superwhisper-clone.vercel.app/',
  },
  {
    title: 'Portrait.so Clone',
    slug: 'portrait-frontend-clone',
    description: 'Pixel-perfect recreation of the Portrait.so landing page with 3D tilt effects, physics-based animations, interactive card stack, and adaptive SVG network diagram.',
    tagline: '3D effects, spring physics, adaptive layouts — advanced frontend engineering built from scratch to prove it is possible.',
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
  databases: ['PostgreSQL', 'Neon DB', 'Qdrant', 'Sanity CMS', 'Clerk Auth'],
};