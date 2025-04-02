
import React from 'react';
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();
  
  const partners = [
    { 
      name: "Bitrix24", 
      logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
      description: "A complete suite of business tools for collaboration and CRM"
    },
    { 
      name: "amoCRM", 
      logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
      description: "Leading sales acceleration platform"
    },
    { 
      name: "Microsoft", 
      logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
      description: "Enterprise software and cloud solutions"
    },
    { 
      name: "Google Cloud", 
      logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
      description: "Cloud computing services and APIs"
    },
    { 
      name: "AWS", 
      logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
      description: "On-demand cloud computing platforms"
    },
    { 
      name: "Salesforce", 
      logo: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
      description: "Customer relationship management solution"
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
              <p className="text-sm text-center text-gray-600">{partner.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
