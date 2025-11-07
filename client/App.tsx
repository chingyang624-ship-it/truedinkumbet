import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import InfoCentre from "./pages/InfoCentre";
import TermsAndConditions from "./pages/TermsAndConditions";
import Slots from "./pages/Slots";
import LiveCasino from "./pages/LiveCasino";
import Sports from "./pages/Sports";
import Fishing from "./pages/Fishing";
import CryptoCasino from "./pages/CryptoCasino";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
            <Route path="/info-centre" element={<InfoCentre />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/slots" element={<Slots />} />
            <Route path="/live-casino" element={<LiveCasino />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/fishing" element={<Fishing />} />
            <Route path="/crypto-casino" element={<CryptoCasino />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
