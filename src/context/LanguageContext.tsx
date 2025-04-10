import React, { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';

// ============================================================
// Типы и интерфейсы
// ============================================================
export type Language = 'ru' | 'en';

type Translations = typeof translations.ru & typeof translations.en;
type TranslationKey = keyof Translations;

interface LanguageContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

// ============================================================
// Переводы
// ============================================================
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
    'hero.titleHighlight': 'автоматизацию',
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
    'clients.subtitle': 'Нам доверяют компании из различных отраслей',
    
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
    'footer.address': 'г. Москва, Б. Новодмитровская ул., 36 ст1',
	
    // Inside the 'ru' object in translations:
    'about.title': 'О нас',
    'about.subtitle': 'Создаем решения для вашего успеха',
    'about.description': 'Мы — команда профессионалов, специализирующаяся на автоматизации бизнес-процессов и разработке IT-решений. Наш опыт позволяет решать задачи любой сложности.',
    'about.joinTeam': 'Присоединиться к команде',
    'about.contactUs': 'Связаться с нами',

    // Values Section
    'about.values.title': 'Наши Ценности',
    'about.values.v1.title': 'Инновации',
    'about.values.v1.description': 'Мы постоянно исследуем новые технологии, чтобы предлагать передовые решения.',
    'about.values.v2.title': 'Клиентоориентированность',
    'about.values.v2.description': 'Ваши потребности — наш главный приоритет.',
    'about.values.v3.title': 'Надежность',
    'about.values.v3.description': 'Гарантируем стабильность и безопасность всех решений.',

    // Team Section
    'about.team.title': 'Наша Команда',
    'about.team.subtitle': 'Профессионалы с опытом в международных проектах',
    'about.team.member1.name': 'Алексей Петров',
    'about.team.member1.position': 'CTO',
    'about.team.member1.bio': 'Эксперт в области IT-архитектуры и автоматизации.',
    'about.team.member2.name': 'Мария Сидорова',
    'about.team.member2.position': 'Team Lead',
    'about.team.member2.bio': 'Специалист по разработке ПО и управлению проектами.',
    'about.team.member3.name': 'Иван Иванов',
    'about.team.member3.position': 'DevOps Engineer',
    'about.team.member3.bio': 'Обеспечивает бесперебойную работу инфраструктуры.',
    'about.seeAllTeam': 'Вся команда',

    // Milestones Section
    'about.milestones.title': 'Наша История',
    'about.milestones.subtitle': 'Ключевые этапы развития компании',
    'about.milestones.m1.title': 'Основание компании',
    'about.milestones.m1.description': 'Начали с небольших проектов по автоматизации.',
    'about.milestones.m2.title': 'Первый международный проект',
    'about.milestones.m2.description': 'Сотрудничество с компанией из Европы.',
    'about.milestones.m3.title': 'Расширение команды',
    'about.milestones.m3.description': 'Команда выросла до 50 специалистов.',
    'about.milestones.m4.title': 'Запуск R&D отдела',
    'about.milestones.m4.description': 'Начали разработку собственных решений.',
    'about.milestones.m5.title': '500+ завершенных проектов',
    'about.milestones.m5.description': 'Достигли значимых результатов для клиентов.',

    // Locations Section
    'about.locations.title': 'Наши Офисы',
    'about.locations.subtitle': 'Мы работаем по всему миру',
    'about.locations.moscow.title': 'Москва',
    'about.locations.moscow.address': 'ул. Тверская, 18',
    'about.locations.spb.title': 'Санкт-Петербург',
    'about.locations.spb.address': 'Невский проспект, 45',
    'about.locations.kazan.title': 'Казань',
    'about.locations.kazan.address': 'ул. Баумана, 7',
    'about.locations.directions': 'Проложить маршрут',
    
    // В разделе 'ru' translations:
    'cases.title': 'Примеры работ',
    'cases.subtitle': 'и наши достижения',
    'cases.results': 'Результат',
    'cases.case1.title': 'Корпоративный сайт для компании "MVT"',
    'cases.case1.client': 'Интернет-магазин',
    'cases.case1.industry': 'Веб-платформа для технологической компании',
    'cases.case1.duration': '6 месяцев',
    'cases.case1.description': 'Разработка современного сайта с интеграцией 1С, автоматизацией клиентского взаимодействия и улучшенным управлением контентом.',
    'cases.case1.results': 'Увеличение конверсии на 40%, сокращение времени обработки заявок на 60%',

    'cases.case2.title': 'Сайт доставки еды "С огоньком!"',
    'cases.case2.client': 'Кафе',
    'cases.case2.industry': 'Ресторанный бизнес',
    'cases.case2.duration': '4 месяца',
    'cases.case2.description': 'Создание платформы с онлайн-меню, системой бронирования и интеграцией с курьерскими службами.',
    'cases.case2.results': 'Рост онлайн-заказов на 200%, снижение нагрузки на персонал',

    'cases.case3.title': 'Сайт для хостела "Nayan-Navaa"',
    'cases.case3.client': 'Гостиница-хостел',
    'cases.case3.industry': 'Туризм и гостеприимство',
    'cases.case3.duration': '3 месяца',
    'cases.case3.description': 'Автоматизация бронирования, система управления номерами и онлайн-оплата.',
    'cases.case3.results': 'Увеличение заполняемости на 75%, сокращение ручной работы на 90%',

    'cases.case4.title': 'Телеграм бот доставки еды',
    'cases.case4.client': 'Кафе',
    'cases.case4.industry': 'Ресторанный бизнес',
    'cases.case4.duration': '2 месяца',
    'cases.case4.description': 'ИИ-ассистент для обработки заказов, интеграция с кухней и системой лояльности.',
    'cases.case4.results': 'Увеличение повторных заказов на 150%, 24/7 доступность',

    // В разделе 'ru' testimonials:
    'testimonials.title': 'Отзывы',
    'testimonials.subtitle': 'о нашей работе',

    'testimonials.client1.text': 'Сайт стал важным инструментом для нашего кафе. Онлайн-заказы выросли на 80%, а интеграция с курьерскими службами упростила логистику. Работали строго по срокам — реализовали проект за 4 месяца.',
    'testimonials.client1.name': 'Цыцык',
    'testimonials.client1.position': 'Владелец',
    'testimonials.client1.company': 'Кафе "С огоньком!"',

    'testimonials.client2.text': 'Автоматизация бронирования помогла оптимизировать рабочие процессы. Заполняемость улучшилась на 50%, а ручные операции сократились примерно на 70%. Решение полностью соответствует нашим потребностям.',
    'testimonials.client2.name': 'Жигзыма',
    'testimonials.client2.position': 'Владелец',
    'testimonials.client2.company': 'Хостел "Nayan-Navaa"',

    'testimonials.client3.text': 'Телеграм-бот стабильно обрабатывает 15% заказов. Повторные обращения клиентов увеличились на 10%, что положительно сказалось на выручке. Простая интеграция с существующей системой.',
    'testimonials.client3.name': 'Цыцык',
    'testimonials.client3.position': 'Владелец',
    'testimonials.client3.company': 'Кафе "С огоньком!"',

    // В разделе 'ru' translations:
    'partners.descriptions.bitrix24': 'Полный набор бизнес-инструментов для совместной работы и CRM',
    'partners.descriptions.amoCRM': 'Ведущая платформа для ускорения продаж',
    'partners.descriptions.bnovo': 'Система управления гостиницами и отелями',
    'partners.descriptions.yandex': 'Облачные вычисления и API',
    'partners.descriptions.sweb': 'Облачные платформы по запросу',
    'partners.descriptions.yookassa': 'Онлайн-платежи и эквайринг',

    
    // В разделе 'ru' translations:
    'tariffs.title': 'Наши тарифы',
    'tariffs.subtitle': 'Выберите подходящий вариант для вашего бизнеса',
    'tariffs.popular': 'Популярный',
    'tariffs.select': 'Выбрать',
    'tariffs.customText': 'Нужен индивидуальный тариф?',
    'tariffs.contactUs': 'Связаться с нами',

    // Новые тарифы
    'tariffs.basic.name': 'Разработка сайтов и мобильных приложений',
    'tariffs.basic.price': 'от 30 000 ₽',
    'tariffs.basic.description': 'Для тех, кто хочет приложение и сайт',
    'tariffs.basic.feature1': 'СОЗДАНИЕ ПРОТОТИПОВ',
    'tariffs.basic.feature2': 'АНАЛИЗ ТРЕБОВАНИЙ, СОЗДАНИЕ ТЕХНИЧЕСКОГО ЗАДАНИЯ',
    'tariffs.basic.feature3': 'ПРОГРАММИРОВАНИЕ НА IOS/ANDROID',
    'tariffs.basic.feature4': 'СКВОЗНОЕ ТЕСТИРОВАНИЕ',

    'tariffs.standard.name': 'FoodFlow AI',
    'tariffs.standard.price': 'от 4000 ₽/мес',
    'tariffs.standard.description': 'Для тех, кто хочет автоматизировать работу с заказами в кафе и ресторанах',
    'tariffs.standard.feature1': 'СОЗДАНИЕ САЙТА НА ДОСТАВКУ И САМОВЫВОЗ',
    'tariffs.standard.feature2': 'TELEGRAM ЧАТ БОТЫ С ИИ-АССИСТЕНТОМ ДЛЯ ЗАКАЗОВ',
    'tariffs.standard.feature3': 'ИНТЕГРАЦИЯ С POS-СИСТЕМАМИ (iiko, СБИС, R-Keeper)',
    'tariffs.standard.feature4': 'ПРОГРАММЫ ЛОЯЛЬНОСТИ И ПРОМОАКЦИИ',
    'tariffs.standard.feature5': 'ПОДКЛЮЧЕНИЕ ЭКВАЙРИНГА И ДР.',

    'tariffs.premium.name': 'Внедрение CRM',
    'tariffs.premium.price': 'от 45 000 ₽',
    'tariffs.premium.description': 'Для тех, кто хочет упорядочить свое взаимодействие с клиентами',
    'tariffs.premium.feature1': 'ПОДБОР CRM',
    'tariffs.premium.feature2': 'АУДИТ И КАРТИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ',
    'tariffs.premium.feature3': 'НАСТРОЙКА CRM',
    'tariffs.premium.feature4': 'ИНТЕГРАЦИЯ CRM С ВНЕШНИМИ СИСТЕМАМИ',
    'tariffs.premium.feature5': 'ОБУЧЕНИЕ СОТРУДНИКОВ',

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
    'clients.subtitle': 'Trusted by companies across various industries',
    
    // Partners Section
    'partners.title': 'Our Partners',
    'partners.subtitle': 'We collaborate with several industries to bring you the best solutions.',
    
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
    'footer.address': 'Moscow, B.Novodmitrovskaya Str., 36 bld 1',
	
    // Inside the 'en' object in translations:
    'about.title': 'About Us',
    'about.subtitle': 'Building Solutions for Your Success',
    'about.description': 'We are a team of professionals specializing in business process automation and IT solutions. Our experience allows us to tackle projects of any complexity.',
    'about.joinTeam': 'Join the Team',
    'about.contactUs': 'Contact Us',

    // Values Section
    'about.values.title': 'Our Values',
    'about.values.v1.title': 'Innovation',
    'about.values.v1.description': 'We constantly explore new technologies to deliver cutting-edge solutions.',
    'about.values.v2.title': 'Customer Focus',
    'about.values.v2.description': 'Your needs are our top priority.',
    'about.values.v3.title': 'Reliability',
    'about.values.v3.description': 'We guarantee stability and security for all solutions.',

    // Team Section
    'about.team.title': 'Our Team',
    'about.team.subtitle': 'Professionals with International Experience',
    'about.team.member1.name': 'Alexey Petrov',
    'about.team.member1.position': 'CTO',
    'about.team.member1.bio': 'Expert in IT architecture and automation.',
    'about.team.member2.name': 'Maria Sidorova',
    'about.team.member2.position': 'Team Lead',
    'about.team.member2.bio': 'Specialist in software development and project management.',
    'about.team.member3.name': 'Ivan Ivanov',
    'about.team.member3.position': 'DevOps Engineer',
    'about.team.member3.bio': 'Ensures seamless infrastructure operations.',
    'about.seeAllTeam': 'View All Team',

    // Milestones Section
    'about.milestones.title': 'Our History',
    'about.milestones.subtitle': 'Key Milestones',
    'about.milestones.m1.title': 'Company Foundation',
    'about.milestones.m1.description': 'Started with small automation projects.',
    'about.milestones.m2.title': 'First International Project',
    'about.milestones.m2.description': 'Collaboration with a European company.',
    'about.milestones.m3.title': 'Team Expansion',
    'about.milestones.m3.description': 'Grew to a team of 50 specialists.',
    'about.milestones.m4.title': 'R&D Department Launch',
    'about.milestones.m4.description': 'Began developing proprietary solutions.',
    'about.milestones.m5.title': '500+ Completed Projects',
    'about.milestones.m5.description': 'Delivered significant results for clients.',

    // Locations Section
    'about.locations.title': 'Our Offices',
    'about.locations.subtitle': 'We Work Worldwide',
    'about.locations.moscow.title': 'Moscow',
    'about.locations.moscow.address': 'Tverskaya St, 18',
    'about.locations.spb.title': 'Saint Petersburg',
    'about.locations.spb.address': 'Nevsky Prospect, 45',
    'about.locations.kazan.title': 'Kazan',
    'about.locations.kazan.address': 'Bauman St, 7',
    'about.locations.directions': 'Get Directions',
    
    // В разделе 'en' translations:
    'cases.title': 'Examples of work',
    'cases.subtitle': 'and our achievements',
    'cases.results': 'Results',
    'cases.case1.title': 'Corporate Website for "MVT" Company',
    'cases.case1.client': 'E-commerce',
    'cases.case1.industry': 'Tech Company Web Platform',
    'cases.case1.duration': '6 months',
    'cases.case1.description': 'Modern website development with 1C integration, customer interaction automation and enhanced content management.',
    'cases.case1.results': '40% conversion increase, 60% faster request processing',

    'cases.case2.title': 'Food Delivery Website "With Fire!"',
    'cases.case2.client': 'Cafe',
    'cases.case2.industry': 'Restaurant Business',
    'cases.case2.duration': '4 months',
    'cases.case2.description': 'Platform with online menu, reservation system and courier service integration.',
    'cases.case2.results': '200% order growth, reduced staff workload',

    'cases.case3.title': 'Hostel Website "Nayan-Navaa"',
    'cases.case3.client': 'Hostel',
    'cases.case3.industry': 'Tourism & Hospitality',
    'cases.case3.duration': '3 months',
    'cases.case3.description': 'Booking automation, room management system and online payments.',
    'cases.case3.results': '75% occupancy growth, 90% less manual work',

    'cases.case4.title': 'Telegram Food Delivery Bot',
    'cases.case4.client': 'Cafe',
    'cases.case4.industry': 'Restaurant Business',
    'cases.case4.duration': '2 months',
    'cases.case4.description': 'AI-powered order processing with kitchen integration and loyalty system.',
    'cases.case4.results': '150% repeat orders growth, 24/7 availability',

      // В разделе 'en' testimonials:
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'about us',
    
    'testimonials.client1.text': 'The website became a crucial tool for our cafe. Online orders grew by 80%, and courier service integration simplified logistics. Completed strictly on schedule — implemented in 4 months.',
    'testimonials.client1.name': 'Tsytsyk',
    'testimonials.client1.position': 'Owner',
    'testimonials.client1.company': '"With Fire!" Cafe',

    'testimonials.client2.text': 'Booking automation helped optimize our workflows. Occupancy improved by 50%, and manual operations decreased by approximately 70%. The solution fully meets our needs.',
    'testimonials.client2.name': 'Zhygzyma',
    'testimonials.client2.position': 'Owner',
    'testimonials.client2.company': 'Nayan-Navaa Hostel',

    'testimonials.client3.text': 'The Telegram bot consistently handles 15% of orders. Repeat customer interactions increased by 10%, positively impacting revenue. Seamless integration with existing systems.',
    'testimonials.client3.name': 'Tsytsyk',
    'testimonials.client3.position': 'Operations Manager',
    'testimonials.client3.company': '"With Fire!" Cafe',

      // В разделе 'en' translations:
    'partners.descriptions.bitrix24': 'A complete suite of business tools for collaboration and CRM',
    'partners.descriptions.amoCRM': 'Leading sales acceleration platform',
    'partners.descriptions.bnovo': 'Property Management System',
    'partners.descriptions.yandex': 'Cloud computing services and APIs',
    'partners.descriptions.sweb': 'On-demand cloud computing platforms',
    'partners.descriptions.yookassa': 'Online payments and acquiring',

    // В разделе 'en' translations:
    'tariffs.title': 'Our Tariffs',
    'tariffs.subtitle': 'Choose the right option for your business',
    'tariffs.popular': 'Popular',
    'tariffs.select': 'Select',
    'tariffs.customText': 'Need a custom tariff?',
    'tariffs.contactUs': 'Contact Us',

    // Новые тарифы
    'tariffs.basic.name': 'Website and Mobile App Development',
    'tariffs.basic.price': 'from 50,000 RUB',
    'tariffs.basic.description': 'For those who want an app and a website',
    'tariffs.basic.feature1': 'PROTOTYPE CREATION',
    'tariffs.basic.feature2': 'REQUIREMENTS ANALYSIS, TECHNICAL SPECIFICATION',
    'tariffs.basic.feature3': 'IOS/ANDROID PROGRAMMING',
    'tariffs.basic.feature4': 'END-TO-END TESTING',

    'tariffs.standard.name': 'FoodFlow AI',
    'tariffs.standard.price': 'from 4,000 RUB/month',
    'tariffs.standard.description': 'For those who want to automate orders in cafes and restaurants',
    'tariffs.standard.feature1': 'DELIVERY AND PICKUP WEBSITE',
    'tariffs.standard.feature2': 'TELEGRAM CHAT BOTS WITH AI ASSISTANT FOR ORDERS',
    'tariffs.standard.feature3': 'INTEGRATION WITH POS SYSTEMS (iiko, SBIS, R-Keeper)',
    'tariffs.standard.feature4': 'LOYALTY PROGRAMS AND PROMOTIONS',
    'tariffs.standard.feature5': 'PAYMENT GATEWAY CONNECTION ETC.',

    'tariffs.premium.name': 'CRM Implementation',
    'tariffs.premium.price': 'from 50,000 RUB',
    'tariffs.premium.description': 'For those who want to organize customer interactions',
    'tariffs.premium.feature1': 'CRM SELECTION',
    'tariffs.premium.feature2': 'BUSINESS PROCESS AUDIT AND MAPPING',
    'tariffs.premium.feature3': 'CRM CONFIGURATION',
    'tariffs.premium.feature4': 'CRM INTEGRATION WITH EXTERNAL SYSTEMS',
    'tariffs.premium.feature5': 'STAFF TRAINING',

  }
} as const;

// ============================================================
// Контекст
// ============================================================
const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

// ============================================================
// Провайдер
// ============================================================
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    // SSR-безопасная инициализация
    if (typeof window === 'undefined') return 'ru';
    
    // Приоритет: localStorage → язык браузера → ru по умолчанию
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'ru') return savedLang;
    
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'ru';
  });

  // Синхронизация с localStorage
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Мемоизация контекста
  const contextValue = useMemo(() => ({
    lang,
    setLanguage: (language: Language) => setLang(language),
    t: (key: TranslationKey) => {
      const translation = translations[lang][key];
      return translation || `[${key}]`;
    }
  }), [lang]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// ============================================================
// Хук использования
// ============================================================
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider. ' +
      'Wrap your application with <LanguageProvider> at the root level.'
    );
  }
  
  return context;
};