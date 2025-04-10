import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
const languages = ['ru', 'en'] as const;
type Language = typeof languages[number];

// Russian translations
const ru = {
  nav: {
    services: 'Услуги',
    partners: 'Партнеры',
    clients: 'Клиенты',
    benefits: 'Преимущества',
    tariffs: 'Тарифы',
    cases: 'Кейсы',
    testimonials: 'Отзывы',
    about: 'О нас',
    contact: 'Контакты',
    quote: 'Получить предложение',
    tariffMenu: {
      crm: 'Внедрение CRM',
      restaurant: 'Решения для ресторанов',
      hotel: 'Решения для гостиниц',
      custom: 'Заказная разработка'
    }
  },
  hero: {
    title: 'Automagica Solutions',
    subtitle: 'Автоматизация бизнес-процессов',
    desc: 'Мы помогаем компаниям автоматизировать рутинные процессы, повышать эффективность и сокращать расходы с помощью современных IT-решений.',
    cta: 'Заказать консультацию',
    learnMore: 'Узнать больше',
  },
  services: {
    title: 'Наши услуги',
    subtitle: 'Мы предлагаем полный спектр услуг для автоматизации и цифровизации вашего бизнеса',
    crmImplementation: {
      title: 'Внедрение CRM',
      desc: 'Настройка и внедрение CRM-систем для автоматизации продаж и маркетинга',
    },
    customSoftware: {
      title: 'Разработка ПО',
      desc: 'Создание индивидуальных программных решений под ваши бизнес-задачи',
    },
    mobileApps: {
      title: 'Мобильные приложения',
      desc: 'Разработка нативных и кросс-платформенных мобильных приложений',
    },
    itConsulting: {
      title: 'IT-консалтинг',
      desc: 'Анализ бизнес-процессов и рекомендации по оптимизации IT-инфраструктуры',
    },
  },
  partners: {
    title: 'Наши партнеры',
    subtitle: 'Мы работаем с лучшими технологическими платформами для создания оптимальных решений',
  },
  clients: {
    title: 'Наши клиенты',
    subtitle: 'Компании, которые доверили нам автоматизацию своих бизнес-процессов',
  },
  benefits: {
    title: 'Почему выбирают нас',
    subtitle: 'Наши ключевые преимущества и подход к работе',
    expertise: {
      title: 'Экспертиза',
      desc: 'Опытная команда с глубокими техническими знаниями и отраслевой экспертизой',
    },
    quality: {
      title: 'Качество',
      desc: 'Строгий контроль качества и тестирование на всех этапах разработки',
    },
    support: {
      title: 'Поддержка',
      desc: 'Оперативная техническая поддержка и сопровождение внедренных решений',
    },
    innovation: {
      title: 'Инновации',
      desc: 'Использование современных технологий и инновационных подходов',
    },
  },
  cta: {
    title: 'Готовы начать?',
    subtitle: 'Закажите бесплатную консультацию прямо сейчас',
    button: 'Связаться с нами',
  },
  contact: {
    title: 'Свяжитесь с нами',
    subtitle: 'Заполните форму, и мы свяжемся с вами в ближайшее время',
    name: 'Имя',
    email: 'Email',
    phone: 'Телефон',
    message: 'Сообщение',
    submit: 'Отправить',
    namePlaceholder: 'Ваше имя',
    emailPlaceholder: 'Ваш email',
    phonePlaceholder: 'Ваш телефон',
    messagePlaceholder: 'Ваше сообщение...',
    success: 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
    error: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
  },
  footer: {
    services: 'Услуги',
    crmImplementation: 'Внедрение CRM',
    customSoftware: 'Разработка ПО',
    mobileApps: 'Мобильные приложения',
    itConsulting: 'IT-консалтинг',
    company: 'Компания',
    about: 'О нас',
    team: 'Команда',
    careers: 'Карьера',
    blog: 'Блог',
    legal: 'Правовая информация',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    copyright: '© 2023 Automagica Solutions. Все права защищены.',
    contact: 'Контакты',
    address: 'г. Улан-Удэ, Россия',
    emailContact: 'info@automagica.ru',
    phone: '+7 (999) 123-45-67',
  },
  tariffs: {
    title: 'Наши тарифы',
    subtitle: 'Выберите оптимальный тариф для ваших бизнес-задач',
    popular: 'Популярный',
    select: 'Выбрать тариф',
    customText: 'Нужно индивидуальное решение?',
    contactUs: 'Свяжитесь с нами',

    basic: {
      name: 'Базовый',
      price: '50 000 ₽',
      description: 'Идеально для малого бизнеса и стартапов',
      feature1: 'Базовая настройка CRM',
      feature2: 'Импорт данных',
      feature3: 'Обучение сотрудников (2 часа)',
      feature4: 'Техническая поддержка 5/2'
    },
    standard: {
      name: 'Стандарт',
      price: '100 000 ₽',
      description: 'Оптимальное решение для среднего бизнеса',
      feature1: 'Расширенная настройка CRM',
      feature2: 'Интеграция с 3 системами',
      feature3: 'Импорт и структурирование данных',
      feature4: 'Обучение сотрудников (5 часов)',
      feature5: 'Техническая поддержка 7/2'
    },
    premium: {
      name: 'Премиум',
      price: '200 000 ₽',
      description: 'Комплексное решение для крупного бизнеса',
      feature1: 'Полная настройка CRM под ваши бизнес-процессы',
      feature2: 'Интеграция с неограниченным количеством систем',
      feature3: 'Миграция и очистка данных',
      feature4: 'Обучение сотрудников (10 часов)',
      feature5: 'Премиум поддержка 24/7'
    },
    
    // CRM Tariffs
    crm: {
      title: 'Внедрение CRM',
      subtitle: 'Автоматизируйте взаимодействие с клиентами с помощью современных CRM-систем',
      basic: {
        name: 'Базовый',
        price: '50 000 ₽',
        description: 'Идеально для малого бизнеса и стартапов',
        feature1: 'Базовая настройка CRM',
        feature2: 'Импорт данных',
        feature3: 'Обучение сотрудников (2 часа)',
        feature4: 'Техническая поддержка 5/2'
      },
      standard: {
        name: 'Стандарт',
        price: '100 000 ₽',
        description: 'Оптимальное решение для среднего бизнеса',
        feature1: 'Расширенная настройка CRM',
        feature2: 'Интеграция с 3 системами',
        feature3: 'Импорт и структурирование данных',
        feature4: 'Обучение сотрудников (5 часов)',
        feature5: 'Техническая поддержка 7/2'
      },
      premium: {
        name: 'Премиум',
        price: '200 000 ₽',
        description: 'Комплексное решение для крупного бизнеса',
        feature1: 'Полная настройка CRM под ваши бизнес-процессы',
        feature2: 'Интеграция с неограниченным количеством систем',
        feature3: 'Миграция и очистка данных',
        feature4: 'Обучение сотрудников (10 часов)',
        feature5: 'Премиум поддержка 24/7'
      }
    },
    
    // Restaurant Tariffs
    restaurant: {
      title: 'Решения для ресторанов',
      subtitle: 'Комплексная автоматизация ресторанного бизнеса',
      basic: {
        name: 'Базовый',
        price: '70 000 ₽',
        description: 'Идеально для небольших кафе и баров',
        feature1: 'Автоматизация приема заказов',
        feature2: 'Управление меню',
        feature3: 'Базовая аналитика продаж',
        feature4: 'Техническая поддержка 5/2'
      },
      standard: {
        name: 'Стандарт',
        price: '150 000 ₽',
        description: 'Оптимальное решение для ресторанов среднего размера',
        feature1: 'Все функции базового тарифа',
        feature2: 'Управление запасами и закупками',
        feature3: 'Интеграция с бухгалтерией',
        feature4: 'Система лояльности клиентов',
        feature5: 'Техническая поддержка 7/2'
      },
      premium: {
        name: 'Премиум',
        price: '250 000 ₽',
        description: 'Комплексное решение для сети ресторанов',
        feature1: 'Все функции стандартного тарифа',
        feature2: 'Управление несколькими заведениями',
        feature3: 'Расширенная аналитика и отчетность',
        feature4: 'Интеграция с внешними системами доставки',
        feature5: 'Премиум поддержка 24/7'
      }
    },
    
    // Hotel Tariffs
    hotel: {
      title: 'Решения для гостиниц',
      subtitle: 'Автоматизация гостиничного бизнеса для любого масштаба',
      basic: {
        name: 'Базовый',
        price: '80 000 ₽',
        description: 'Идеально для мини-отелей и хостелов',
        feature1: 'Управление бронированиями',
        feature2: 'Календарь занятости номеров',
        feature3: 'Базовая отчетность',
        feature4: 'Техническая поддержка 5/2'
      },
      standard: {
        name: 'Стандарт',
        price: '180 000 ₽',
        description: 'Оптимальное решение для отелей среднего размера',
        feature1: 'Все функции базового тарифа',
        feature2: 'Интеграция с платежными системами',
        feature3: 'Система управления уборкой',
        feature4: 'Модуль для работы с туроператорами',
        feature5: 'Техническая поддержка 7/2'
      },
      premium: {
        name: 'Премиум',
        price: '300 000 ₽',
        description: 'Комплексное решение для гостиничных сетей',
        feature1: 'Все функции стандартного тарифа',
        feature2: 'Управление несколькими объектами',
        feature3: 'Расширенная аналитика и отчетность',
        feature4: 'Интеграция с глобальными системами бронирования',
        feature5: 'Премиум поддержка 24/7'
      }
    },
    
    // Custom Development Tariffs
    custom: {
      title: 'Заказная разработка',
      subtitle: 'Индивидуальные программные решения для ваших уникальных задач',
      basic: {
        name: 'Стартовый',
        price: 'от 150 000 ₽',
        description: 'Для небольших проектов с базовым функционалом',
        feature1: 'Анализ требований',
        feature2: 'Прототипирование интерфейса',
        feature3: 'Разработка MVP',
        feature4: 'Базовое тестирование'
      },
      standard: {
        name: 'Бизнес',
        price: 'от 300 000 ₽',
        description: 'Для средних проектов с расширенным функционалом',
        feature1: 'Детальный анализ требований',
        feature2: 'UX/UI дизайн',
        feature3: 'Полноценная разработка',
        feature4: 'Комплексное тестирование',
        feature5: 'Сопровождение после запуска (3 месяца)'
      },
      premium: {
        name: 'Энтерпрайз',
        price: 'от 500 000 ₽',
        description: 'Для сложных корпоративных проектов',
        feature1: 'Глубокий бизнес-анализ',
        feature2: 'Проектирование архитектуры',
        feature3: 'Разработка высоконагруженных систем',
        feature4: 'Многоуровневое тестирование',
        feature5: 'Расширенная техническая поддержка'
      }
    }
  },
  testimonials: {
    title: 'Отзывы наших клиентов',
    subtitle: 'Узнайте, что говорят о нас те, кто уже работал с нами',
    client1: {
      name: 'Анна Цыренова',
      position: 'Директор',
      company: 'Кафе «С огоньком!»',
      text: 'Мы познакомились прошлым летом, когда создавали с нуля сайт для кафе «С огоньком!» в поселке Агинское. С тех пор наше сотрудничество продолжается. Мне очень нравится, потому что это профессионалы в своем деле, всё делается быстро, без лишних вопросов и проблем. Я искренне благодарна за качественную работу и оперативное решение любых вопросов — будь то доработки сайта или консультации по другим техническим моментам. С Бадара легко и комфортно сотрудничать, поэтому я всегда обращаюсь именно к нему. Большое спасибо за отличную работу!'
    },
    client2: {
      name: 'Дмитрий Иванов',
      position: 'CEO',
      company: 'ТехноПром',
      text: 'Сотрудничаем с Automagica Solutions уже более года. За это время нам внедрили CRM-систему и интегрировали ее с нашим сайтом и телефонией. Результат превзошел ожидания — продажи выросли на 35%, а время обработки заявок сократилось втрое. Отдельно хочу отметить профессионализм команды и готовность оперативно решать возникающие вопросы.'
    },
    client3: {
      name: 'Сергей и Марина',
      position: 'Владельцы',
      company: 'Гостевой дом «Байкал»',
      text: 'Спасибо Вашей команде за крутой проект нашего сайта! Для нас с Мариной это был первый опыт, многое было непонятно и сложно, поэтому благодарим за терпение и понимание! Желаем дальнейших успехов! Пусть Ваши планы успешно реализуются!✊✊✊'
    }
  },
  about: {
    title: 'О нас',
    subtitle: 'Мы помогаем бизнесу становиться эффективнее с помощью современных технологий',
    mission: {
      title: 'Наша миссия',
      desc: 'Делать технологии доступными и полезными для бизнеса любого масштаба, помогая компаниям развиваться и достигать новых высот.'
    },
    vision: {
      title: 'Наше видение',
      desc: 'Стать ведущей компанией в сфере автоматизации бизнес-процессов, создавая инновационные решения, которые меняют подход к ведению бизнеса.'
    },
    values: {
      title: 'Наши ценности',
      quality: 'Качество во всем, что мы делаем',
      innovation: 'Инновационность и постоянное развитие',
      client: 'Клиентоориентированность и индивидуальный подход',
      transparency: 'Прозрачность и честность в работе'
    },
    team: {
      title: 'Наша команда',
      desc: 'За каждым успешным проектом стоит команда профессионалов',
      ceo: {
        name: 'Александр Петров',
        position: 'CEO',
        bio: 'Более 15 лет опыта в IT-индустрии. Руководил проектами для крупнейших российских компаний.'
      },
      cto: {
        name: 'Бадара Базаров',
        position: 'CTO',
        bio: '12 лет опыта в разработке. Эксперт в области архитектуры программных решений и автоматизации бизнес-процессов.'
      },
      lead: {
        name: 'Екатерина Смирнова',
        position: 'Lead Developer',
        bio: 'Опытный разработчик с глубокими знаниями в области веб-технологий и мобильной разработки.'
      }
    }
  },
  cases: {
    title: 'Наши кейсы',
    subtitle: 'Реальные примеры успешных проектов для наших клиентов',
    readMore: 'Подробнее',
    case1: {
      title: 'Автоматизация ресторанной сети',
      desc: 'Внедрение комплексной системы управления для сети из 5 ресторанов, включая автоматизацию склада, кухни и системы лояльности.',
      results: 'Увеличение оборота на 27%, сокращение издержек на 15%, повышение лояльности клиентов.'
    },
    case2: {
      title: 'CRM для строительной компании',
      desc: 'Разработка и внедрение CRM-системы с учетом специфики строительного бизнеса, интеграция с учетной системой и сайтом.',
      results: 'Сокращение цикла продаж на 30%, увеличение конверсии заявок в сделки на 24%.'
    },
    case3: {
      title: 'Мобильное приложение для службы доставки',
      desc: 'Создание нативного мобильного приложения для iOS и Android для службы доставки еды с интеграцией платежных систем и CRM.',
      results: 'Более 10 000 скачиваний за первый месяц, рост заказов через приложение на 45%.'
    },
    case4: {
      title: 'Автоматизация гостиничного комплекса',
      desc: 'Внедрение системы управления гостиничным комплексом, включая модули бронирования, ресепшн, управления номерным фондом.',
      results: 'Увеличение загрузки на 18%, сокращение времени на обработку бронирований на 75%.'
    }
  },
  notFound: {
    title: 'Страница не найдена',
    message: 'Извините, запрашиваемая страница не существует.',
    backButton: 'Вернуться на главную'
  }
};

