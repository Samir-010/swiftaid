
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencySosButton from "@/components/home/EmergencySosButton";
import { MapPin, Phone, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Hospital {
  id: number;
  name: string;
  type: string;
  distance: string;
  address: string;
  phone: string;
  rating: number;
  emergency: boolean;
  specialties: string[];
}

const hospitals: Hospital[] = [
  {
    id: 1,
    name: "City General Hospital",
    type: "General Hospital",
    distance: "1.2 km",
    address: "123 Main St, Cityville",
    phone: "+1-555-123-4567",
    rating: 4.5,
    emergency: true,
    specialties: ["Trauma Center", "Cardiac Care"]
  },
  {
    id: 2,
    name: "Mercy Medical Center",
    type: "Medical Center",
    distance: "2.8 km",
    address: "456 Oak Ave, Cityville",
    phone: "+1-555-987-6543",
    rating: 4.2,
    emergency: true,
    specialties: ["Burn Unit", "Pediatrics"]
  },
  {
    id: 3,
    name: "Westside Urgent Care",
    type: "Urgent Care",
    distance: "3.5 km",
    address: "789 Elm Blvd, Cityville",
    phone: "+1-555-456-7890",
    rating: 3.8,
    emergency: false,
    specialties: ["Walk-in Care"]
  },
  {
    id: 4,
    name: "Sunnyvale Medical",
    type: "Clinic",
    distance: "5.1 km",
    address: "101 Pine St, Sunnyvale",
    phone: "+1-555-234-5678",
    rating: 4.0,
    emergency: false,
    specialties: ["Family Medicine"]
  }
];

const NearbyHospitals: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const handleEmergencyCall = (phone: string) => {
    alert(`In a real application, this would call: ${phone}`);
    // Would use: window.location.href = `tel:${phone}`;
  };
  
  const handleGetDirections = (address: string) => {
    alert(`In a real application, this would open maps to: ${address}`);
    // Would use: window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
  };
  
  const filteredHospitals = filter 
    ? hospitals.filter(h => h.specialties.includes(filter)) 
    : hospitals;
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Nearby Hospitals</h1>
        <p className="text-gray-500 mb-4">Showing hospitals near your current location</p>
        
        <div className="flex gap-2 overflow-auto pb-3 mb-4">
          <Badge 
            className={`cursor-pointer ${!filter ? 'bg-medical' : 'bg-gray-200 text-gray-700 hover:bg-medical'}`} 
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'Trauma Center' ? 'bg-medical' : 'bg-gray-200 text-gray-700 hover:bg-medical'}`} 
            onClick={() => setFilter('Trauma Center')}
          >
            Trauma Center
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'Burn Unit' ? 'bg-medical' : 'bg-gray-200 text-gray-700 hover:bg-medical'}`}
            onClick={() => setFilter('Burn Unit')}
          >
            Burn Unit
          </Badge>
          <Badge 
            className={`cursor-pointer ${filter === 'Pediatrics' ? 'bg-medical' : 'bg-gray-200 text-gray-700 hover:bg-medical'}`} 
            onClick={() => setFilter('Pediatrics')}
          >
            Pediatrics
          </Badge>
        </div>
        
        <div className="space-y-4">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-xl p-4 shadow">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-lg">{hospital.name}</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{hospital.type}</span>
                    <span className="mx-2">•</span>
                    <span>{hospital.distance}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{hospital.rating}</span>
                </div>
              </div>
              
              <div className="mt-3">
                {hospital.emergency && (
                  <Badge className="bg-emergency mb-2">24/7 Emergency</Badge>
                )}
                <div className="flex flex-wrap gap-1 mb-3">
                  {hospital.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  className="flex-1 bg-emergency text-white py-2 rounded-lg flex items-center justify-center font-medium"
                  onClick={() => handleEmergencyCall(hospital.phone)}
                >
                  <Phone className="h-4 w-4 mr-2" /> Call
                </button>
                <button 
                  className="flex-1 bg-medical text-white py-2 rounded-lg flex items-center justify-center font-medium"
                  onClick={() => handleGetDirections(hospital.address)}
                >
                  <MapPin className="h-4 w-4 mr-2" /> Directions
                </button>
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

export default NearbyHospitals;
