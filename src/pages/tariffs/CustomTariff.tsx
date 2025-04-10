
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CustomTariff = () => {
  const { t } = useLanguage();
  
  const tariffPlans = [
    {
      name: t('tariffs.custom.basic.name'),
      price: t('tariffs.custom.basic.price'),
      description: t('tariffs.custom.basic.description'),
      features: [
        t('tariffs.custom.basic.feature1'),
        t('tariffs.custom.basic.feature2'),
        t('tariffs.custom.basic.feature3'),
        t('tariffs.custom.basic.feature4')
      ]
    },
    {
      name: t('tariffs.custom.standard.name'),
      price: t('tariffs.custom.standard.price'),
      description: t('tariffs.custom.standard.description'),
      features: [
        t('tariffs.custom.standard.feature1'),
        t('tariffs.custom.standard.feature2'),
        t('tariffs.custom.standard.feature3'),
        t('tariffs.custom.standard.feature4'),
        t('tariffs.custom.standard.feature5')
      ],
      popular: true
    },
    {
      name: t('tariffs.custom.premium.name'),
      price: t('tariffs.custom.premium.price'),
      description: t('tariffs.custom.premium.description'),
      features: [
        t('tariffs.custom.premium.feature1'),
        t('tariffs.custom.premium.feature2'),
        t('tariffs.custom.premium.feature3'),
        t('tariffs.custom.premium.feature4'),
        t('tariffs.custom.premium.feature5'),
      ]
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center mb-4">{t('tariffs.custom.title')}</h1>
              <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                {t('tariffs.custom.subtitle')}
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tariffPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                      plan.popular ? 'border-2 border-primary ring-2 ring-primary/20 relative' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                        {t('tariffs.popular')}
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold mb-4">{plan.price}</div>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <ul className="mb-8 space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      >
                        {t('tariffs.select')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

            <Link to="/#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">              
              <div className="mt-16 text-center">
                <p className="text-gray-600 mb-4">{t('tariffs.customText')}</p>
                <Button variant="outline">{t('tariffs.contactUs')}</Button>
              </div>
            </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default CustomTariff;
