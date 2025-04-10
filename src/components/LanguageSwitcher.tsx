
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
    console.log('Language changed to:', newLang); // For debugging
  };
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1"
    >
      <Globe className="h-4 w-4" />
      {language === 'ru' ? 'EN' : 'RU'}
    </Button>
  );
};

export default LanguageSwitcher;
