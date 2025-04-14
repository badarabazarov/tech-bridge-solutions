
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import TariffBlock from '@/components/TariffBlock';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Zap, BarChart, Users, Clock } from 'lucide-react';

const Bitrix24Crm = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Database className="h-8 w-8 text-brand-600" />,
      title: t('services.crm.benefits.centralization.title'),
      description: t('services.crm.benefits.centralization.description')
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-600" />,
      title: t('services.crm.benefits.automation.title'),
      description: t('services.crm.benefits.automation.description')
    },
    {
      icon: <BarChart className="h-8 w-8 text-brand-600" />,
      title: t('services.crm.benefits.sales.title'),
      description: t('services.crm.benefits.sales.description')
    },
    {
      icon: <Users className="h-8 w-8 text-brand-600" />,
      title: t('services.crm.benefits.teamwork.title'),
      description: t('services.crm.benefits.teamwork.description')
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-600" />,
      title: t('services.crm.benefits.scalability.title'),
      description: t('services.crm.benefits.scalability.description')
    }
  ];

  return (
    <ServiceLayout 
      title={t('services.crm.bitrix24.title')} 
      description={t('services.crm.bitrix24.subtitle')}
    >
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('services.crm.bitrix24.why')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('services.crm.bitrix24.whyDescription')}
            </p>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">{t('services.crm.bitrix24.reasons')}</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{benefit.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <TariffBlock type="crm" />
    </ServiceLayout>
  );
};

export default Bitrix24Crm;
