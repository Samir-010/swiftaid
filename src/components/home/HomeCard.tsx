
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HomeCardProps {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
  to: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  gradient,
  icon,
  to,
}) => {
  return (
    <Link to={to} className="block">
      <div className={cn("home-card", gradient)}>
        <div className="home-card-icon">{icon}</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </Link>
  );
};

export default HomeCard;
