
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencySosButton from "@/components/home/EmergencySosButton";
import { getEmergencyDetail } from "@/services/emergencyData";
import { ChevronLeft, HeartPulse, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";

const EmergencyDetail: React.FC = () => {
  const { emergencyId } = useParams();
  const navigate = useNavigate();
  const emergencyDetail = getEmergencyDetail(Number(emergencyId));

  if (!emergencyDetail) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container px-4 py-6">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate("/emergency")}
          >
            <ChevronLeft className="mr-2" /> Back to Emergencies
          </Button>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Emergency Not Found</AlertTitle>
            <AlertDescription>
              The emergency information you're looking for could not be found.
            </AlertDescription>
          </Alert>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="container px-4 py-6">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate("/emergency")}
        >
          <ChevronLeft className="mr-2" /> Back to Emergencies
        </Button>
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-red-100">
              <HeartPulse className="h-6 w-6 text-emergency" />
            </div>
            <h1 className="text-2xl font-bold">{emergencyDetail.title}</h1>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{emergencyDetail.overview}</p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Do Immediately
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {emergencyDetail.doImmediately.map((item, index) => (
                    <li key={index} className="text-green-800">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Do Not Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {emergencyDetail.doNotDo.map((item, index) => (
                    <li key={index} className="text-red-800">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Step-by-Step Guide</CardTitle>
              <CardDescription>Follow these steps carefully in order</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {emergencyDetail.steps.map((step) => (
                  <AccordionItem key={step.id} value={`step-${step.id}`}>
                    <AccordionTrigger className="text-left">
                      {step.id}. {step.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">{step.description}</p>
                      {step.imageUrl && (
                        <div className="mt-2">
                          <img 
                            src={step.imageUrl} 
                            alt={step.title} 
                            className="rounded-md max-h-60 object-cover" 
                          />
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                When to Seek Professional Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {emergencyDetail.whenToSeekHelp.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {emergencyDetail.sources && (
            <div className="text-sm text-gray-500 mt-4">
              <p className="font-medium">Sources:</p>
              <ul className="list-disc pl-5">
                {emergencyDetail.sources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      
      <EmergencySosButton />
      <Footer />
    </div>
  );
};

export default EmergencyDetail;
