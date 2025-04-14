import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    'header.home': 'Home',
    'header.services': 'Services',
    'header.cases': 'Cases',
    'header.testimonials': 'Testimonials',
    'header.about': 'About',
    'header.contact': 'Contact',
    'footer.copyright': '© {year} Tech Bridge Solutions. All rights reserved.',
    'contact.title': 'Contact Us',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Message',
    'contact.form.button': 'Send Message',
    'services.title': 'Our Services',
    'services.subtitle': 'Explore our wide range of services designed to meet your business needs.',
    'cases.title': 'Our Cases',
    'cases.subtitle': 'Discover how we have helped businesses like yours succeed.',
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'Read what our clients have to say about our services.',
    'about.title': 'About Us',
    'about.subtitle': 'Learn more about our company, our mission, and our team.',
    '404.title': 'Page Not Found',
    '404.subtitle': 'The page you are looking for does not exist.',
    'backToHome': 'Back to Home',
    'success.message': 'Your message has been sent successfully!',
    'error.message': 'An error occurred while sending your message. Please try again later.',
    'home.hero.title': 'Your Trusted Partner in IT Solutions',
    'home.hero.subtitle': 'We provide innovative and reliable IT solutions to help your business grow.',
    'home.services.title': 'Our Key Services',
    'home.services.crm.title': 'CRM Implementation',
    'home.services.crm.description': 'Streamline your customer relationships with our CRM implementation services.',
    'home.services.software.title': 'Custom Software Development',
    'home.services.software.description': 'Tailored software solutions to meet your unique business needs.',
    'home.services.mobile.title': 'Mobile App Development',
    'home.services.mobile.description': 'Engage your customers on the go with our mobile app development services.',
    'home.testimonials.title': 'What Our Clients Say',
    'home.contact.title': 'Get in Touch',
    'home.contact.description': 'Ready to take your business to the next level? Contact us today!',
    'home.contact.button': 'Contact Us',
    'home.cases.title': 'Featured Cases',
    'home.cases.description': 'Explore our featured cases and see how we have helped businesses like yours succeed.',
    'home.cases.button': 'View All Cases',
    'services.crm.title': 'CRM Implementation Services',
    'services.crm.subtitle': 'We specialize in implementing and customizing CRM systems to improve your customer relationships and sales processes.',
    'services.crm.bitrix24.title': 'Bitrix24 Implementation',
    'services.crm.bitrix24.subtitle': 'Maximize your business potential with our Bitrix24 implementation services.',
    'services.crm.bitrix24.description': 'We offer comprehensive Bitrix24 implementation services, including setup, customization, training, and support. Bitrix24 is a powerful platform that combines CRM, project management, and collaboration tools to help businesses streamline their operations and improve customer relationships.',
    'services.crm.amocrm.title': 'amoCRM Implementation',
    'services.crm.amocrm.subtitle': 'Drive sales and improve customer engagement with our amoCRM implementation services.',
    'services.crm.amocrm.description': 'We provide expert amoCRM implementation services, including setup, customization, training, and ongoing support. amoCRM is a sales-focused CRM system designed to help businesses manage leads, automate sales processes, and improve customer communication.',
    'services.restaurant.title': 'Restaurant Solutions',
    'services.restaurant.subtitle': 'Innovative solutions for restaurant management and customer engagement.',
    'services.hotel.title': 'Hotel Solutions',
    'services.hotel.subtitle': 'Comprehensive IT solutions for hotel management and guest satisfaction.',
    'services.telegram.title': 'Telegram Bot Development',
    'services.telegram.subtitle': 'Engage your audience with custom Telegram bots for various business needs.',
    'services.mobile.title': 'Mobile App Development',
    'services.mobile.subtitle': 'Custom mobile applications for iOS and Android platforms.',
    
    // Software Development page
    'services.software.title': 'Software & Web Development',
    'services.software.subtitle': 'Custom software solutions tailored to your business needs',
    'services.software.intro.title': 'Professional Development Services',
    'services.software.intro.description1': 'Our team specializes in creating high-quality custom software and web applications that solve specific business challenges.',
    'services.software.intro.description2': 'We follow industry best practices and use modern technologies to deliver reliable, secure, and scalable solutions.',
    'services.software.services': 'Our Development Services',
    'services.software.benefitsTitle': 'Benefits of Working With Us',
    'services.software.processTitle': 'Our Development Process',
    
    'services.software.custom.title': 'Custom Software Development',
    'services.software.custom.description': 'We create tailored software solutions that address your unique business challenges and streamline operations.',
    
    'services.software.web.title': 'Web Applications',
    'services.software.web.description': 'Modern, responsive web applications with intuitive interfaces that work across all devices and browsers.',
    
    'services.software.database.title': 'Database Development',
    'services.software.database.description': 'Efficient database design and development to store, manage, and analyze your business data securely.',
    
    'services.software.security.title': 'Security Solutions',
    'services.software.security.description': 'Implementation of robust security measures to protect your data and applications from threats.',
    
    'services.software.integration.title': 'System Integration',
    'services.software.integration.description': 'Seamless integration of your software with third-party services, APIs, and existing systems.',
    
    'services.software.benefits.quality.title': 'High-Quality Code',
    'services.software.benefits.quality.description': 'Our developers follow best practices to ensure your software is reliable, maintainable, and secure.',
    
    'services.software.benefits.scalable.title': 'Scalable Solutions',
    'services.software.benefits.scalable.description': 'We build with the future in mind, creating systems that can grow along with your business.',
    
    'services.software.benefits.support.title': 'Ongoing Support',
    'services.software.benefits.support.description': 'Our team provides continuous maintenance and support to keep your software running smoothly.',
    
    'services.software.benefits.time.title': 'Timely Delivery',
    'services.software.benefits.time.description': 'We adhere to agreed timelines and keep you informed throughout the development process.',
    
    'services.software.process.step1.title': 'Requirements Analysis',
    'services.software.process.step1.description': 'We work closely with you to understand your business needs and define clear project requirements.',
    
    'services.software.process.step2.title': 'Design & Planning',
    'services.software.process.step2.description': 'Our team creates a detailed design and development plan, including technology stack and architecture.',
    
    'services.software.process.step3.title': 'Development',
    'services.software.process.step3.description': 'We follow agile methodologies, building your software incrementally with regular feedback loops.',
    
    'services.software.process.step4.title': 'Testing & Quality Assurance',
    'services.software.process.step4.description': 'Comprehensive testing ensures your software works perfectly across all scenarios and environments.',
    
    'services.software.process.step5.title': 'Deployment & Support',
    'services.software.process.step5.description': 'We handle the deployment process and provide ongoing maintenance and support services.',
  },
  ru: {
    'header.home': 'Главная',
    'header.services': 'Услуги',
    'header.cases': 'Кейсы',
    'header.testimonials': 'Отзывы',
    'header.about': 'О нас',
    'header.contact': 'Контакты',
    'footer.copyright': '© {year} Tech Bridge Solutions. Все права защищены.',
    'contact.title': 'Свяжитесь с нами',
    'contact.form.name': 'Ваше имя',
    'contact.form.email': 'Ваш email',
    'contact.form.message': 'Сообщение',
    'contact.form.button': 'Отправить сообщение',
    'services.title': 'Наши услуги',
    'services.subtitle': 'Ознакомьтесь с нашим широким спектром услуг, разработанных для удовлетворения потребностей вашего бизнеса.',
    'cases.title': 'Наши кейсы',
    'cases.subtitle': 'Узнайте, как мы помогли таким же компаниям, как ваша, добиться успеха.',
    'testimonials.title': 'Отзывы',
    'testimonials.subtitle': 'Прочитайте, что наши клиенты говорят о наших услугах.',
    'about.title': 'О нас',
    'about.subtitle': 'Узнайте больше о нашей компании, нашей миссии и нашей команде.',
    '404.title': 'Страница не найдена',
    '404.subtitle': 'Страница, которую вы ищете, не существует.',
    'backToHome': 'Вернуться на главную',
     'success.message': 'Ваше сообщение успешно отправлено!',
    'error.message': 'Произошла ошибка при отправке вашего сообщения. Пожалуйста, попробуйте позже.',
    'home.hero.title': 'Ваш надежный партнер в сфере IT-решений',
    'home.hero.subtitle': 'Мы предоставляем инновационные и надежные IT-решения, чтобы помочь вашему бизнесу расти.',
    'home.services.title': 'Наши ключевые услуги',
    'home.services.crm.title': 'Внедрение CRM',
    'home.services.crm.description': 'Оптимизируйте свои отношения с клиентами с помощью наших услуг по внедрению CRM.',
    'home.services.software.title': 'Разработка программного обеспечения на заказ',
    'home.services.software.description': 'Индивидуальные программные решения для удовлетворения уникальных потребностей вашего бизнеса.',
    'home.services.mobile.title': 'Разработка мобильных приложений',
    'home.services.mobile.description': 'Привлекайте своих клиентов в пути с помощью наших услуг по разработке мобильных приложений.',
    'home.testimonials.title': 'Что говорят наши клиенты',
    'home.contact.title': 'Связаться с нами',
    'home.contact.description': 'Готовы вывести свой бизнес на новый уровень? Свяжитесь с нами сегодня!',
    'home.contact.button': 'Связаться с нами',
    'home.cases.title': 'Рекомендуемые кейсы',
    'home.cases.description': 'Ознакомьтесь с нашими избранными кейсами и узнайте, как мы помогли таким же компаниям, как ваша, добиться успеха.',
    'home.cases.button': 'Посмотреть все кейсы',
    'services.crm.title': 'Услуги по внедрению CRM',
    'services.crm.subtitle': 'Мы специализируемся на внедрении и настройке CRM-систем для улучшения ваших отношений с клиентами и процессов продаж.',
    'services.crm.bitrix24.title': 'Внедрение Bitrix24',
    'services.crm.bitrix24.subtitle': 'Максимизируйте свой бизнес-потенциал с помощью наших услуг по внедрению Bitrix24.',
    'services.crm.bitrix24.description': 'Мы предлагаем комплексные услуги по внедрению Bitrix24, включая настройку, кастомизацию, обучение и поддержку. Bitrix24 — это мощная платформа, которая объединяет CRM, управление проектами и инструменты для совместной работы, чтобы помочь компаниям оптимизировать свою деятельность и улучшить отношения с клиентами.',
    'services.crm.amocrm.title': 'Внедрение amoCRM',
    'services.crm.amocrm.subtitle': 'Увеличьте продажи и улучшите взаимодействие с клиентами с помощью наших услуг по внедрению amoCRM.',
    'services.crm.amocrm.description': 'Мы предоставляем экспертные услуги по внедрению amoCRM, включая настройку, кастомизацию, обучение и постоянную поддержку. amoCRM — это CRM-система, ориентированная на продажи, разработанная, чтобы помочь компаниям управлять лидами, автоматизировать процессы продаж и улучшить общение с клиентами.',
    'services.restaurant.title': 'Решения для ресторанов',
    'services.restaurant.subtitle': 'Инновационные решения для управления рестораном и взаимодействия с клиентами.',
    'services.hotel.title': 'Решения для отелей',
    'services.hotel.subtitle': 'Комплексные ИТ-решения для управления отелем и удовлетворения гостей.',
    'services.telegram.title': 'Разработка Telegram-ботов',
    'services.telegram.subtitle': 'Взаимодействуйте со своей аудиторией с помощью пользовательских Telegram-ботов для различных бизнес-задач.',
    'services.mobile.title': 'Разработка мобильных приложений',
    'services.mobile.subtitle': 'Пользовательские мобильные приложения для платформ iOS и Android.',
    
    // Software Development page
    'services.software.title': 'Разработка ПО и сайтов',
    'services.software.subtitle': 'Индивидуальные программные решения для вашего бизнеса',
    'services.software.intro.title': 'Профессиональные услуги разработки',
    'services.software.intro.description1': 'Наша команда специализируется на создании высококачественного программного обеспечения и веб-приложений, которые решают конкретные бизнес-задачи.',
    'services.software.intro.description2': 'Мы следуем лучшим отраслевым практикам и используем современные технологии для создания надежных, безопасных и масштабируемых решений.',
    'services.software.services': 'Наши услуги разработки',
    'services.software.benefitsTitle': 'Преимущества работы с нами',
    'services.software.processTitle': 'Наш процесс разработки',
    
    'services.software.custom.title': 'Разработка индивидуального ПО',
    'services.software.custom.description': 'Мы создаем индивидуальные программные решения, которые решают ваши уникальные бизнес-задачи и оптимизируют рабочие процессы.',
    
    'services.software.web.title': 'Веб-приложения',
    'services.software.web.description': 'Современные, адаптивные веб-приложения с интуитивно понятным интерфейсом, работающие на всех устройствах и браузерах.',
    
    'services.software.database.title': 'Разработка баз данных',
    'services.software.database.description': 'Эффективный дизайн и разработка баз данных для безопасного хранения, управления и анализа ваших бизнес-данных.',
    
    'services.software.security.title': 'Решения безопасности',
    'services.software.security.description': 'Внедрение надежных мер безопасности для защиты ваших данных и приложений от угроз.',
    
    'services.software.integration.title': 'Системная интеграция',
    'services.software.integration.description': 'Безупречная интеграция вашего программного обеспечения с сторонними сервисами, API и существующими системами.',
    
    'services.software.benefits.quality.title': 'Высококачественный код',
    'services.software.benefits.quality.description': 'Наши разработчики следуют лучшим практикам, чтобы обеспечить надежность, поддерживаемость и безопасность вашего ПО.',
    
    'services.software.benefits.scalable.title': 'Масштабируемые решения',
    'services.software.benefits.scalable.description': 'Мы разрабатываем с прицелом на будущее, создавая системы, которые могут расти вместе с вашим бизнесом.',
    
    'services.software.benefits.support.title': 'Постоянная поддержка',
    'services.software.benefits.support.description': 'Наша команда обеспечивает непрерывное обслуживание и поддержку для бесперебойной работы вашего ПО.',
    
    'services.software.benefits.time.title': 'Своевременная доставка',
    'services.software.benefits.time.description': 'Мы придерживаемся согласованных сроков и держим вас в курсе на протяжении всего процесса разработки.',
    
    'services.software.process.step1.title': 'Анализ требований',
    'services.software.process.step1.description': 'Мы тесно сотрудничаем с вами для понимания потребностей вашего бизнеса и определения четких требований к проекту.',
    
    'services.software.process.step2.title': 'Проектирование и планирование',
    'services.software.process.step2.description': 'Наша команда создает детальный дизайн и план разработки, включая технологический стек и архитектуру.',
    
    'services.software.process.step3.title': 'Разработка',
    'services.software.process.step3.description': 'Мы следуем гибким методологиям, создавая ваше ПО постепенно с регулярными циклами обратной связи.',
    
    'services.software.process.step4.title': 'Тестирование и контроль качества',
    'services.software.process.step4.description': 'Комплексное тестирование гарантирует, что ваше ПО идеально работает во всех сценариях и средах.',
    
    'services.software.process.step5.title': 'Внедрение и поддержка',
    'services.software.process.step5.description': 'Мы заботимся о процессе внедрения и предоставляем услуги по постоянному обслуживанию и поддержке.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'ru');

  React.useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const t = (key: string): string => {
    const translated = translations[language][key];
    if (!translated) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }
    return translated;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
