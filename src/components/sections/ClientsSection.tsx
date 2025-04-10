
import React from 'react';
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import nayanNavaaLogo from '/src/pics/clients/nayan-navaa.png';
import altanSergeLogo from '/src/pics/clients/altanserge.png';
import ironHorseLogo from '/src/pics/clients/ironhorse.png';
import schLogo from '/src/pics/clients/sch.png';
import sogonkomLogo from '/src/pics/clients/sogonkom.jpg';
import tuyaLogo from '/src/pics/clients/tuya.jpg';

const ClientsSection = () => {
  const { t } = useLanguage();
  
  const clients = [
    { 
      name: "Наян-Наваа", 
      image: nayanNavaaLogo,
      description: "Наян-Наваа"
    },
    { 
      name: "С Огоньком!", 
      image: sogonkomLogo,
      description: ""
    },
    { 
      name: "Iron Horse", 
      image: ironHorseLogo,
      description: "Логистическая компания"
    },
    { 
      name: "Сытая Черепаха", 
      image: schLogo,
      description: "Семейный ресторан"
    },
    { 
      name: "Tuya", 
      image: tuyaLogo,
      description: "Семейный ресторанн"
    },
    { 
      name: "AltanSerge", 
      image: altanSergeLogo,
      description: "Гостиница"
    }
  ];

  return (
    <section id="clients" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">{t('clients.title')}</h2>
          <p className="text-lg text-gray-600">
            {t('clients.subtitle')}
          </p>
        </div>

        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 mb-12">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center p-4 transition-all hover:scale-105">
              <div className="w-24 h-24 mb-3 overflow-hidden rounded-lg shadow-md">
                <img 
                  src={client.image} 
                  alt={`${client.name} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800">{client.name}</h3>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col items-center p-4">
                    <div className="w-24 h-24 mb-3 overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={client.image} 
                        alt={`${client.name} logo`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-800">{client.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
