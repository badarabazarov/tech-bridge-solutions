import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { lang, setLanguage } = useLanguage(); // Используем lang вместо language

  const toggleLanguage = () => {
    const newLang = lang === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
    console.log('Language changed to:', newLang); // Для отладки
  };
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1"
    >
      <Globe className="h-4 w-4" />
      {lang === 'ru' ? 'EN' : 'RU'} {/* Используем lang */}
    </Button>
  );
};

export default LanguageSwitcher;