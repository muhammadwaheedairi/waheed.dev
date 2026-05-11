# Muhammad Waheed — Portfolio

> **Live:** [muhammadwaheedairi.vercel.app](https://muhammadwaheedairi.vercel.app)

A clean, modern portfolio built with Next.js 16 and Tailwind CSS v4. Designed to showcase skills, process, and projects with smooth animations and responsive design.

---

## 🎯 Flow

```
Hero (hook) → Process (how we work) → Why Us (the difference)
→ About (who is behind this) → Services (what I offer)
→ Projects (proof) → FAQ (objections) → Footer (CTA)
```

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| Font | Plus Jakarta Sans |
| Deployment | Vercel |

---

## ✨ Features

- ⚡ **Loader Animation** — smooth entry experience on first visit
- ⌨️ **Command Palette** — Ctrl+K navigation across all sections
- 📱 **Fully Responsive** — mobile, tablet, desktop optimized
- 🎨 **Light Theme** — clean, professional design with green accents
- ⚡ **Smooth Animations** — Motion-powered transitions throughout

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout with font config
│   └── globals.css           # Global styles & Tailwind config
├── components/
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Process.tsx           # How we work section
│   ├── WhyUs.tsx             # Why choose us section
│   ├── About.tsx             # About me section
│   ├── Services.tsx          # Services offered
│   ├── Projects.tsx          # Project showcase grid
│   ├── FAQ.tsx               # Frequently asked questions
│   ├── Footer.tsx            # Footer with CTA
│   ├── Navbar.tsx            # Navigation bar
│   ├── CommandPalette.tsx    # Ctrl+K command menu
│   └── Loader.tsx            # Entry loader animation
└── lib/
    ├── constants.ts          # Project data & constants
    └── utils.ts              # Utility functions
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

## 📝 Adding / Updating Projects

Projects are managed in `lib/constants.ts`:

```ts
{
  title: 'Project Name',
  slug: 'project-slug',
  description: 'One line description',
  tagline: 'Client-facing result line',
  tech: ['Next.js', 'FastAPI'],
  type: 'AI' | 'Full-Stack' | 'Frontend',
  github: 'https://github.com/...',
  link: 'https://live-demo.com',
}
```

---

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Deploy — no environment variables needed

---

## 👨‍💻 Author

**Muhammad Waheed**  
AI & Full-Stack Developer  
[muhammadwaheedairi@gmail.com](mailto:muhammadwaheedairi@gmail.com)  
[LinkedIn](https://linkedin.com/in/muhammadwaheedairi) · [GitHub](https://github.com/muhammadwaheedairi)

---

## 📄 License

All rights reserved. Not a template — built for personal use.