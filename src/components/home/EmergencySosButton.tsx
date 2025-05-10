
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmergencySosButton: React.FC = () => {
  const { toast } = useToast();
  const [pulseActive, setPulseActive] = useState(false);
  
  const handleSosClick = () => {
    // Activate pulsing animation
    setPulseActive(true);
    
    // In a real app, this would trigger an emergency call or SMS
    toast({
      title: "SOS Signal Activated",
      description: "In a real application, emergency services would be contacted and your location shared. For demonstration purposes only.",
      variant: "destructive",
      duration: 5000,
    });
    
    // Simulate tracking or contacting emergency services
    setTimeout(() => {
      toast({
        title: "Help is on the way",
        description: "Your location has been shared with emergency services.",
        duration: 3000,
      });
      setPulseActive(false);
    }, 3000);
  };

  return (
    <div className="fixed z-20 bottom-24 right-6">
      <div className="relative">
        <div className={`pulse-ring bg-emergency/50 w-16 h-16 ${pulseActive ? 'animate-pulse' : ''}`}></div>
        <div className={`pulse-ring bg-emergency/30 w-16 h-16 ${pulseActive ? 'animate-pulse' : ''}`} style={{ animationDelay: "0.4s" }}></div>
        <Button
          onClick={handleSosClick}
          className="bg-emergency hover:bg-emergency/90 rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <Bell className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
};

export default EmergencySosButton;
