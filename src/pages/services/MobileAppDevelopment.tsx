
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Layers, Share2, Zap, ShieldCheck } from 'lucide-react';

const MobileAppDevelopment = () => {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: <Smartphone className="h-10 w-10 text-brand-600" />,
      title: t('services.mobile.expertise.cross.title'),
      description: t('services.mobile.expertise.cross.description')
    },
    {
      icon: <Layers className="h-10 w-10 text-accent-teal" />,
      title: t('services.mobile.expertise.native.title'),
      description: t('services.mobile.expertise.native.description')
    },
    {
      icon: <Share2 className="h-10 w-10 text-accent-indigo" />,
      title: t('services.mobile.expertise.integration.title'),
      description: t('services.mobile.expertise.integration.description')
    },
    {
      icon: <Zap className="h-10 w-10 text-brand-600" />,
      title: t('services.mobile.expertise.performance.title'),
      description: t('services.mobile.expertise.performance.description')
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent-teal" />,
      title: t('services.mobile.expertise.security.title'),
      description: t('services.mobile.expertise.security.description')
    }
  ];

  const platforms = [
    {
      name: 'iOS',
      image: '/src/pics/clients/tuya.jpg',  // Placeholder, replace with actual iOS logo
      description: t('services.mobile.platforms.ios')
    },
    {
      name: 'Android',
      image: '/src/pics/clients/sogonkom.jpg',  // Placeholder, replace with actual Android logo
      description: t('services.mobile.platforms.android')
    }
  ];

  return (
    <ServiceLayout 
      title={t('services.mobile.title')} 
      description={t('services.mobile.subtitle')}
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('services.mobile.approach')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.mobile.approachDescription')}
              </p>
              <p className="text-lg text-gray-600">
                {t('services.mobile.collaboration')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                    <img src={platform.image} alt={platform.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-center">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">{t('services.mobile.expertiseTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('services.mobile.cta.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('services.mobile.cta.description')}
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default MobileAppDevelopment;
