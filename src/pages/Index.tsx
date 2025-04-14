
import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import { useLanguage } from "@/context/LanguageContext";
import BitrixForm from "@/components/BitrixForm";

const Index = () => {
  const { lang, t } = useLanguage(); // Using lang from context

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PartnersSection />
        <ClientsSection />
        
        {/* Benefits Section */}
        <section id="benefits" className="section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-center mb-12">{t("benefits.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{t("benefits.international.title")}</h3>
                <p className="text-gray-600">{t("benefits.international.desc")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{t("benefits.prices.title")}</h3>
                <p className="text-gray-600">{t("benefits.prices.desc")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{t("benefits.quality.title")}</h3>
                <p className="text-gray-600">{t("benefits.quality.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section с Bitrix24 формой */}
        <section id="contact" className="section bg-primary text-white">
          <div className="container mx-auto">
            <h2 className="text-center mb-12">{t("contact.title")}</h2>
            <BitrixForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
