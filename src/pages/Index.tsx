
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <ClientsSection />
          <PartnersSection />
          
          {/* Benefits Section */}
          <section id="benefits" className="section bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-center mb-12">{t('benefits.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{t('benefits.international.title')}</h3>
                  <p className="text-gray-600">{t('benefits.international.desc')}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{t('benefits.prices.title')}</h3>
                  <p className="text-gray-600">{t('benefits.prices.desc')}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{t('benefits.quality.title')}</h3>
                  <p className="text-gray-600">{t('benefits.quality.desc')}</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="section bg-primary text-white">
            <div className="container mx-auto">
              <h2 className="text-center mb-12">{t('contact.title')}</h2>
              <div className="max-w-lg mx-auto">
                <div className="flex flex-col space-y-4">
                  <input 
                    type="text" 
                    placeholder={t('contact.name')}
                    className="px-4 py-3 rounded-md text-gray-900"
                  />
                  <input 
                    type="email" 
                    placeholder={t('contact.email')}
                    className="px-4 py-3 rounded-md text-gray-900"
                  />
                  <textarea 
                    placeholder={t('contact.message')}
                    className="px-4 py-3 rounded-md text-gray-900 min-h-32"
                  ></textarea>
                  <div className="text-center text-gray-900 mb-4">
                    {t('contact.call')} <a href="tel:+79992138283" className="font-bold text-primary hover:underline">+7 (999) 213-82-83</a>
                  </div>
                  <button className="bg-white text-primary font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                    {t('contact.send')}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