// English translations
const en = {
  nav: {
    services: 'Services',
    partners: 'Partners',
    clients: 'Clients',
    benefits: 'Benefits',
    tariffs: 'Pricing',
    cases: 'Cases',
    testimonials: 'Testimonials',
    about: 'About Us',
    contact: 'Contact',
    quote: 'Get a Quote',
    tariffMenu: {
      crm: 'CRM Implementation',
      restaurant: 'Restaurant Solutions',
      hotel: 'Hotel Solutions',
      custom: 'Custom Development'
    }
  },
  hero: {
    title: 'Automagica Solutions',
    subtitle: 'Business Process Automation',
    desc: 'We help companies automate routine processes, increase efficiency, and reduce costs through modern IT solutions.',
    cta: 'Request a Consultation',
    learnMore: 'Learn More',
  },
  services: {
    title: 'Our Services',
    subtitle: 'We offer a full range of services for automation and digitalization of your business',
    crmImplementation: {
      title: 'CRM Implementation',
      desc: 'Setup and implementation of CRM systems for sales and marketing automation',
    },
    customSoftware: {
      title: 'Software Development',
      desc: 'Creation of custom software solutions for your business needs',
    },
    mobileApps: {
      title: 'Mobile Applications',
      desc: 'Development of native and cross-platform mobile applications',
    },
    itConsulting: {
      title: 'IT Consulting',
      desc: 'Analysis of business processes and recommendations for optimizing IT infrastructure',
    },
  },
  partners: {
    title: 'Our Partners',
    subtitle: 'We work with the best technology platforms to create optimal solutions',
  },
  clients: {
    title: 'Our Clients',
    subtitle: 'Companies that have entrusted us with the automation of their business processes',
  },
  benefits: {
    title: 'Why Choose Us',
    subtitle: 'Our key advantages and approach to work',
    expertise: {
      title: 'Expertise',
      desc: 'Experienced team with deep technical knowledge and industry expertise',
    },
    quality: {
      title: 'Quality',
      desc: 'Strict quality control and testing at all stages of development',
    },
    support: {
      title: 'Support',
      desc: 'Prompt technical support and maintenance of implemented solutions',
    },
    innovation: {
      title: 'Innovation',
      desc: 'Use of modern technologies and innovative approaches',
    },
  },
  cta: {
    title: 'Ready to Start?',
    subtitle: 'Request a free consultation right now',
    button: 'Contact Us',
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Fill out the form and we will contact you as soon as possible',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    submit: 'Submit',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    phonePlaceholder: 'Your phone',
    messagePlaceholder: 'Your message...',
    success: 'Message sent! We will contact you shortly.',
    error: 'An error occurred while sending the message. Please try again.',
  },
  footer: {
    services: 'Services',
    crmImplementation: 'CRM Implementation',
    customSoftware: 'Software Development',
    mobileApps: 'Mobile Applications',
    itConsulting: 'IT Consulting',
    company: 'Company',
    about: 'About Us',
    team: 'Team',
    careers: 'Careers',
    blog: 'Blog',
    legal: 'Legal Information',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    copyright: '© 2023 Automagica Solutions. All rights reserved.',
    contact: 'Contact',
    address: 'Ulan-Ude, Russia',
    emailContact: 'info@automagica.ru',
    phone: '+7 (999) 123-45-67',
  },
  tariffs: {
    title: 'Our Pricing',
    subtitle: 'Choose the optimal plan for your business needs',
    popular: 'Popular',
    select: 'Select Plan',
    customText: 'Need a custom solution?',
    contactUs: 'Contact Us',

    basic: {
      name: 'Basic',
      price: '50,000 ₽',
      description: 'Perfect for small businesses and startups',
      feature1: 'Basic CRM setup',
      feature2: 'Data import',
      feature3: 'Employee training (2 hours)',
      feature4: 'Technical support 5/2'
    },
    standard: {
      name: 'Standard',
      price: '100,000 ₽',
      description: 'Optimal solution for medium-sized businesses',
      feature1: 'Advanced CRM setup',
      feature2: 'Integration with 3 systems',
      feature3: 'Import and structuring of data',
      feature4: 'Employee training (5 hours)',
      feature5: 'Technical support 7/2'
    },
    premium: {
      name: 'Premium',
      price: '200,000 ₽',
      description: 'Comprehensive solution for large businesses',
      feature1: 'Full CRM setup for your business processes',
      feature2: 'Integration with unlimited systems',
      feature3: 'Data migration and cleaning',
      feature4: 'Employee training (10 hours)',
      feature5: 'Premium support 24/7'
    },

    // CRM Tariffs
    crm: {
      title: 'CRM Implementation',
      subtitle: 'Automate customer interactions with modern CRM systems',
      basic: {
        name: 'Basic',
        price: '50,000 ₽',
        description: 'Perfect for small businesses and startups',
        feature1: 'Basic CRM setup',
        feature2: 'Data import',
        feature3: 'Employee training (2 hours)',
        feature4: 'Technical support 5/2'
      },
      standard: {
        name: 'Standard',
        price: '100,000 ₽',
        description: 'Optimal solution for medium-sized businesses',
        feature1: 'Advanced CRM setup',
        feature2: 'Integration with 3 systems',
        feature3: 'Import and structuring of data',
        feature4: 'Employee training (5 hours)',
        feature5: 'Technical support 7/2'
      },
      premium: {
        name: 'Premium',
        price: '200,000 ₽',
        description: 'Comprehensive solution for large businesses',
        feature1: 'Full CRM setup for your business processes',
        feature2: 'Integration with unlimited systems',
        feature3: 'Data migration and cleaning',
        feature4: 'Employee training (10 hours)',
        feature5: 'Premium support 24/7'
      }
    },
    
    // Restaurant Tariffs
    restaurant: {
      title: 'Restaurant Solutions',
      subtitle: 'Comprehensive automation for restaurant business',
      basic: {
        name: 'Basic',
        price: '70,000 ₽',
        description: 'Perfect for small cafes and bars',
        feature1: 'Order taking automation',
        feature2: 'Menu management',
        feature3: 'Basic sales analytics',
        feature4: 'Technical support 5/2'
      },
      standard: {
        name: 'Standard',
        price: '150,000 ₽',
        description: 'Optimal solution for medium-sized restaurants',
        feature1: 'All features of the Basic plan',
        feature2: 'Inventory and procurement management',
        feature3: 'Integration with accounting',
        feature4: 'Customer loyalty system',
        feature5: 'Technical support 7/2'
      },
      premium: {
        name: 'Premium',
        price: '250,000 ₽',
        description: 'Comprehensive solution for restaurant chains',
        feature1: 'All features of the Standard plan',
        feature2: 'Multi-location management',
        feature3: 'Advanced analytics and reporting',
        feature4: 'Integration with external delivery systems',
        feature5: 'Premium support 24/7'
      }
    },
    
    // Hotel Tariffs
    hotel: {
      title: 'Hotel Solutions',
      subtitle: 'Automation for hotel business of any scale',
      basic: {
        name: 'Basic',
        price: '80,000 ₽',
        description: 'Perfect for mini-hotels and hostels',
        feature1: 'Booking management',
        feature2: 'Room occupancy calendar',
        feature3: 'Basic reporting',
        feature4: 'Technical support 5/2'
      },
      standard: {
        name: 'Standard',
        price: '180,000 ₽',
        description: 'Optimal solution for medium-sized hotels',
        feature1: 'All features of the Basic plan',
        feature2: 'Integration with payment systems',
        feature3: 'Housekeeping management system',
        feature4: 'Tour operator module',
        feature5: 'Technical support 7/2'
      },
      premium: {
        name: 'Premium',
        price: '300,000 ₽',
        description: 'Comprehensive solution for hotel chains',
        feature1: 'All features of the Standard plan',
        feature2: 'Multi-property management',
        feature3: 'Advanced analytics and reporting',
        feature4: 'Integration with global reservation systems',
        feature5: 'Premium support 24/7'
      }
    },
    
    // Custom Development Tariffs
    custom: {
      title: 'Custom Development',
      subtitle: 'Individual software solutions for your unique tasks',
      basic: {
        name: 'Starter',
        price: 'from 150,000 ₽',
        description: 'For small projects with basic functionality',
        feature1: 'Requirements analysis',
        feature2: 'Interface prototyping',
        feature3: 'MVP development',
        feature4: 'Basic testing'
      },
      standard: {
        name: 'Business',
        price: 'from 300,000 ₽',
        description: 'For medium projects with extended functionality',
        feature1: 'Detailed requirements analysis',
        feature2: 'UX/UI design',
        feature3: 'Full development',
        feature4: 'Comprehensive testing',
        feature5: 'Post-launch support (3 months)'
      },
      premium: {
        name: 'Enterprise',
        price: 'from 500,000 ₽',
        description: 'For complex corporate projects',
        feature1: 'Deep business analysis',
        feature2: 'Architecture design',
        feature3: 'High-load systems development',
        feature4: 'Multi-level testing',
        feature5: 'Extended technical support'
      }
    }
  },
  testimonials: {
    title: 'Client Testimonials',
    subtitle: 'See what our clients say about working with us',
    client1: {
      name: 'Анна Цыренова',
      position: 'Директор',
      company: 'Кафе «С огоньком!»',
      text: 'Мы познакомились прошлым летом, когда создавали с нуля сайт для кафе «С огоньком!» в поселке Агинское. С тех пор наше сотрудничество продолжается. Мне очень нравится, потому что это профессионалы в своем деле, всё делается быстро, без лишних вопросов и проблем. Я искренне благодарна за качественную работу и оперативное решение любых вопросов — будь то доработки сайта или консультации по другим техническим моментам. С Бадара легко и комфортно сотрудничать, поэтому я всегда обращаюсь именно к нему. Большое спасибо за отличную работу!'
    },
    client2: {
      name: 'Дмитрий Иванов',
      position: 'CEO',
      company: 'ТехноПром',
      text: 'We have been working with Automagica Solutions for over a year. During this time, they implemented a CRM system for us and integrated it with our website and telephony. The result exceeded expectations - sales increased by 35%, and the time for processing applications was reduced by three times. I would like to separately note the professionalism of the team and their willingness to promptly resolve emerging issues.'
    },
    client3: {
      name: 'Сергей и Марина',
      position: 'Владельцы',
      company: 'Гостевой дом «Байкал»',
      text: 'Спасибо Вашей команде за крутой проект нашего сайта! Для нас с Мариной это был первый опыт, многое было непонятно и сложно, поэтому благодарим за терпение и понимание! Желаем дальнейших успехов! Пусть Ваши планы успешно реализуются!✊✊✊'
    }
  },
  about: {
    title: 'About Us',
    subtitle: 'We help businesses become more efficient through modern technology',
    mission: {
      title: 'Our Mission',
      desc: 'Make technology accessible and useful for businesses of any scale, helping companies grow and reach new heights.'
    },
    vision: {
      title: 'Our Vision',
      desc: 'Become a leading company in the field of business process automation, creating innovative solutions that change the approach to doing business.'
    },
    values: {
      title: 'Our Values',
      quality: 'Quality in everything we do',
      innovation: 'Innovation and continuous development',
      client: 'Client-oriented approach and individual solutions',
      transparency: 'Transparency and honesty in work'
    },
    team: {
      title: 'Our Team',
      desc: 'Behind every successful project is a team of professionals',
      ceo: {
        name: 'Alexander Petrov',
        position: 'CEO',
        bio: 'More than 15 years of experience in the IT industry. Led projects for major Russian companies.'
      },
      cto: {
        name: 'Badara Bazarov',
        position: 'CTO',
        bio: '12 years of development experience. Expert in software solution architecture and business process automation.'
      },
      lead: {
        name: 'Ekaterina Smirnova',
        position: 'Lead Developer',
        bio: 'Experienced developer with deep knowledge in web technologies and mobile development.'
      }
    }
  },
  cases: {
    title: 'Our Cases',
    subtitle: 'Real examples of successful projects for our clients',
    readMore: 'Read More',
    case1: {
      title: 'Restaurant Chain Automation',
      desc: 'Implementation of a comprehensive management system for a network of 5 restaurants, including warehouse automation, kitchen, and loyalty system.',
      results: 'Turnover increased by 27%, costs reduced by 15%, customer loyalty improved.'
    },
    case2: {
      title: 'CRM for Construction Company',
      desc: 'Development and implementation of a CRM system tailored to the specifics of the construction business, integration with accounting system and website.',
      results: 'Sales cycle reduced by 30%, conversion of leads to deals increased by 24%.'
    },
    case3: {
      title: 'Mobile App for Delivery Service',
      desc: 'Creation of a native mobile application for iOS and Android for a food delivery service with integration of payment systems and CRM.',
      results: 'More than 10,000 downloads in the first month, 45% growth in orders through the app.'
    },
    case4: {
      title: 'Hotel Complex Automation',
      desc: 'Implementation of a hotel management system, including booking modules, reception, and room fund management.',
      results: 'Occupancy increased by 18%, time for processing bookings reduced by 75%.'
    }
  },
  notFound: {
    title: 'Page Not Found',
    message: 'Sorry, the requested page does not exist.',
    backButton: 'Back to Home'
  }
};

// Create the language context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: '
