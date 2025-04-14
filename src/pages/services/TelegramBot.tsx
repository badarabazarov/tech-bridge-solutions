
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceLayout from '@/components/layouts/ServiceLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Zap, Shield, Settings, Image } from 'lucide-react';

const TelegramBot = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Image className="h-10 w-10 text-brand-600" />,
      title: t('services.telegramBot.features.photos.title'),
      description: t('services.telegramBot.features.photos.description')
    },
    {
      icon: <Zap className="h-10 w-10 text-accent-teal" />,
      title: t('services.telegramBot.features.speed.title'),
      description: t('services.telegramBot.features.speed.description')
    },
    {
      icon: <Shield className="h-10 w-10 text-accent-indigo" />,
      title: t('services.telegramBot.features.security.title'),
      description: t('services.telegramBot.features.security.description')
    },
    {
      icon: <Settings className="h-10 w-10 text-brand-600" />,
      title: t('services.telegramBot.features.customization.title'),
      description: t('services.telegramBot.features.customization.description')
    }
  ];

  const useCases = [
    {
      title: t('services.telegramBot.useCases.business.title'),
      description: t('services.telegramBot.useCases.business.description')
    },
    {
      title: t('services.telegramBot.useCases.personal.title'),
      description: t('services.telegramBot.useCases.personal.description')
    },
    {
      title: t('services.telegramBot.useCases.events.title'),
      description: t('services.telegramBot.useCases.events.description')
    }
  ];

  return (
    <ServiceLayout 
      title={t('services.telegramBot.title')} 
      description={t('services.telegramBot.subtitle')}
    >
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('services.telegramBot.about')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.telegramBot.aboutDescription')}
              </p>
              <div className="mt-10">
                <a href="https://t.me/PhotoExposerBot" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="px-8">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {t('services.telegramBot.tryNow')}
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
              <div className="w-full max-w-md mx-auto">
                {/* Replace with actual bot preview image */}
                <div className="aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/public/telegram.png" 
                    alt="PhotoExposer Bot Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">{t('services.telegramBot.featuresTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('services.telegramBot.useCasesTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
                <CardFooter>
                  <a href="https://t.me/PhotoExposerBot" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-800">
                    {t('services.telegramBot.learnMore')} →
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default TelegramBot;
