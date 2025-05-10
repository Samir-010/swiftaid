
import React from "react";
import { Button } from "@/components/ui/button";
import { SOS } from "lucide-react";

const EmergencySosButton: React.FC = () => {
  const handleSosClick = () => {
    // In a real app, this would trigger an emergency call or SMS
    alert("SOS signal triggered. In a real application, this would contact emergency services.");
  };

  return (
    <div className="fixed z-20 bottom-24 right-6">
      <div className="relative">
        <div className="pulse-ring bg-emergency/50 w-16 h-16"></div>
        <div className="pulse-ring bg-emergency/30 w-16 h-16" style={{ animationDelay: "0.4s" }}></div>
        <Button
          onClick={handleSosClick}
          className="bg-emergency hover:bg-emergency/90 rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <SOS className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
};

export default EmergencySosButton;
