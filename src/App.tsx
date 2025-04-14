
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "./pages/Index";
import Cases from "./pages/Cases";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Services pages
import CrmImplementation from "./pages/services/CrmImplementation";
import Bitrix24Crm from "./pages/services/Bitrix24Crm";
import AmoCrm from "./pages/services/AmoCrm";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import RestaurantSolutions from "./pages/services/RestaurantSolutions";
import HotelSolutions from "./pages/services/HotelSolutions";
import TelegramBot from "./pages/services/TelegramBot";

import { useEffect } from 'react';

const queryClient = new QueryClient();

// Компонент для обработки скролла
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Services Routes */}
            <Route path="/services/crm" element={<CrmImplementation />} />
            <Route path="/services/crm/bitrix24" element={<Bitrix24Crm />} />
            <Route path="/services/crm/amocrm" element={<AmoCrm />} />
            <Route path="/services/software" element={<SoftwareDevelopment />} />
            <Route path="/services/mobile" element={<MobileAppDevelopment />} />
            <Route path="/services/restaurant" element={<RestaurantSolutions />} />
            <Route path="/services/hotel" element={<HotelSolutions />} />
            <Route path="/services/telegram" element={<TelegramBot />} />
            
            <Route path="/cases" element={<Cases />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
