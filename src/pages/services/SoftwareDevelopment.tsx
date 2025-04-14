
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Database, Shield, Settings } from 'lucide-react';

const SoftwareDevelopment = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="h-10 w-10 text-brand-600" />,
      title: t('services.software.custom.title'),
      description: t('services.software.custom.description')
    },
    {
      icon: <Globe className="h-10 w-10 text-accent-teal" />,
      title: t('services.software.web.title'),
      description: t('services.software.web.description')
    },
    {
      icon: <Database className="h-10 w-10 text-accent-indigo" />,
      title: t('services.software.database.title'),
      description: t('services.software.database.description')
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-600" />,
      title: t('services.software.security.title'),
      description: t('services.software.security.description')
    },
    {
      icon: <Settings className="h-10 w-10 text-accent-teal" />,
      title: t('services.software.integration.title'),
      description: t('services.software.integration.description')
    }
  ];

  const process = [
    {
      step: 1,
      title: t('services.software.process.step1.title'),
      description: t('services.software.process.step1.description')
    },
    {
      step: 2,
      title: t('services.software.process.step2.title'),
      description: t('services.software.process.step2.description')
    },
    {
      step: 3,
      title: t('services.software.process.step3.title'),
      description: t('services.software.process.step3.description')
    },
    {
      step: 4,
      title: t('services.software.process.step4.title'),
      description: t('services.software.process.step4.description')
    },
    {
      step: 5,
      title: t('services.software.process.step5.title'),
      description: t('services.software.process.step5.description')
    }
  ];

  return (
    <ServiceLayout 
      title={t('services.software.title')} 
      description={t('services.software.subtitle')}
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('services.software.services')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('services.software.processTitle')}</h2>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-6 relative">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-0.5 h-full -translate-x-1/2 bg-gray-300"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default SoftwareDevelopment;
