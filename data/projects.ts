export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'personal-ai-employee',
    title: 'Personal-AI-Employee',
    tagline: 'Autonomous digital workforce running 24/7',
    problem: 'Manual monitoring of emails, finances and tasks consuming hours daily.',
    solution: 'Local-first AI Employee using MCP agents, Cloud VM + Local machine split architecture synced via GitHub, human approval gate for critical actions.',
    result: '~80% reduction in manual tasks, runs autonomously 24/7.',
    tech: ['Python', 'MCP', 'OpenAI Agents SDK', 'FastAPI', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/muhammadwaheedairi/personal-ai-employee',
  },
  {
    slug: 'evolution-of-todo',
    title: 'The Evolution of Todo',
    tagline: 'From console script to AI-powered Kubernetes system',
    problem: 'Needed enterprise-grade architecture showcase in hackathon timeframe.',
    solution: 'Next.js 14 + FastAPI + Docker Compose on Oracle Cloud Always Free VMs.',
    result: 'Production deployment in 72 hours, spec-driven from scratch.',
    tech: ['Next.js 14', 'FastAPI', 'Docker', 'Kubernetes', 'Oracle Cloud', 'Neon DB'],
    github: 'https://github.com/muhammadwaheedairi/evolution-of-todo',
  },
  {
    slug: 'textbook-ai-robotics',
    title: 'Physical AI & Robotics Textbook',
    tagline: 'Interactive documentation with AI-powered Q&A',
    problem: 'Robotics textbook needed interactive docs with intelligent search.',
    solution: 'Docusaurus site with RAG chatbot on Hugging Face Spaces, GitHub Pages deployment.',
    result: 'Live docs site with AI Q&A, instant chapter references for students.',
    tech: ['Docusaurus', 'Hugging Face', 'GitHub Pages', 'RAG'],
    github: 'https://github.com/muhammadwaheedairi/textbook-ai-robotics',
  },
  {
    slug: 'outfitplus',
    title: 'OutfitPlus',
    tagline: 'AI-powered personal outfit recommendations',
    problem: 'Users manually browsing hundreds of clothing combinations.',
    solution: 'Full-stack AI recommendation engine with user preference learning.',
    result: 'Working MVP with AI recommendations delivered in hackathon timeframe.',
    tech: ['React', 'FastAPI', 'Python', 'AI/ML'],
    github: 'https://github.com/muhammadwaheedairi/outfitplus',
  },
  {
    slug: 'portrait-frontend-clone',
    title: 'Portrait.so Clone',
    tagline: 'Pixel-perfect recreation of the Portrait.so landing page',
    problem: 'Needed a high-fidelity frontend challenge to demonstrate advanced UI engineering — 3D effects, physics animations, and responsive SVG diagrams in a single project.',
    solution: 'Built with Next.js 15 App Router + React 19, featuring scroll-triggered 3D tilt via Framer Motion, spring physics hero animations, an interactive card stack, and an adaptive SVG network diagram that reflows to a flex layout on mobile.',
    result: 'Deployed on Vercel with pixel-perfect fidelity to the original, fully responsive across all breakpoints.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/muhammadwaheedairi/Portrait-Frontend-Clone',
    demo: 'https://portrait-frontend-clone.vercel.app',
  },
];