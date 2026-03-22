export interface Project {
  slug: string;
  title: string;
  tagline: string;
  type: string;
  duration: string;
  status: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  highlights: { label: string; value: string }[];
  sections: { title: string; content: string }[];
  github?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'personal-ai-employee',
    title: 'Personal AI Employee',
    tagline: '15–20 hours recovered every week. Emails answered, invoices sent, clients followed up — without you touching any of it.',
    type: 'AI Automation',
    duration: '~60 hours build time',
    status: 'Live & Running',
    overview:
      'I built an AI system that works like a real staff member. It reads emails, replies to clients, creates invoices, posts updates, and delivers a clean morning briefing every day — all without supervision. It was built for a solo operator, but the same system can be configured for any service business, agency, or consultant who is spending too much time on work that should not require their attention.',
    problem:
      'Growing a service business eventually hits the same wall everywhere in the world. The owner is talented at what they do — but half their week disappears into admin. Chasing invoices. Answering the same questions. Remembering to follow up. Posting on LinkedIn. These tasks are not hard. They are just endless. Hiring someone to handle them costs money, requires management, and introduces risk. Most owners just absorb the pain and work longer hours.',
    solution:
      'I built an AI system that handles the entire administrative layer of a service business. It monitors every incoming message across email and other channels, understands what each one needs, and either handles it automatically or prepares a draft for approval. Invoices are generated and sent. Follow-ups are scheduled and executed. Every morning, the owner gets one concise briefing covering everything that happened and everything that needs a decision. Sensitive actions — anything involving money or client communication — only go out after the owner approves them with a single tap.',
    result:
      'The system runs 24 hours a day, 7 days a week. Business owners using it recover 15 to 20 hours every week. Response times drop from days to hours. Invoices go out the same day work is completed instead of piling up. Nothing is forgotten. And the total cost is a fraction of what a part-time hire would run.',
    tech: ['Python', 'Claude AI', 'Gmail API', 'WhatsApp', 'Odoo Accounting', 'Oracle Cloud', 'Obsidian', 'Playwright'],
    highlights: [
      { label: 'Hours Recovered Per Week', value: '15–20' },
      { label: 'Cost vs Human Hire', value: '~10%' },
      { label: 'Automated Tasks', value: '14' },
      { label: 'Channels Monitored', value: '5+' },
      { label: 'Runs 24/7', value: 'Yes' },
      { label: 'Human Approval on Sensitive Actions', value: 'Always' },
    ],
    sections: [
      {
        title: 'Built for any service business, anywhere',
        content:
          'This was built for one business, but the architecture is designed to be reconfigured. A law firm needs different workflows than a design agency. A real estate consultant handles different communication than a software studio. The system adapts — the channels it monitors, the actions it takes, the tone it writes in, the accounting system it connects to — all of this is configurable. If your business runs on email and client relationships, this can work for you.',
      },
      {
        title: 'Nothing goes out without your approval',
        content:
          'The system is built around one principle: the AI does the thinking, the human makes the final call. Every reply draft, every invoice, every social post goes through a simple approval step before it reaches anyone outside. You review it in under ten seconds and approve or discard it. This is not automation that runs wild — it is a highly capable assistant that prepares everything and waits for your sign-off. The result is the speed of automation with the judgment of a human.',
      },
      {
        title: 'What this could look like for your business',
        content:
          'You do not need to run your business the way it was built here. If you are a consultant who wants AI to handle your inbox and billing, I can build that. If you run an agency and want automated client updates and project status emails, I can build that. If you have a team and want an internal AI that handles onboarding, scheduling, and reporting, I can build that too. The project you are reading about is one implementation. The capability behind it is much broader.',
      },
    ],
    github: 'https://github.com/muhammadwaheedairi/Personal-AI-Employee',
  },

  {
    slug: 'evolution-of-todo',
    title: 'The Evolution of Todo',
    tagline: 'The same product built 5 different ways — from a script to a distributed system that handles real scale.',
    type: 'Full-Stack Application',
    duration: 'December 2025 – January 2026',
    status: 'All 5 Versions Complete',
    overview:
      'This project documents how a single product evolves through five stages of technical maturity — from a simple script to a production system with AI, real-time features, and the infrastructure to handle serious traffic. It was built as a technical showcase, but what it actually demonstrates is something more useful: knowing when to add complexity, and when simplicity is the right answer.',
    problem:
      'One of the most expensive mistakes in software development is building the wrong version of a product. A startup that over-engineers early wastes months and money. A product that under-engineers collapses under its first wave of real users. Most developers have only built at one or two levels of this spectrum — which means they give advice from a narrow slice of experience.',
    solution:
      'I built the same product five times, in order. Version one: a script you run locally. Version two: a full web application with user accounts, a database, and a live deployment. Version three: the same application, now with an AI assistant built in — users talk to it in plain language instead of clicking through menus. Version four: the application packaged and deployed on Kubernetes, portable and reproducible. Version five: a distributed system with multiple independent services, real-time notifications, and automatic reminders — the kind of architecture behind products used by millions.',
    result:
      'Five complete, working systems. Two live deployments you can open right now. A clear, documented progression that shows exactly what changes at each stage, why it changes, and what problem it solves.',
    tech: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'OpenAI Agents SDK', 'Docker', 'Kubernetes', 'Kafka', 'Dapr', 'TypeScript'],
    highlights: [
      { label: 'Versions Built', value: '5' },
      { label: 'Live Deployments', value: '2' },
      { label: 'Lines of Code', value: '15,000+' },
      { label: 'AI-Powered Version', value: 'Natural Language' },
      { label: 'Real-Time Notifications', value: 'Yes' },
      { label: 'Production-Grade Infrastructure', value: 'Yes' },
    ],
    sections: [
      {
        title: 'The AI version — where users stop clicking and start talking',
        content:
          'Version three replaces the entire interface with a conversation. Instead of finding the right button, users just say what they want: "add a call with Sarah for Thursday at 3pm" or "what did I finish this week?" The system understands, acts, and confirms. This is not a gimmick — it is a fundamentally different way of interacting with software, and it is increasingly what users expect. Any product that manages information can be given this layer.',
      },
      {
        title: 'What this project signals about how I work',
        content:
          'Most developers can build version two. A smaller number can build version three. Very few have built all five and understand the tradeoffs at each level. When you work with me on a product, you are not getting someone who knows one way to build things. You are getting someone who can look at where your business actually is, where it needs to go, and recommend the version of the architecture that fits — not the most impressive one, the right one.',
      },
      {
        title: 'Built entirely through AI-assisted development',
        content:
          'Every line of code across all five versions was generated through structured, specification-driven AI development. This is not a footnote — it is part of the point. The future of software development is humans who can think in systems, write precise specifications, and direct AI to build them. This project is a proof of that workflow at scale. It is how I build, and it is why I can deliver more, faster, than a traditional development approach.',
      },
    ],
    github: 'https://github.com/muhammadwaheedairi/the-evolution-of-todo',
    demo: 'https://the-evolution-of-todo-dun.vercel.app/',
  },

  {
    slug: 'textbook-ai-robotics',
    title: 'AI Knowledge Platform',
    tagline: 'Any body of knowledge — docs, manuals, curriculum — turned into an AI assistant that answers questions instantly from your own content.',
    type: 'AI-Powered Knowledge Platform',
    duration: 'Hackathon I — Panaversity',
    status: 'Live',
    overview:
      'Built as a robotics curriculum, this platform is the template for something much broader. Any organisation that has documentation, training material, product knowledge, or internal processes can use this exact architecture to give their users — customers, employees, students — an AI assistant that answers questions directly from that content. Accurately. Instantly. At any hour.',
    problem:
      'Every organisation produces knowledge — and almost none of it is accessible when it is actually needed. Documentation sits unread. Training manuals go out of date. Customer support teams answer the same questions hundreds of times. New employees spend weeks finding information that already exists somewhere. The knowledge is there. The problem is retrieval — getting the right information to the right person at the right moment.',
    solution:
      'I built a platform where content lives in a clean, structured format — chapters, sections, guides, whatever the material calls for — and an AI assistant is trained on all of it before the platform launches. When someone asks a question, the AI does not search the internet. It searches only the platform\'s own content, finds the most relevant sections, and writes a direct answer — with a reference back to the source. The result is a knowledge base that talks back.',
    result:
      'A live platform covering 26 chapters across 13 weeks of technical curriculum, with an AI assistant that answers questions in under 4 seconds, a fast search that works without an internet connection, and a fully responsive design that works on any device.',
    tech: ['Docusaurus', 'React', 'TypeScript', 'FastAPI', 'Python', 'Cohere AI', 'Qdrant Vector Database', 'OpenRouter', 'Docker', 'GitHub Pages', 'Hugging Face Spaces'],
    highlights: [
      { label: 'AI Answer Time', value: 'Under 4 sec' },
      { label: 'Chapters of Content', value: '26' },
      { label: 'Search Works Offline', value: 'Yes' },
      { label: 'Hosting Cost', value: 'Near Zero' },
      { label: 'Mobile Responsive', value: 'Yes' },
      { label: 'Deployable For', value: 'Any Content Type' },
    ],
    sections: [
      {
        title: 'Beyond textbooks — what this architecture can power',
        content:
          'This was built for a robotics curriculum, but the underlying system is content-agnostic. A SaaS company can use it to let customers search their help documentation conversationally instead of filing support tickets. A law firm can build an internal portal where associates ask questions and get answers from the firm\'s own case library and procedure guides. A manufacturing company can give floor workers an AI assistant that answers questions from the equipment manual. The platform you see here is one application of a reusable capability.',
      },
      {
        title: 'How the AI stays accurate and on-topic',
        content:
          'The AI assistant on this platform does not make things up. It can only answer using the content that was loaded into it during setup. If the answer is not in the material, it says so. This is a deliberate design decision — in most professional contexts, a confident wrong answer is worse than an honest "I don\'t know." When you build a knowledge platform for your customers or team, the AI they interact with speaks only from your verified content.',
      },
      {
        title: 'Fast to deploy, easy to update',
        content:
          'Adding new content to the platform takes minutes. Write the page, publish it, run the update pipeline, and the AI assistant knows about it within the hour. There is no retraining, no downtime, no developer required for content changes. This matters for organisations where knowledge evolves — product updates, policy changes, new procedures. The platform keeps pace without friction.',
      },
    ],
    github: 'https://github.com/muhammadwaheedairi/hackathon_textbook_ai_robotics',
    demo: 'https://muhammadwaheedairi.github.io/hackathon_textbook_ai_robotics/',
  },

  {
    slug: 'outfitplus',
    title: 'OutfitPlus',
    tagline: 'A complete, production-ready fashion store — built to be sold to local fashion businesses as a working solution.',
    type: 'E-Commerce Platform',
    duration: '2 Weeks',
    status: 'Live',
    overview:
      'OutfitPlus is a full-stack fashion ecommerce platform built with Next.js 16, Sanity CMS, Clerk Auth, Neon Postgres, Stripe Payments, and Resend Emails. It is production-ready and designed to be handed directly to a fashion business — they log into Sanity Studio, manage their products, and the store runs itself. No developer needed for day-to-day operations.',
    problem:
      'Local fashion businesses are still selling through Instagram DMs and WhatsApp. Payments go through bank transfers. Inventory is tracked in a notebook. It works until it does not — and when it breaks, it breaks in front of customers. The options they are given are either a bloated agency build that costs thousands, or a Shopify subscription they do not fully own or control.',
    solution:
      'I built a complete ecommerce store that a fashion business can own entirely. Customers browse, filter, wishlist, and purchase. The store owner manages everything from a clean Sanity Studio — products, blog posts, featured banners, sale tags — with no code required. Orders flow into a custom admin dashboard where the owner tracks revenue, manages order status, and sees pending actions. Stripe handles payments securely. Resend sends confirmation emails automatically.',
    result:
      'A live, production-deployed store with real payment processing, order management, email confirmations, and a CMS the client controls. Built in 2 weeks. Every feature works end to end — from product browsing to Stripe checkout to order confirmation email landing in the customer\'s inbox.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Sanity CMS v5', 'Clerk Auth', 'Neon Postgres', 'Drizzle ORM', 'Stripe', 'Resend', 'Vercel'],
    highlights: [
      { label: 'Payment Processing', value: 'Stripe Live' },
      { label: 'Code to Add Products', value: 'None' },
      { label: 'Order Emails', value: 'Automated' },
      { label: 'Admin Dashboard', value: 'Included' },
      { label: 'Auth System', value: 'Clerk' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    sections: [
      {
        title: 'A store the owner actually controls',
        content:
          'Every product, every blog post, every featured banner is managed through Sanity Studio — a clean visual editor the store owner logs into directly. They upload photos, set prices, apply discount tags, mark items as featured, and publish. Changes go live immediately. There are no developer calls, no tickets, no waiting. The most common complaint from business owners who have worked with agencies before is that they cannot update their own website. This store was built so that never happens.',
      },
      {
        title: 'Real payments, real orders, real emails',
        content:
          'Checkout goes through Stripe — the most trusted payment processor available. Card data never touches the server. When a customer completes a purchase, the order saves to Neon Postgres, the admin dashboard updates instantly, and a confirmation email lands in the customer\'s inbox via Resend. The owner sees every order, can update the status from Pending to Shipped to Delivered, and has a full order history per customer. This is not a demo — it is a working business operation.',
      },
      {
        title: 'What this means if you need an ecommerce store',
        content:
          'If you run a fashion business — or any product business — and you are still selling manually, this is the exact system that replaces that. I can configure it for your products, your branding, your payment account, and hand it over fully deployed. You get the codebase, the CMS access, the admin dashboard, and a walkthrough so you understand everything. From that point, you are fully independent. No monthly agency fee. No developer dependency. Just a working store that is yours.',
      },
    ],
    github: 'https://github.com/muhammadwaheedairi/OutfitPlus-v2.git',
    demo: 'https://outfit-plus-v2.vercel.app/',
  },

  {
    slug: 'superwhisper-clone',
    title: 'Superwhisper Clone',
    tagline: 'Show me a design. I will build it exactly — not approximately.',
    type: 'Frontend Engineering',
    duration: '~1 week',
    status: 'Live',
    overview:
      'I took one of the best-designed software landing pages on the internet and rebuilt it from scratch — without looking at the original code. Every section, every animation, every layout decision, every screen size — matched precisely. Then I added a working interactive demo on top. This project exists to answer one question a client might have: "Can he actually build what I am showing him?" The answer is here.',
    problem:
      'There is a gap between a developer who can build something that roughly resembles a design, and one who can build something that matches it exactly. For most internal tools and back-end systems, roughly is fine. For anything customer-facing — a marketing site, a product launch page, a SaaS homepage — the gap shows. Visitors do not consciously notice misaligned spacing or a slightly wrong font weight. But they feel it. And it affects whether they trust the product.',
    solution:
      'I selected Superwhisper — a software product known for an exceptionally well-crafted landing page — and rebuilt it entirely. Hero section, feature list, interactive demo, pricing tiers, customer reviews, FAQ, footer, newsletter. Every responsive breakpoint. Then I built a typing simulation that recreates the product\'s AI writing demo in the browser, with no server required.',
    result:
      'A live, publicly accessible clone that can be compared directly against the original. Every section is present. Every animation runs correctly. Every layout adapts properly to mobile, tablet, and desktop. Open both and compare.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    highlights: [
      { label: 'Design Fidelity', value: 'Pixel-Perfect' },
      { label: 'Sections Rebuilt', value: '8' },
      { label: 'Build Time', value: '~1 Week' },
      { label: 'Mobile Responsive', value: 'Yes' },
      { label: 'Interactive Demo', value: 'Yes' },
      { label: 'Server Required', value: 'None' },
    ],
    sections: [
      {
        title: 'Why design precision matters at the business level',
        content:
          'Your website is the first thing most potential customers interact with before they ever speak to you. A site that looks polished and intentional communicates that the business behind it is polished and intentional. A site with visual inconsistencies, slow animations, or layouts that break on certain devices communicates the opposite — regardless of how good the underlying product is. Precision in frontend engineering is not an aesthetic preference. It is a business consideration.',
      },
      {
        title: 'The interactive demo — built without a backend',
        content:
          'Superwhisper\'s landing page features a live AI writing demonstration. Rather than skipping this section or linking to a placeholder, I rebuilt the entire interactive experience in the browser. When you engage with it, text appears with realistic timing and rhythm — character by character, with the kind of pacing that makes it feel like something is actually being generated. This was done with no server, no API, and no external dependencies. It is a useful capability to have when a client needs an interactive feature on a site that is otherwise static.',
      },
      {
        title: 'What this means if you have a design to build',
        content:
          'If you have a Figma file, a reference site, or a visual direction for a product launch, marketing page, or application interface — I can build it to this standard. Not approximately. The precision demonstrated in this project applies directly to client work. The question of whether a design can be faithfully implemented is not one you will need to worry about.',
      },
    ],
    github: 'https://github.com/muhammadwaheedairi/superwhisper-clone',
    demo: 'https://superwhisper-clone.vercel.app/',
  },

  {
    slug: 'portrait-frontend-clone',
    title: 'Portrait.so Clone',
    tagline: '3D effects, spring physics, adaptive layouts — advanced frontend engineering built from scratch to prove it is possible.',
    type: 'Frontend Engineering',
    duration: '~1 week',
    status: 'Live',
    overview:
      'Portrait.so is widely referenced as one of the more technically impressive landing pages in the software industry. I rebuilt it entirely from scratch — the 3D tilt effects, the spring physics animations, the interactive card system, the adaptive network diagram — to demonstrate that premium visual engineering is a real, buildable skill, not something reserved for teams with specialised designers.',
    problem:
      'Most websites are built to a standard level of quality. They work, they are responsive, they have the right information. Then there is a tier above that — websites that feel alive. Elements that move with physical weight. Interactions that respond like objects in the real world. Layouts that adapt intelligently rather than just resizing. Building at this level requires skills that most frontend developers have not developed, which is why it tends to be expensive or unavailable to smaller teams.',
    solution:
      'I rebuilt Portrait.so — a benchmark for this level of frontend engineering — completely from scratch. The hero section uses spring physics for its entrance animation, calibrated for natural weight and momentum. The "Creating is Easy" section uses scroll-linked 3D perspective transforms. The community section has a card stack where clicking a card brings it forward with physically grounded motion. The network diagram renders complex curved paths on desktop and intelligently reflows to a clean vertical layout on mobile.',
    result:
      'A live recreation that reproduces every advanced interaction of the original, across every screen size. 3D effects, spring animations, interactive card shuffling, and an adaptive SVG diagram — all working, all deployed, all available to inspect.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      { label: '3D Perspective Effects', value: 'Yes' },
      { label: 'Spring Physics Animations', value: 'Yes' },
      { label: 'Interactive Card Stack', value: 'Yes' },
      { label: 'Adaptive SVG Diagram', value: 'Desktop + Mobile' },
      { label: 'Mobile Responsive', value: 'Fully' },
      { label: 'Build Time', value: '~1 Week' },
    ],
    sections: [
      {
        title: 'Animations that feel like the real world',
        content:
          'The difference between an animation that looks correct and one that feels correct is physics. When something has spring physics applied to it, it overshoots slightly and settles — the way a real object with mass would behave. When you scroll and a card tilts in 3D, the angle follows your scroll position in a way that feels connected and responsive. These are not visual tricks — they are mathematical simulations of physical behaviour, and they are what separates interfaces that feel premium from ones that merely look it.',
      },
      {
        title: 'The network diagram — two completely different implementations',
        content:
          'Portrait.so features a diagram showing product connections using smooth curved lines. On a large screen, this is an SVG with precisely calculated cubic bezier paths between nodes. On a phone, that same information is rendered as a clean vertical list — because the curved diagram would be unreadable at that size. I built both and made the switch fully automatic. This is what thoughtful responsive design looks like — not stretching a desktop layout onto a small screen, but reconsidering how information should be presented at each context.',
      },
      {
        title: 'The case for investing in this level of frontend quality',
        content:
          'If your product is being evaluated against competitors, your website is part of what is being evaluated. A site that demonstrates craft — that shows someone thought carefully about every interaction, every motion, every detail — creates a different first impression than one that was assembled quickly. This is not about aesthetics for their own sake. It is about communicating, before a single word of copy is read, that the product behind the site was built with the same level of care. I can build websites at this level for products that need it.',
      },
    ],
    github: 'https://github.com/muhammadwaheedairi/Portrait-Frontend-Clone',
    demo: 'https://portrait-frontend-clone.vercel.app',
  },
];