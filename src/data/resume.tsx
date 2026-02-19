import { Icons } from "@/components/icons";
import { HomeIcon, GraduationCap, School } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import type { ReactNode } from "react";

type WorkItem = {
  company: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

type HackathonLink = {
  title: string;
  href: string;
  icon?: ReactNode;
};

type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: HackathonLink[];
};

export const DATA = {
  name: "Aniruddha Maradwar",
  initials: "AM",
  namePronunciationUrl: "/aniruddha.mp3",
  url: "https://aniruddha.xyz" ,
  githubUsername: "AniruddhaM18",
  location: "India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra",
  description:
    "Full-stack developer with a frontend edge, building scalable apps with React, Next.js, and TypeScript, backed by solid APIs and data systems.\nTL;DR: Learnt by hacking around on the internet. I like technology and deep science—they make a dent in the universe.",
  summary:
    "Full-stack developer with a frontend specialization, building scalable web applications using [React](/#skills), [Next.js](/#skills), and [TypeScript](/#skills), while designing robust APIs and database-driven backends. [Explore my projects](/#projects) and [education](/#education).",
  avatarUrl: "/ani.png",
  skills: [
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Express.js", icon: Icons.express },
    { name: "Git", icon: Icons.git },
    { name: "Redis", icon: Icons.redis },
    { name: "Prisma", icon: Icons.prisma },
    { name: "shadcn/ui", icon: Icons.shadcnui },
    { name: "Framer Motion", icon: Icons.framermotion },
    { name: "Radix UI", icon: Icons.radixui },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  overview: {
    role: "Full-stack Developer",
    timeZone: "Asia/Kolkata",
    pronouns: "he/him",
    urls: [
      "https://axni.in",
      "https://aniruddha.xyz",
    ],
  },
  contact: {
    email: "aniruddhamaradwar9@gmail.com",
    tel: "+91 7841970696",
    bookingUrl: "https://cal.com/aniruddha", // Update with your Cal.com username
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AniruddhaM18",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aniruddha-m18/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Aniruddha18M",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [] as WorkItem[],
  education: [
    {
      school: "Bachelor of Business Administration in Computer Applications (BBA.CA)",
      href: "#",
      degree: "CGPA: 8.82",
      logoUrl: "",
      icon: GraduationCap,
      start: "2021",
      end: "2024",
    },
    {
      school: "12th Commerce",
      href: "#",
      degree: "Percentage: 84%",
      logoUrl: "",
      icon: School,
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Adorable (AI-Powered App Builder)",
      href: "#",
      repoUrl: "https://github.com/AniruddhaM18/Adorable/",
      dates: "",
      active: true,
      description:
        "AI-powered platform that converts natural language prompts into deployable full-stack applications with live preview. Built LangGraph-based agent to generate project structure, code files, and configurations from user prompts. Integrated E2B sandbox runtime for secure execution with real-time preview and editing (Monaco). Implemented one-click deployment pipeline to Cloudflare Pages via Wrangler. Designed authentication, persistent projects, and versioning using Prisma and PostgreSQL.",
      technologies: [
        "LangGraph",
        "E2B",
        "Monaco",
        "Cloudflare Pages",
        "Wrangler",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Link",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://youtu.be/OmZr9J6-R6A",
    },
    {
      title: "Antiquity (Live Quiz & Contest Platform)",
      href: "#",
      repoUrl: "https://github.com/AniruddhaM18/Antiquity",
      dates: "",
      active: true,
      description:
        "Real-time quiz platform enabling live contests with synchronized participants and dynamic leaderboards. Architected TypeScript monorepo (Turborepo + pnpm) with Next.js frontend and Express backend. Implemented live contest state and leaderboard computation using Redis with TTL-based storage. Built synchronized hosting mode with instant scoring updates. Containerized PostgreSQL and Redis using Docker Compose.",
      technologies: [
        "TypeScript",
        "Turborepo",
        "Next.js",
        "Express",
        "Redis",
        "PostgreSQL",
        "Docker Compose",
      ],
      links: [
        {
          type: "Link",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://youtu.be/UtXJm7hWRWg",
    },
    {
      title: "Anflow (Workflow Automation Tool)",
      href: "#",
      repoUrl: "https://github.com/AniruddhaM18/anflow",
      dates: "",
      active: true,
      description:
        "Node-based workflow automation platform inspired by n8n for building async integrations visually. Developed node-based execution engine supporting async flows, webhooks, retries, and branching logic. Implemented integrations for Email, Telegram, REST APIs, and database queries. Designed workflow persistence, versioning, authentication, and execution logs. Built using TypeScript, Node.js, Express, Prisma, PostgreSQL, and React.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "React",
      ],
      links: [
        {
          type: "Link",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://youtu.be/ZyPawzbX6vg",
    },
    {
      title: "Collab Draw",
      href: "#",
      repoUrl: "https://github.com/AniruddhaM18/collab-draw",
      dates: "",
      active: true,
      description:
        "Real-time collaborative drawing application where multiple users can draw together on a shared canvas. Built to be lightweight, fast, and easy to use for brainstorming, sketching, or collaborative note-taking. Features real-time sync, color and brush size options, eraser and clear canvas tools, room-based collaboration, and a responsive interface.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "WebSockets",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Link",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;
