
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeCard from "@/components/home/HomeCard";
import EmergencySosButton from "@/components/home/EmergencySosButton";
import { Ambulance, Search, Users, Shield } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            <span className="text-emergency">Quick Help</span> in Any Emergency
          </h1>
          <p className="text-gray-500">Access critical resources instantly</p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <HomeCard
            title="Emergency Help"
            description="Get step-by-step assistance for any emergency situation"
            gradient="card-gradient-emergency"
            icon={<Ambulance size={80} />}
            to="/emergency"
          />
          <HomeCard
            title="Nearby Hospitals"
            description="Find the closest medical facilities to your location"
            gradient="card-gradient-hospital"
            icon={<Search size={80} />}
            to="/hospitals"
          />
          <HomeCard
            title="Nearby Helpers"
            description="Connect with trained volunteers in your area"
            gradient="card-gradient-helper"
            icon={<Users size={80} />}
            to="/helpers"
          />
          <HomeCard
            title="Safety Tools"
            description="Access offline first aid guides & essential tools"
            gradient="card-gradient-safety"
            icon={<Shield size={80} />}
            to="/tools"
          />
        </div>
      </main>
      
      <EmergencySosButton />
      <Footer />
    </div>
  );
};

export default Index;
