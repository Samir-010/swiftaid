
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencySosButton from "@/components/home/EmergencySosButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Camera, FilePlus, Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface EmergencyItem {
  id: number;
  title: string;
  category: "medical" | "mental" | "environmental" | "accidents" | "crime" | "special";
}

const emergencies: EmergencyItem[] = [
  { id: 1, title: "Heart Attack", category: "medical" },
  { id: 2, title: "Stroke", category: "medical" },
  { id: 3, title: "Choking", category: "medical" },
  { id: 4, title: "Severe Bleeding", category: "medical" },
  { id: 5, title: "Broken Bones", category: "medical" },
  { id: 6, title: "Burns", category: "medical" },
  { id: 7, title: "Seizure", category: "medical" },
  { id: 8, title: "Unconsciousness", category: "medical" },
  
  { id: 9, title: "Panic Attack", category: "mental" },
  { id: 10, title: "Suicidal Crisis", category: "mental" },
  { id: 11, title: "Severe Anxiety", category: "mental" },
  
  { id: 12, title: "Earthquake", category: "environmental" },
  { id: 13, title: "Flood", category: "environmental" },
  { id: 14, title: "Hurricane/Typhoon", category: "environmental" },
  { id: 15, title: "Tornado", category: "environmental" },
  { id: 16, title: "Wildfire", category: "environmental" },
  
  { id: 17, title: "Car Accident", category: "accidents" },
  { id: 18, title: "Drowning", category: "accidents" },
  { id: 19, title: "Fall from Height", category: "accidents" },
  { id: 20, title: "Electric Shock", category: "accidents" },
  { id: 21, title: "Poisoning", category: "accidents" },
  
  { id: 22, title: "Robbery", category: "crime" },
  { id: 23, title: "Active Shooter", category: "crime" },
  { id: 24, title: "Assault", category: "crime" },
  
  { id: 25, title: "Child Birth", category: "special" },
  { id: 26, title: "Animal Attack", category: "special" },
];

const EmergencyHelp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredEmergencies = emergencies.filter(emergency => {
    const matchesSearch = emergency.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || emergency.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Emergency Help</h1>
        
        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Search emergencies..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex gap-2 bg-emergency-light text-emergency border-emergency hover:bg-emergency hover:text-white"
              onClick={() => alert("Camera functionality would be implemented here")}
            >
              <Camera size={16} /> Scan Photo
            </Button>
            <Button 
              variant="outline" 
              className="flex gap-2"
              onClick={() => alert("Upload functionality would be implemented here")}
            >
              <FilePlus size={16} /> Upload
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-4 sm:grid-cols-7 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
            <TabsTrigger value="mental">Mental</TabsTrigger>
            <TabsTrigger value="environmental">Environment</TabsTrigger>
            <TabsTrigger value="accidents">Accidents</TabsTrigger>
            <TabsTrigger value="crime">Crime</TabsTrigger>
            <TabsTrigger value="special">Special</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredEmergencies.map((emergency) => (
                <Card key={emergency.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{emergency.title}</CardTitle>
                    <CardDescription className="capitalize">{emergency.category}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {["medical", "mental", "environmental", "accidents", "crime", "special"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredEmergencies.map((emergency) => (
                  <Card key={emergency.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{emergency.title}</CardTitle>
                      <CardDescription className="capitalize">{emergency.category}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      
      <EmergencySosButton />
      <Footer />
    </div>
  );
};

export default EmergencyHelp;
