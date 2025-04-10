
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight animate-fade-in">
              {t('hero.title')} <span className="bg-gradient-to-r from-brand-600 to-accent-teal bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-lg text-gray-600 md:text-xl animate-fade-in" style={{animationDelay: "100ms"}}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{animationDelay: "200ms"}}>
              {/* Кнопка "Начать getStarted" */}
              <Link to="/#contact" className="inline-flex">
                <Button size="lg" className="gap-2 group">
                  {t('hero.getStarted')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              {/* Кнопка "наши услуги ourServices" */}
              <Link to="/#services" className="inline-flex">
                <Button size="lg" variant="outline">
                  {t('hero.ourServices')}
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in" style={{animationDelay: "300ms"}}>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium">{t('hero.secure')}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium">{t('hero.fast')}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium">{t('hero.support')}</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/90 to-accent-teal/90 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Person working on automation solutions"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
