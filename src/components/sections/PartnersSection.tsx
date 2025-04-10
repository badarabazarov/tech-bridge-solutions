
import React from 'react';
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';
import bitrix24Logo from '/src/pics/partners/bitriks24.png';
import amoLogo from '/src/pics/partners/amo_1x.png';
import bnovoLogo from '/src/pics/partners/bnovo_1x.png';
import swebLogo from '/src/pics/partners/sweb_1x.png';
import yookassaLogo from '/src/pics/partners/yookassa_1x.png';
import yandexLogo from '/src/pics/partners/yandex.png';

const PartnersSection = () => {
  const { t } = useLanguage();
  
  const partners = [
    { 
      name: "Bitrix24", 
      logo: bitrix24Logo,
      key: "bitrix24"
    },
    { 
      name: "amoCRM", 
      logo: amoLogo,
      key: "amoCRM"
    },
    { 
      name: "Bnovo", 
      logo: bnovoLogo,
      key: "bnovo"
    },
    { 
      name: "Yandex Cloud", 
      logo: yandexLogo,
      key: "yandex"
    },
    { 
      name: "SWEB", 
      logo: swebLogo,
      key: "sweb"
    },
    { 
      name: "Yookassa", 
      logo: yookassaLogo,
      key: "yookassa"
    }
  ];

  return (
    <section id="partners" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">{t('partners.title')}</h2>
          <p className="text-lg text-gray-600">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="flex flex-col items-center p-6 border bg-white transition-all hover:shadow-md">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-full" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
              <p className="text-sm text-center text-gray-600">{t(`partners.descriptions.${partner.key}`)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
