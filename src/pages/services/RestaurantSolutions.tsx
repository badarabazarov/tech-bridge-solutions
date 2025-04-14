
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import TariffBlock from '@/components/TariffBlock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, CalendarClock, BarChart2, CreditCard, Users } from 'lucide-react';

const RestaurantSolutions = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-brand-600" />,
      title: t('services.restaurant.features.ordering.title'),
      description: t('services.restaurant.features.ordering.description')
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-accent-teal" />,
      title: t('services.restaurant.features.reservation.title'),
      description: t('services.restaurant.features.reservation.description')
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-accent-indigo" />,
      title: t('services.restaurant.features.analytics.title'),
      description: t('services.restaurant.features.analytics.description')
    },
    {
      icon: <CreditCard className="h-10 w-10 text-brand-600" />,
      title: t('services.restaurant.features.payments.title'),
      description: t('services.restaurant.features.payments.description')
    },
    {
      icon: <Users className="h-10 w-10 text-accent-teal" />,
      title: t('services.restaurant.features.loyalty.title'),
      description: t('services.restaurant.features.loyalty.description')
    }
  ];

  return (
    <ServiceLayout 
      title={t('services.restaurant.title')} 
      description={t('services.restaurant.subtitle')}
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('services.restaurant.challenges')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.restaurant.challengesDescription')}
              </p>
              <p className="text-lg text-gray-600">
                {t('services.restaurant.solution')}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">{t('services.restaurant.benefits.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.restaurant.benefits.efficiency')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.restaurant.benefits.customer')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.restaurant.benefits.costs')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.restaurant.benefits.insights')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span>{t('services.restaurant.benefits.competitive')}</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">{t('services.restaurant.featuresTitle')}</h2>
          
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

      <TariffBlock type="restaurant" />
    </ServiceLayout>
  );
};

export default RestaurantSolutions;
