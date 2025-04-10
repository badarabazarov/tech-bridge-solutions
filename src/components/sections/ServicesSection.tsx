
import React from 'react';
import { Database, Code, Smartphone, Globe, Settings, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Database className="h-12 w-12 text-brand-600" />,
      title: t('services.crm.title'),
      description: t('services.crm.desc'),
      link: "#contact"
    },
    {
      icon: <Code className="h-12 w-12 text-accent-teal" />,
      title: t('services.software.title'),
      description: t('services.software.desc'),
      link: "#contact"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-accent-indigo" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      link: "#contact"
    },
    {
      icon: <Globe className="h-12 w-12 text-brand-600" />,
      title: t('services.website.title'),
      description: t('services.website.desc'),
      link: "#contact"
    },
    {
      icon: <Settings className="h-12 w-12 text-accent-teal" />,
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
      link: "#contact"
    },
    {
      icon: <Server className="h-12 w-12 text-accent-indigo" />,
      title: t('services.database.title'),
      description: t('services.database.desc'),
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 transition-all hover:shadow-md hover:border-brand-300">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 min-h-[100px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
              <Button 
                  variant="link" 
                  className="p-0 h-auto text-brand-600 hover:text-brand-800" 
                  asChild
                >
                 <a
                    href="#contact"
                    onClick={scrollToContact}
                    role="button"
                    aria-label={t('services.learnMore')}
                  >
                    {t('services.learnMore')} →
                  </a>
              </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
