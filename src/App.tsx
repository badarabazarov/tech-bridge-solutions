
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "./pages/Index";
import Tariffs from "./pages/Tariffs";
import CrmTariff from "./pages/tariffs/CrmTariff";
import RestaurantTariff from "./pages/tariffs/RestaurantTariff";
import HotelTariff from "./pages/tariffs/HotelTariff";
import CustomTariff from "./pages/tariffs/CustomTariff";
import Cases from "./pages/Cases";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
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
            <Route path="/tariffs" element={<Tariffs />} />
            <Route path="/tariffs/crm" element={<CrmTariff />} />
            <Route path="/tariffs/restaurant" element={<RestaurantTariff />} />
            <Route path="/tariffs/hotel" element={<HotelTariff />} />
            <Route path="/tariffs/custom" element={<CustomTariff />} />
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
