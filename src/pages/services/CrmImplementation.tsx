
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, BarChart, Users, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrmImplementation = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Database className="h-12 w-12 text-brand-600" />,
      title: t('services.crm.benefits.centralization.title'),
      description: t('services.crm.benefits.centralization.description')
    },
    {
      icon: <Zap className="h-12 w-12 text-brand-600" />,
      title: t('services.crm.benefits.automation.title'),
      description: t('services.crm.benefits.automation.description')
    },
    {
      icon: <BarChart className="h-12 w-12 text-brand-600" />,
      title: t('services.crm.benefits.sales.title'),
      description: t('services.crm.benefits.sales.description')
    },
    {
      icon: <Users className="h-12 w-12 text-brand-600" />,
      title: t('services.crm.benefits.teamwork.title'),
      description: t('services.crm.benefits.teamwork.description')
    },
    {
      icon: <Clock className="h-12 w-12 text-brand-600" />,
      title: t('services.crm.benefits.scalability.title'),
      description: t('services.crm.benefits.scalability.description')
    }
  ];

  return (
    <ServiceLayout 
      title={t('services.crm.title')} 
      description={t('services.crm.subtitle')}
    >
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('services.crm.why')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.crm.whyDescription')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.crm.expertise')}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">{t('services.crm.benefits.title')}</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 text-brand-600">{benefit.icon}</div>
                    <div>
                      <h4 className="font-bold">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-10">{t('services.crm.platforms')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-contain bg-center bg-no-repeat" 
                     style={{ backgroundImage: 'url(/src/pics/partners/bitriks24.png)' }}></div>
                <CardTitle className="text-2xl">{t('services.crm.bitrix24.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{t('services.crm.bitrix24.description')}</p>
                <Link to="/services/crm/bitrix24">
                  <Button variant="default">{t('services.crm.learnMore')}</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-contain bg-center bg-no-repeat" 
                     style={{ backgroundImage: 'url(/src/pics/partners/amo_1x.png)' }}></div>
                <CardTitle className="text-2xl">{t('services.crm.amocrm.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{t('services.crm.amocrm.description')}</p>
                <Link to="/services/crm/amocrm">
                  <Button variant="default">{t('services.crm.learnMore')}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default CrmImplementation;
