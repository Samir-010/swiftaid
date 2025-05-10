
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencySosButton from "@/components/home/EmergencySosButton";
import { MapPin, Phone, MessageSquare, Shield, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Helper {
  id: number;
  name: string;
  distance: string;
  skills: string[];
  verified: boolean;
  response: string;
  rating: number;
}

const helpers: Helper[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    distance: "0.8 km",
    skills: ["CPR Certified", "First Aid"],
    verified: true,
    response: "< 5 min",
    rating: 4.9
  },
  {
    id: 2,
    name: "Mike Williams",
    distance: "1.2 km",
    skills: ["Medical Professional", "EMT"],
    verified: true,
    response: "< 5 min",
    rating: 5.0
  },
  {
    id: 3,
    name: "David Chen",
    distance: "1.6 km",
    skills: ["First Aid", "Rescue Training"],
    verified: false,
    response: "< 10 min",
    rating: 4.7
  },
  {
    id: 4,
    name: "Lisa Garcia",
    distance: "2.1 km",
    skills: ["CPR Certified", "Nurse"],
    verified: true,
    response: "< 15 min",
    rating: 4.8
  }
];

const NearbyHelpers: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const handleSendSOS = (helperId: number) => {
    alert(`SOS would be sent to helper #${helperId} in a real application`);
  };
  
  const handleChatHelper = (helperId: number) => {
    alert(`Chat would be opened with helper #${helperId} in a real application`);
  };
  
  const filteredHelpers = filter 
    ? helpers.filter(h => h.skills.some(skill => skill.includes(filter)))
    : helpers;
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Nearby Helpers</h1>
        <p className="text-gray-500 mb-4">Volunteers in your area ready to assist</p>
        
        <div className="flex gap-2 overflow-auto pb-3 mb-4">
          <Badge 
            className={`cursor-pointer ${!filter ? 'bg-[#8B5CF6]' : 'bg-gray-200 text-gray-700 hover:bg-[#8B5CF6]'}`} 
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'CPR' ? 'bg-[#8B5CF6]' : 'bg-gray-200 text-gray-700 hover:bg-[#8B5CF6]'}`} 
            onClick={() => setFilter('CPR')}
          >
            CPR Certified
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'First Aid' ? 'bg-[#8B5CF6]' : 'bg-gray-200 text-gray-700 hover:bg-[#8B5CF6]'}`}
            onClick={() => setFilter('First Aid')}
          >
            First Aid
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'Medical' ? 'bg-[#8B5CF6]' : 'bg-gray-200 text-gray-700 hover:bg-[#8B5CF6]'}`} 
            onClick={() => setFilter('Medical')}
          >
            Medical
          </Badge>
        </div>
        
        <div className="space-y-4">
          {filteredHelpers.map((helper) => (
            <div key={helper.id} className="bg-white rounded-xl p-4 shadow">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-lg flex items-center">
                    {helper.name}
                    {helper.verified && (
                      <CheckCircle className="h-4 w-4 ml-1 text-[#8B5CF6]" />
                    )}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{helper.distance}</span>
                    <span className="mx-2">•</span>
                    <span>Responds in {helper.response}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex flex-wrap gap-1 mb-3">
                  {helper.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  className="flex-1 bg-emergency text-white"
                  onClick={() => handleSendSOS(helper.id)}
                >
                  <Shield className="h-4 w-4 mr-2" /> Send SOS
                </Button>
                <Button 
                  className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
                  onClick={() => handleChatHelper(helper.id)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" /> Chat
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <EmergencySosButton />
      <Footer />
    </div>
  );
};

export default NearbyHelpers;
