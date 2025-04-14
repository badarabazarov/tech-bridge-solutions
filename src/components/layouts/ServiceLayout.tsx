
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BitrixForm from '@/components/BitrixForm';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showContactForm?: boolean;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ 
  children, 
  title, 
  description,
  showContactForm = true 
}) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-brand-50 to-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">{title}</h1>
            {description && (
              <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        </section>
        
        {children}
        
        {showContactForm && (
          <section id="contact" className="section bg-primary text-white">
            <div className="container mx-auto">
              <h2 className="text-center mb-12">{t("contact.title")}</h2>
              <BitrixForm />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
