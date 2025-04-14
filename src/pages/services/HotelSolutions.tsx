
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import TariffBlock from '@/components/TariffBlock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, BarChart2, CreditCard, Globe } from 'lucide-react';

const HotelSolutions = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Calendar className="h-10 w-10 text-brand-600" />,
      title: t('services.hotel.features.booking.title'),
      description: t('services.hotel.features.booking.description')
    },
    {
      icon: <Users className="h-10 w-10 text-accent-teal" />,
      title: t('services.hotel.features.management.title'),
      description: t('services.hotel.features.management.description')
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-accent-indigo" />,
      title: t('services.hotel.features.analytics.title'),
      description: t('services.hotel.features.analytics.description')
    },
    {
      icon: <CreditCard className="h-10 w-10 text-brand-600" />,
      title: t('services.hotel.features.payments.title'),
      description: t('services.hotel.features.payments.description')
    },
    {
      icon: <Globe className="h-10 w-10 text-accent-teal" />,
      title: t('services.hotel.features.websites.title'),
      description: t('services.hotel.features.websites.description')
    }
  ];

  return (
    <ServiceLayout 
      title={t('services.hotel.title')} 
      description={t('services.hotel.subtitle')}
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('services.hotel.challenges')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.hotel.challengesDescription')}
              </p>
              <p className="text-lg text-gray-600">
                {t('services.hotel.solution')}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">{t('services.hotel.benefits.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.hotel.benefits.efficiency')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.hotel.benefits.experience')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.hotel.benefits.revenue')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.hotel.benefits.insights')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.hotel.benefits.competitive')}</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">{t('services.hotel.featuresTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TariffBlock type="hotel" />
    </ServiceLayout>
  );
};

export default HotelSolutions;
