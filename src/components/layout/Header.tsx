
import React from "react";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center">
            <span className="text-emergency font-bold text-xl">Swift</span>
            <span className="font-medium text-xl">aid</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
