import { Code2, Server, Terminal, Workflow } from "lucide-react";

export const projects = [
    {
        title: "Sonna Desktop",
        description: "Modern local development environment built with Electron + React. Lightweight process management and scalable plugin architecture.",
        techStack: ["Electron", "React", "Node.js", "TailwindCSS"],
        icon: Terminal,
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "Trading System Toolkit",
        description: "Custom tools for scalping and risk management. Features risk model simulation, execution speed optimization, and data processing efficiency.",
        techStack: ["Golang", "WebSockets", "Redis", "Next.js"],
        icon: Workflow,
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "Automation & Extensions",
        description: "Browser automation & request inspection utilities. Built for request interception, header parsing, and performance logging.",
        techStack: ["TypeScript", "Chrome API", "Node.js"],
        icon: Code2,
        githubUrl: "#",
        liveUrl: "#",
    },
];

export const skills = [
    {
        category: "Backend",
        items: ["Node.js (Express)", "Golang (Gin)", "PHP (Laravel)", "MySQL / MongoDB"],
    },
    {
        category: "Frontend",
        items: ["React / Next.js", "TailwindCSS", "shadcn/ui", "Framer Motion"],
    },
    {
        category: "DevOps & Tools",
        items: ["Docker", "Nginx", "GitHub Actions", "Electron.js"],
    },
];
