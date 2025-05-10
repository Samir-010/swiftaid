
import React from "react";
import { Home, Search, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    icon: Home,
    href: "/",
    label: "Home",
  },
  {
    icon: Search,
    href: "/search",
    label: "Search",
  },
  {
    icon: Heart,
    href: "/saved",
    label: "Saved",
  },
  {
    icon: User,
    href: "/profile",
    label: "Profile",
  },
];

const Footer: React.FC = () => {
  const path = window.location.pathname;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)]">
      <nav className="container flex justify-around">
        {navItems.map((item) => {
          const isActive = path === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-4",
                isActive ? "text-emergency" : "text-gray-500"
              )}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
