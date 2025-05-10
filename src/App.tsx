
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EmergencyHelp from "./pages/EmergencyHelp";
import NearbyHospitals from "./pages/NearbyHospitals";
import NearbyHelpers from "./pages/NearbyHelpers";
import SafetyTools from "./pages/SafetyTools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/emergency" element={<EmergencyHelp />} />
          <Route path="/hospitals" element={<NearbyHospitals />} />
          <Route path="/helpers" element={<NearbyHelpers />} />
          <Route path="/tools" element={<SafetyTools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
