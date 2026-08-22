import type { LucideIcon } from "lucide-react";
import { Plane, Megaphone, Zap, BrainCircuit, Mail, PenTool, Briefcase, Share2, KeyRound, Gavel, Cog, Building, Globe, Heart, BookOpen, Layers, Search, Target, BarChart, Newspaper, Settings, Folder } from 'lucide-react';

export interface Venture {
  logo: LucideIcon;
  name: string;
  description: string;
  status: string;
  link: string;
}

export const ventures: Venture[] = [
  {
    logo: Layers,
    name: "Neup.Suite",
    description: "All your business tools, one powerful platform.",
    status: "Building",
    link: "/suite/about",
  },
  {
    logo: Plane,
    name: "Neup.Tourio",
    description: "The operating system for travel and tour operators in Nepal.",
    status: "Live",
    link: "/tourio/about",
  },
  {
    logo: Megaphone,
    name: "Neup.Marketing",
    description: "A modern marketing agency for the new generation of brands.",
    status: "Live",
    link: "/marketing",
  },
    {
    logo: Globe,
    name: "Neup.Site",
    description: "Build stunning websites in minutes—no coding needed.",
    status: "Building",
    link: "/site/about",
  },
  {
    logo: Search,
    name: "Neup.Search",
    description: "Find what matters, instantly. Fast, private, and accurate search.",
    status: "Building",
    link: "/search",
  },
  {
    logo: Mail,
    name: "Neup.Mail",
    description: "A privacy-focused email service that respects its users.",
    status: "Beta",
    link: "/mail/about",
  },
  {
    logo: Folder,
    name: "Neup.Drive",
    description: "A structured workspace for storing, managing, and sharing files.",
    status: "Building",
    link: "/drive/about",
  },
  {
    logo: PenTool,
    name: "Neup.Design",
    description: "A product and brand design studio for ambitious companies.",
    status: "Live",
    link: "/design/about",
  },
  {
    logo: Briefcase,
    name: "Neup.Careers",
    description: "A talent gateway for builders to join the Neup ecosystem.",
    status: "Live",
    link: "/careers",
  },
    {
    logo: Newspaper,
    name: "Neup.Blog",
    description: "Insights, stories, and updates from the Neup Group team.",
    status: "Live",
    link: "/blog",
  },
  {
    logo: Cog,
    name: "Neup.Works",
    description: "Nepal’s marketplace for talent & projects.",
    status: "Building",
    link: "/works/about",
  },
  {
    logo: Building,
    name: "Neup.Estate",
    description: "Nepal’s most trusted real estate platform.",
    status: "Building",
    link: "/estate/about",
  },
   {
    logo: Heart,
    name: "Neup.Heritage",
    description: "Preserve your family story, one generation at a time.",
    status: "Building",
    link: "/heritage/about",
  },
  {
    logo: Share2,
    name: "Neup.Socials",
    description: "The distribution engine for the Neup ecosystem.",
    status: "Building",
    link: "/socials",
  },
  {
    logo: BookOpen,
    name: "Neup.Ledger",
    description: "Smart, secure, and transparent accounting for your business.",
    status: "Building",
    link: "/ledger",
  },
  {
    logo: Briefcase,
    name: "Neup.HR",
    description: "Simplify HR, Empower Your Team.",
    status: "Building",
    link: "/hr",
  },
  {
    logo: Target,
    name: "Neup.Ads",
    description: "Reach the right audience, every time.",
    status: "Building",
    link: "/ads/about",
  },
  {
    logo: BarChart,
    name: "Neup.Analytics",
    description: "Turn data into smart decisions.",
    status: "Building",
    link: "/analytics/about",
  },
    {
    logo: Newspaper,
    name: "Neup.News",
    description: "Stay informed. Stay ahead. Fast, reliable news in one place.",
    status: "Building",
    link: "/news/about",
  },
];
