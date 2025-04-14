
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface TariffProps {
  type: 'crm' | 'restaurant' | 'hotel' | 'custom';
}

const TariffBlock: React.FC<TariffProps> = ({ type }) => {
  const { t } = useLanguage();

  const tariffs = {
    crm: [
      {
        title: t('tariffs.crm.basic.title'),
        price: t('tariffs.crm.basic.price'),
        description: t('tariffs.crm.basic.description'),
        features: [
          t('tariffs.crm.basic.features.1'),
          t('tariffs.crm.basic.features.2'),
          t('tariffs.crm.basic.features.3'),
        ]
      },
      {
        title: t('tariffs.crm.standard.title'),
        price: t('tariffs.crm.standard.price'),
        description: t('tariffs.crm.standard.description'),
        features: [
          t('tariffs.crm.standard.features.1'),
          t('tariffs.crm.standard.features.2'),
          t('tariffs.crm.standard.features.3'),
          t('tariffs.crm.standard.features.4'),
        ]
      },
      {
        title: t('tariffs.crm.premium.title'),
        price: t('tariffs.crm.premium.price'),
        description: t('tariffs.crm.premium.description'),
        features: [
          t('tariffs.crm.premium.features.1'),
          t('tariffs.crm.premium.features.2'),
          t('tariffs.crm.premium.features.3'),
          t('tariffs.crm.premium.features.4'),
          t('tariffs.crm.premium.features.5'),
        ]
      }
    ],
    restaurant: [
      {
        title: t('tariffs.restaurant.basic.title'),
        price: t('tariffs.restaurant.basic.price'),
        description: t('tariffs.restaurant.basic.description'),
        features: [
          t('tariffs.restaurant.basic.features.1'),
          t('tariffs.restaurant.basic.features.2'),
          t('tariffs.restaurant.basic.features.3'),
        ]
      },
      {
        title: t('tariffs.restaurant.standard.title'),
        price: t('tariffs.restaurant.standard.price'),
        description: t('tariffs.restaurant.standard.description'),
        features: [
          t('tariffs.restaurant.standard.features.1'),
          t('tariffs.restaurant.standard.features.2'),
          t('tariffs.restaurant.standard.features.3'),
          t('tariffs.restaurant.standard.features.4'),
        ]
      },
      {
        title: t('tariffs.restaurant.premium.title'),
        price: t('tariffs.restaurant.premium.price'),
        description: t('tariffs.restaurant.premium.description'),
        features: [
          t('tariffs.restaurant.premium.features.1'),
          t('tariffs.restaurant.premium.features.2'),
          t('tariffs.restaurant.premium.features.3'),
          t('tariffs.restaurant.premium.features.4'),
          t('tariffs.restaurant.premium.features.5'),
        ]
      }
    ],
    hotel: [
      {
        title: t('tariffs.hotel.basic.title'),
        price: t('tariffs.hotel.basic.price'),
        description: t('tariffs.hotel.basic.description'),
        features: [
          t('tariffs.hotel.basic.features.1'),
          t('tariffs.hotel.basic.features.2'),
          t('tariffs.hotel.basic.features.3'),
        ]
      },
      {
        title: t('tariffs.hotel.standard.title'),
        price: t('tariffs.hotel.standard.price'),
        description: t('tariffs.hotel.standard.description'),
        features: [
          t('tariffs.hotel.standard.features.1'),
          t('tariffs.hotel.standard.features.2'),
          t('tariffs.hotel.standard.features.3'),
          t('tariffs.hotel.standard.features.4'),
        ]
      },
      {
        title: t('tariffs.hotel.premium.title'),
        price: t('tariffs.hotel.premium.price'),
        description: t('tariffs.hotel.premium.description'),
        features: [
          t('tariffs.hotel.premium.features.1'),
          t('tariffs.hotel.premium.features.2'),
          t('tariffs.hotel.premium.features.3'),
          t('tariffs.hotel.premium.features.4'),
          t('tariffs.hotel.premium.features.5'),
        ]
      }
    ],
    custom: [
      {
        title: t('tariffs.custom.basic.title'),
        price: t('tariffs.custom.basic.price'),
        description: t('tariffs.custom.basic.description'),
        features: [
          t('tariffs.custom.basic.features.1'),
          t('tariffs.custom.basic.features.2'),
          t('tariffs.custom.basic.features.3'),
        ]
      },
      {
        title: t('tariffs.custom.standard.title'),
        price: t('tariffs.custom.standard.price'),
        description: t('tariffs.custom.standard.description'),
        features: [
          t('tariffs.custom.standard.features.1'),
          t('tariffs.custom.standard.features.2'),
          t('tariffs.custom.standard.features.3'),
          t('tariffs.custom.standard.features.4'),
        ]
      },
      {
        title: t('tariffs.custom.premium.title'),
        price: t('tariffs.custom.premium.price'),
        description: t('tariffs.custom.premium.description'),
        features: [
          t('tariffs.custom.premium.features.1'),
          t('tariffs.custom.premium.features.2'),
          t('tariffs.custom.premium.features.3'),
          t('tariffs.custom.premium.features.4'),
          t('tariffs.custom.premium.features.5'),
        ]
      }
    ]
  };

  const currentTariffs = tariffs[type];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('tariffs.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTariffs.map((tariff, index) => (
            <Card key={index} className={`border ${index === 1 ? 'border-brand-500 shadow-lg' : 'border-gray-200'}`}>
              <CardHeader className={`${index === 1 ? 'bg-brand-50' : ''}`}>
                <CardTitle className="text-xl font-bold">{tariff.title}</CardTitle>
                <CardDescription className="text-2xl font-bold mt-2">{tariff.price}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">{tariff.description}</p>
                <ul className="space-y-2">
                  {tariff.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  {t('tariffs.selectButton')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffBlock;
