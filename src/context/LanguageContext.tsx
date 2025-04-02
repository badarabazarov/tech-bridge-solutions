
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'ru' | 'en';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  setLanguage: () => {},
  t: () => '',
});

// Create translations object
const translations = {
  ru: {
    // Header
    'nav.services': 'Услуги',
    'nav.partners': 'Партнеры',
    'nav.clients': 'Клиенты',
    'nav.benefits': 'Преимущества',
    'nav.tariffs': 'Тарифы',
    'nav.cases': 'Кейсы',
    'nav.testimonials': 'Отзывы',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.quote': 'Получить предложение',
    
    // Hero Section
    'hero.title': 'Трансформируем бизнес через',
    'hero.titleHighlight': 'Автоматизацию',
    'hero.subtitle': 'Мы создаем индивидуальные ИТ-решения, которые автоматизируют процессы, повышают эффективность и способствуют росту бизнеса любого масштаба.',
    'hero.getStarted': 'Начать',
    'hero.ourServices': 'Наши услуги',
    'hero.secure': 'Безопасные решения',
    'hero.fast': 'Быстрое внедрение',
    'hero.support': 'Поддержка 24/7',
    
    // Services Section
    'services.title': 'Наши Услуги',
    'services.subtitle': 'Мы предоставляем комплексные ИТ-решения, чтобы помочь вашему бизнесу расти и процветать в цифровую эпоху.',
    'services.crm.title': 'Внедрение CRM',
    'services.crm.desc': 'Мы готовим ваш бизнес к эффективной работе: аудит процессов, подбор ПО, настройка и внедрение таких решений, как Bitrix24 и amoCRM.',
    'services.software.title': 'Разработка ПО',
    'services.software.desc': 'Индивидуальные программные решения, включающие написание кода, тестирование, отладку и оптимизацию для удовлетворения конкретных потребностей вашего бизнеса.',
    'services.mobile.title': 'Разработка мобильных приложений',
    'services.mobile.desc': 'Создание мобильных приложений для устройств iOS и Android, обеспечивающих безупречный опыт для ваших клиентов.',
    'services.website.title': 'Создание сайтов',
    'services.website.desc': 'От простых до сложных веб-сайтов - мы создаем адаптивные и современные веб-решения, представляющие ваш бренд в интернете.',
    'services.automation.title': 'ИТ-автоматизация',
    'services.automation.desc': 'Оптимизируйте бизнес-процессы с помощью индивидуальных решений по автоматизации, которые экономят время и снижают количество ошибок.',
    'services.database.title': 'Администрирование баз данных',
    'services.database.desc': 'Экспертное управление вашими базами данных, обеспечивающее оптимальную производительность, безопасность и надежность.',
    'services.learnMore': 'Узнать больше',
    
    // Clients Section
    'clients.title': 'Наши Клиенты',
    'clients.subtitle': 'Нам доверяют ведущие компании из различных отраслей.',
    
    // Partners Section
    'partners.title': 'Наши Партнеры',
    'partners.subtitle': 'Мы сотрудничаем с лидерами отрасли, чтобы предложить вам лучшие решения.',
    
    // Benefits Section
    'benefits.title': 'Почему Выбирают Нас',
    'benefits.international.title': 'Международные Проекты',
    'benefits.international.desc': 'Опыт работы в международных компаниях, таких как Huawei, NetCracker, EPAM, гарантирует применение всех соответствующих компетенций и соблюдение высочайших стандартов качества и профессионализма в ИТ-сфере.',
    'benefits.prices.title': 'Демократичные Цены',
    'benefits.prices.desc': 'С демократичным ценообразованием вы можете быть уверены, что получаете справедливую цену за качество и преимущества, без скрытых комиссий или наценок.',
    'benefits.quality.title': 'Качественные Услуги',
    'benefits.quality.desc': 'Опыт работы в отрасли, использование новейших технологий и методологий для обеспечения эффективности, надежности и результативности наших ИТ-услуг.',
    
    // Contact Section
    'contact.title': 'Связаться с Нами',
    'contact.name': 'Ваше Имя',
    'contact.email': 'Ваш Email',
    'contact.message': 'Ваше Сообщение',
    'contact.call': 'Позвоните нам:',
    'contact.send': 'Отправить Сообщение',
    
    // Footer
    'footer.about': 'Мы предоставляем профессиональные услуги по автоматизации и ИТ-решения, помогающие бизнесу трансформироваться и расти.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.contactUs': 'Свяжитесь с Нами',
    'footer.rights': 'Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.partners': 'Partners',
    'nav.clients': 'Clients',
    'nav.benefits': 'Benefits',
    'nav.tariffs': 'Tariffs',
    'nav.cases': 'Cases',
    'nav.testimonials': 'Testimonials',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.quote': 'Get a Quote',
    
    // Hero Section
    'hero.title': 'Transforming Businesses Through',
    'hero.titleHighlight': 'Automation',
    'hero.subtitle': 'We build custom IT solutions that automate processes, improve efficiency, and drive growth for businesses of all sizes.',
    'hero.getStarted': 'Get Started',
    'hero.ourServices': 'Our Services',
    'hero.secure': 'Secure Solutions',
    'hero.fast': 'Fast Deployment',
    'hero.support': '24/7 Support',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'We provide comprehensive IT solutions to help your business grow and thrive in the digital age.',
    'services.crm.title': 'CRM Implementation',
    'services.crm.desc': 'We prepare your business for efficient operation by auditing processes, selecting software, configuring and implementing solutions like Bitrix24 and amoCRM.',
    'services.software.title': 'Software Development',
    'services.software.desc': 'Custom programming solutions including code writing, testing, debugging and optimization to meet your specific business needs.',
    'services.mobile.title': 'Mobile App Development',
    'services.mobile.desc': 'Creating mobile applications for iOS and Android devices that provide seamless experiences for your customers.',
    'services.website.title': 'Website Creation',
    'services.website.desc': 'From simple to complex websites, we build responsive and modern web solutions that represent your brand online.',
    'services.automation.title': 'IT Automation',
    'services.automation.desc': 'Streamline your business processes with custom automation solutions that save time and reduce errors.',
    'services.database.title': 'Database Administration',
    'services.database.desc': 'Expert management of your databases ensuring optimal performance, security, and reliability.',
    'services.learnMore': 'Learn more',
    
    // Clients Section
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted by leading companies across various industries.',
    
    // Partners Section
    'partners.title': 'Our Partners',
    'partners.subtitle': 'We collaborate with industry leaders to bring you the best solutions.',
    
    // Benefits Section
    'benefits.title': 'Why Choose Us',
    'benefits.international.title': 'International Projects',
    'benefits.international.desc': 'Experience in international companies such as Huawei, NetCracker, EPAM ensures that we apply all relevant competencies and maintain the highest standards of quality and professionalism in the IT field.',
    'benefits.prices.title': 'Democratic Prices',
    'benefits.prices.desc': 'With democratic pricing, you can be assured that you are getting a fair price for the quality and benefits you receive, without any hidden fees or mark-ups.',
    'benefits.quality.title': 'Quality Services',
    'benefits.quality.desc': 'Experience in the industry, and utilizing the latest technology and methodology to ensure the efficiency, reliability and effectiveness of our IT services.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.call': 'Call us at:',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.about': 'We provide professional automation services and IT solutions to help businesses transform and grow.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru'); // Default to Russian

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
