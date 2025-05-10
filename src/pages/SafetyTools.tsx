
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencySosButton from "@/components/home/EmergencySosButton";
import { FileText, Heart, Camera, Phone, Bell, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SafetyTool {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  offline: boolean;
}

const safetyTools: SafetyTool[] = [
  {
    id: 1,
    title: "First Aid Guide",
    description: "Step-by-step guides for common injuries and emergencies",
    icon: <FileText className="h-6 w-6 text-safety" />,
    action: "View Guide",
    offline: true
  },
  {
    id: 2,
    title: "CPR Instructions",
    description: "Interactive CPR guide with timing and animations",
    icon: <Heart className="h-6 w-6 text-emergency" />,
    action: "Start Guide",
    offline: true
  },
  {
    id: 3,
    title: "Smart Visual Aid",
    description: "Scan injuries or situations for AI-based guidance",
    icon: <Camera className="h-6 w-6 text-medical" />,
    action: "Open Camera",
    offline: false
  },
  {
    id: 4,
    title: "Emergency Contacts",
    description: "Set up and quickly call your emergency contacts",
    icon: <Phone className="h-6 w-6 text-info" />,
    action: "View Contacts",
    offline: true
  },
  {
    id: 5,
    title: "Emergency Alerts",
    description: "Configure automatic alerts to send when SOS is triggered",
    icon: <Bell className="h-6 w-6 text-[#8B5CF6]" />,
    action: "Configure",
    offline: false
  }
];

const SafetyTools: React.FC = () => {
  const handleToolClick = (tool: SafetyTool) => {
    alert(`In a real app, this would open: ${tool.title}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Safety Tools</h1>
        <p className="text-gray-500 mb-4">Essential resources to help in emergency situations</p>
        
        <div className="grid gap-4 grid-cols-1">
          {safetyTools.map((tool) => (
            <Card 
              key={tool.id} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleToolClick(tool)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 bg-gray-100 p-2 rounded-lg">
                      {tool.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <CardDescription className="text-sm">{tool.description}</CardDescription>
                    </div>
                  </div>
                  {tool.offline && (
                    <Badge className="bg-green-100 text-green-800 flex items-center">
                      <Download className="h-3 w-3 mr-1" /> Offline
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <button className="text-sm font-medium text-safety hover:text-safety-hover">
                    {tool.action} →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <EmergencySosButton />
      <Footer />
    </div>
  );
};

export default SafetyTools;
