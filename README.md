# Muhammad Waheed — Client-Converting Portfolio Funnel

> **Live:** [muhammadwaheedairi.vercel.app](https://muhammadwaheedairi.vercel.app)

A personal portfolio built as a **client-converting funnel** — not a showcase, a sales page. Every section is designed to move a visitor from "who is this?" to "I want to work with him."

---

## 🎯 Strategy

```
Traffic → Hero (hook) → Pain Points (mirror) → About (trust)
→ Services (solution) → Process (confidence) → Projects (proof)
→ FAQ (objections) → Contact (close)
```

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| 3D Background | Three.js |
| Deployment | Vercel |

---

## ✨ Features

- ⚡ **Terminal Loader** — cinematic boot screen on first visit
- 🟢 **Availability Banner** — sticky top bar with dismiss
- ⌨️ **Command Palette** — Ctrl+K navigation across all sections
- 📜 **Scroll Progress Bar** — thin green line at top
- 🌌 **Three.js Background** — interactive particle canvas
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 🎯 **Dynamic Case Studies** — `/projects/:slug` per project
- 🔤 **Custom Cursor** — white arrow, green on hover

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Main funnel page
│   ├── layout.tsx
│   ├── globals.css
│   └── projects/[slug]/      # Dynamic case study pages
├── components/
│   ├── Hero.tsx
│   ├── PainPoints.tsx        # "Sound Familiar?" section
│   ├── FeaturedInStrip.tsx   # Trust signals strip
│   ├── About.tsx
│   ├── LiveStats.tsx
│   ├── Services.tsx
│   ├── TechStack.tsx
│   ├── Process.tsx
│   ├── Projects.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx           # EmailJS form
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── CommandPalette.tsx
│   ├── AvailabilityBanner.tsx
│   ├── TerminalLoader.tsx
│   ├── CaseStudyPage.tsx
│   └── ThreeCanvas.tsx
├── data/
│   └── projects.ts           # All case study content
└── lib/
    ├── constants.ts          # Project cards + tech stack
    └── utils.ts
```

---

## 🚀 Local Setup

**1. Clone**
```bash
git clone https://github.com/muhammadwaheedairi/portfolio.git
cd portfolio
```

**2. Install**
```bash
npm install
```

**3. Run**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📧 Contact Form (EmailJS)

The contact form uses EmailJS — no backend required.

Update these constants in `components/Contact.tsx`:

```ts
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

Get your keys at [emailjs.com](https://emailjs.com) — free tier gives 200 emails/month.

---

## 📝 Adding / Updating Projects

**Card** (shown on homepage grid) → `lib/constants.ts`

```ts
{
  title: 'Project Name',
  slug: 'project-slug',
  description: 'One line description',
  tagline: 'Client-facing result line',
  tech: ['Next.js', 'FastAPI'],
  type: 'AI' | 'Full-Stack' | 'Frontend' | 'Robotics',
  github: 'https://github.com/...',
  link: 'https://live-demo.com',
}
```

**Case Study** (full detail page) → `data/projects.ts`

```ts
{
  slug: 'project-slug',        // must match constants.ts
  title: 'Project Name',
  tagline: 'Result-focused one liner',
  type: 'AI Automation',
  duration: '2 weeks',
  status: 'Live',
  overview: '...',
  problem: '...',
  solution: '...',
  result: '...',
  tech: ['...'],
  highlights: [
    { label: 'Key Metric', value: 'Value' },
  ],
  sections: [
    { title: 'Section Title', content: '...' },
  ],
  github: 'https://...',
  demo: 'https://...',
}
```

---

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Deploy — no environment variables needed (EmailJS keys are client-side)

---

## 👨‍💻 Author

**Muhammad Waheed**
Full-Stack Developer & AI Engineer
[muhammadwaheedairi@gmail.com](mailto:muhammadwaheedairi@gmail.com)
[LinkedIn](https://linkedin.com/in/muhammadwaheedairi) · [GitHub](https://github.com/muhammadwaheedairi)

---

## 📄 License

All rights reserved. Not a template — built for personal use.