
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
    cases: 'Кейсы',
    testimonials: 'Отзывы',
    about: 'О нас',
    contact: 'Контакты',
    quote: 'Получить предложение',
    serviceMenu: {
      crm: 'Внедрение CRM',
      software: 'Разработка ПО и сайтов',
      mobile: 'Разработка мобильных приложений',
      restaurant: 'Решения для кафе и ресторанов',
      hotel: 'Решения для гостиниц',
      telegram: 'Telegram-бот PhotoExposer'
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
    crm: {
      title: 'Внедрение CRM',
      subtitle: 'Автоматизация взаимоотношений с клиентами для повышения продаж и лояльности',
      why: 'Почему внедрение CRM выгодно для вашего бизнеса?',
      whyDescription: 'CRM-система — это не просто программа для учета клиентов, а комплексное решение, которое помогает автоматизировать работу с клиентами, улучшить качество обслуживания и увеличить продажи.',
      expertise: 'Наша команда имеет многолетний опыт внедрения CRM-систем для бизнеса различного масштаба — от небольших компаний до крупных корпораций.',
      platforms: 'Мы работаем с ведущими CRM-системами',
      benefits: {
        title: 'Преимущества внедрения CRM',
        centralization: {
          title: 'Централизованное управление',
          description: 'Вся информация о клиентах, сделках и взаимодействиях хранится в одном месте и доступна всем сотрудникам в режиме реального времени.'
        },
        automation: {
          title: 'Автоматизация рутинных задач',
          description: 'CRM-система автоматизирует рутинные процессы, такие как отправка писем, напоминания о звонках, формирование отчетов и т.д.'
        },
        sales: {
          title: 'Увеличение продаж',
          description: 'Благодаря CRM вы не теряете потенциальных клиентов, отслеживаете все этапы сделки и повышаете конверсию.'
        },
        teamwork: {
          title: 'Улучшение командной работы',
          description: 'CRM-система упрощает взаимодействие между сотрудниками и отделами, делая работу более эффективной.'
        },
        scalability: {
          title: 'Гибкость и масштабируемость',
          description: 'CRM-система растет вместе с вашим бизнесом и адаптируется под изменяющиеся потребности.'
        }
      },
      learnMore: 'Узнать больше',
      bitrix24: {
        title: 'Внедрение CRM Битрикс24',
        subtitle: 'Комплексная автоматизация бизнес-процессов на платформе Битрикс24',
        why: 'Почему внедрение Битрикс24 выгодно для вашего бизнеса?',
        whyDescription: 'Битрикс24 — это мощная платформа, которая объединяет все бизнес-процессы вашей компании в одном месте. Она помогает оптимизировать работу, повышать эффективность сотрудников и улучшать качество обслуживания клиентов.',
        reasons: '5 причин для внедрения Битрикс24:'
      },
      amocrm: {
        title: 'Внедрение amoCRM',
        subtitle: 'Простая и эффективная CRM-система для управления продажами',
        why: 'Почему внедрение amoCRM выгодно для вашего бизнеса?',
        whyDescription: 'amoCRM — это интуитивно понятная CRM-система, специально разработанная для управления продажами. Она помогает менеджерам эффективно работать с клиентами, а руководителям — контролировать процесс продаж и анализировать результаты.',
        reasons: '5 причин для внедрения amoCRM:'
      }
    },
    software: {
      title: 'Разработка ПО и сайтов',
      subtitle: 'Создание индивидуальных программных решений и веб-сайтов любой сложности',
      approach: 'Наш подход к разработке',
      approachDescription: 'Мы разрабатываем программное обеспечение и веб-сайты, которые решают конкретные бизнес-задачи и приносят реальную пользу вашей компании.',
      expertise: 'Наши компетенции',
      webDev: {
        title: 'Веб-разработка',
        description: 'Создание современных, адаптивных и быстрых веб-сайтов и веб-приложений.'
      },
      desktop: {
        title: 'Десктоп-приложения',
        description: 'Разработка настольных приложений для Windows, macOS и Linux.'
      },
      backend: {
        title: 'Бэкенд-разработка',
        description: 'Создание надежной серверной инфраструктуры и API для ваших приложений.'
      },
      ecommerce: {
        title: 'Электронная коммерция',
        description: 'Разработка интернет-магазинов и систем онлайн-продаж.'
      },
      integration: {
        title: 'Интеграции',
        description: 'Подключение вашего ПО к внешним сервисам и API.'
      }
    },
    mobile: {
      title: 'Разработка мобильных приложений',
      subtitle: 'Создание мобильных приложений для iOS и Android',
      approach: 'Наш подход к разработке',
      approachDescription: 'Мы создаем мобильные приложения, которые не только выглядят стильно, но и обеспечивают высокую производительность и удобство использования.',
      collaboration: 'Работая с нами, вы получаете не только качественное мобильное приложение, но и надежного партнера, который поможет вам на всех этапах — от идеи до запуска и поддержки.',
      expertiseTitle: 'Наши компетенции',
      platforms: {
        ios: 'Разработка нативных приложений для iPhone и iPad с использованием Swift и iOS SDK.',
        android: 'Создание нативных приложений для Android-устройств с использованием Kotlin и Java.'
      },
      expertise: {
        cross: {
          title: 'Кросс-платформенная разработка',
          description: 'Создание приложений, работающих на iOS и Android с единой кодовой базой.'
        },
        native: {
          title: 'Нативная разработка',
          description: 'Разработка приложений, максимально использующих возможности устройств.'
        },
        integration: {
          title: 'Интеграция с API',
          description: 'Подключение приложений к внешним сервисам и системам.'
        },
        performance: {
          title: 'Оптимизация производительности',
          description: 'Создание быстрых и отзывчивых приложений, экономящих заряд батареи.'
        },
        security: {
          title: 'Безопасность',
          description: 'Защита данных пользователей с использованием современных методов шифрования.'
        }
      },
      cta: {
        title: 'Готовы создать мобильное приложение для вашего бизнеса?',
        description: 'Свяжитесь с нами, чтобы обсудить вашу идею и получить консультацию по разработке мобильного приложения.'
      }
    },
    restaurant: {
      title: 'Решения для кафе и ресторанов',
      subtitle: 'Комплексная автоматизация ресторанного бизнеса',
      challenges: 'Вызовы ресторанного бизнеса',
      challengesDescription: 'Современный ресторанный бизнес сталкивается с множеством вызовов: высокая конкуренция, необходимость контроля издержек, требовательные клиенты и быстро меняющиеся тренды.',
      solution: 'Мы предлагаем комплексные решения для автоматизации всех аспектов работы вашего заведения — от приема заказов и управления столиками до контроля запасов и аналитики продаж.',
      featuresTitle: 'Возможности наших решений',
      benefits: {
        title: 'Преимущества автоматизации',
        efficiency: 'Повышение операционной эффективности и скорости обслуживания',
        customer: 'Улучшение клиентского опыта и увеличение лояльности',
        costs: 'Снижение издержек и контроль расходов',
        insights: 'Аналитика и инсайты для принятия стратегических решений',
        competitive: 'Конкурентное преимущество на рынке'
      },
      features: {
        ordering: {
          title: 'Управление заказами',
          description: 'Удобная система приема и обработки заказов, интеграция с кухней и баром.'
        },
        reservation: {
          title: 'Бронирование столиков',
          description: 'Онлайн-система резервирования столиков, управление рассадкой гостей.'
        },
        analytics: {
          title: 'Аналитика и отчеты',
          description: 'Подробная статистика продаж, популярности блюд, загруженности заведения.'
        },
        payments: {
          title: 'Прием платежей',
          description: 'Интеграция с кассовыми аппаратами, поддержка различных способов оплаты.'
        },
        loyalty: {
          title: 'Программы лояльности',
          description: 'Управление скидками, акциями, бонусными программами для клиентов.'
        }
      }
    },
    hotel: {
      title: 'Решения для гостиниц',
      subtitle: 'Автоматизация гостиничного бизнеса для любого масштаба',
      challenges: 'Вызовы гостиничного бизнеса',
      challengesDescription: 'Гостиничный бизнес требует эффективного управления номерным фондом, организации работы персонала, контроля качества обслуживания и оптимизации загрузки.',
      solution: 'Мы предлагаем решения для автоматизации всех аспектов работы гостиницы — от бронирования номеров и регистрации гостей до управления персоналом и аналитики эффективности.',
      featuresTitle: 'Возможности наших решений',
      benefits: {
        title: 'Преимущества автоматизации',
        efficiency: 'Оптимизация рабочих процессов и повышение производительности персонала',
        experience: 'Улучшение качества обслуживания гостей',
        revenue: 'Увеличение доходности и оптимизация загрузки',
        insights: 'Аналитика для принятия стратегических решений',
        competitive: 'Конкурентное преимущество на рынке'
      },
      features: {
        booking: {
          title: 'Управление бронированиями',
          description: 'Система онлайн-бронирования, интеграция с глобальными сервисами бронирования.'
        },
        management: {
          title: 'Управление номерным фондом',
          description: 'Контроль статуса номеров, планирование уборки, техобслуживания.'
        },
        analytics: {
          title: 'Аналитика и отчеты',
          description: 'Статистика загрузки, средних цен, эффективности маркетинговых кампаний.'
        },
        payments: {
          title: 'Управление платежами',
          description: 'Автоматизация расчетов с гостями, выставление счетов, контроль задолженностей.'
        },
        websites: {
          title: 'Сайты для гостиниц',
          description: 'Разработка современных сайтов с интегрированной системой бронирования.'
        }
      }
    },
    telegram: {
      title: 'Telegram-бот PhotoExposer',
      subtitle: 'Автоматическая обработка и улучшение фотографий через Telegram',
      description: 'PhotoExposer — это инновационный Telegram-бот, который позволяет мгновенно обрабатывать и улучшать фотографии, не выходя из мессенджера.',
      features: {
        title: 'Возможности PhotoExposer',
        enhancement: {
          title: 'Автоматическое улучшение',
          description: 'Мгновенная коррекция экспозиции, цвета и резкости фотографий.'
        },
        filters: {
          title: 'Художественные фильтры',
          description: 'Набор профессиональных фильтров для создания уникального стиля фотографий.'
        },
        face: {
          title: 'Ретушь портретов',
          description: 'Интеллектуальная ретушь лица с сохранением естественности.'
        },
        batch: {
          title: 'Пакетная обработка',
          description: 'Возможность обработать сразу несколько фотографий с одинаковыми настройками.'
        },
        export: {
          title: 'Экспорт результатов',
          description: 'Сохранение обработанных фотографий в высоком качестве.'
        }
      },
      howToUse: {
        title: 'Как начать использовать',
        step1: 'Найдите бота @PhotoExposerBot в Telegram',
        step2: 'Отправьте фотографию боту',
        step3: 'Выберите нужный режим обработки',
        step4: 'Получите улучшенную фотографию в течение нескольких секунд'
      },
      pricing: {
        title: 'Тарифы',
        free: {
          title: 'Бесплатный',
          price: '0 ₽',
          description: 'Для ознакомления с основными функциями',
          feature1: 'До 10 фотографий в день',
          feature2: 'Базовое улучшение фото',
          feature3: '3 художественных фильтра',
          feature4: 'Стандартное качество экспорта'
        },
        premium: {
          title: 'Премиум',
          price: '299 ₽/месяц',
          description: 'Для активных пользователей',
          feature1: 'Неограниченное количество фотографий',
          feature2: 'Продвинутое улучшение фото',
          feature3: 'Все художественные фильтры',
          feature4: 'Высокое качество экспорта',
          feature5: 'Пакетная обработка'
        },
        professional: {
          title: 'Профессиональный',
          price: '699 ₽/месяц',
          description: 'Для профессиональных фотографов',
          feature1: 'Все функции Премиум-тарифа',
          feature2: 'Продвинутая ретушь портретов',
          feature3: 'Приоритетная обработка',
          feature4: 'Экспорт в максимальном качестве',
          feature5: 'Сохранение пресетов'
        }
      }
    }
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
    cases: 'Cases',
    testimonials: 'Testimonials',
    about: 'About Us',
    contact: 'Contact',
    quote: 'Get a Quote',
    serviceMenu: {
      crm: 'CRM Implementation',
      software: 'Software & Web Development',
      mobile: 'Mobile App Development',
      restaurant: 'Restaurant Solutions',
      hotel: 'Hotel Solutions',
      telegram: 'Telegram Bot PhotoExposer'
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
    crm: {
      title: 'CRM Implementation',
      subtitle: 'Automate customer relationships to increase sales and loyalty',
      why: 'Why is CRM implementation beneficial for your business?',
      whyDescription: 'A CRM system is not just a customer management program, but a comprehensive solution that helps automate customer interactions, improve service quality, and increase sales.',
      expertise: 'Our team has years of experience implementing CRM systems for businesses of all sizes — from small companies to large corporations.',
      platforms: 'We work with leading CRM systems',
      benefits: {
        title: 'Benefits of CRM Implementation',
        centralization: {
          title: 'Centralized Management',
          description: 'All information about customers, deals, and interactions is stored in one place and available to all employees in real-time.'
        },
        automation: {
          title: 'Routine Task Automation',
          description: 'The CRM system automates routine processes such as sending emails, call reminders, report generation, etc.'
        },
        sales: {
          title: 'Increased Sales',
          description: 'With CRM, you don\'t lose potential customers, track all stages of the deal, and increase conversion.'
        },
        teamwork: {
          title: 'Improved Teamwork',
          description: 'The CRM system simplifies interaction between employees and departments, making work more efficient.'
        },
        scalability: {
          title: 'Flexibility and Scalability',
          description: 'The CRM system grows with your business and adapts to changing needs.'
        }
      },
      learnMore: 'Learn More',
      bitrix24: {
        title: 'Bitrix24 CRM Implementation',
        subtitle: 'Comprehensive business process automation on the Bitrix24 platform',
        why: 'Why is Bitrix24 implementation beneficial for your business?',
        whyDescription: 'Bitrix24 is a powerful platform that unites all your company\'s business processes in one place. It helps optimize work, increase employee efficiency, and improve customer service quality.',
        reasons: '5 reasons to implement Bitrix24:'
      },
      amocrm: {
        title: 'amoCRM Implementation',
        subtitle: 'Simple and effective CRM system for sales management',
        why: 'Why is amoCRM implementation beneficial for your business?',
        whyDescription: 'amoCRM is an intuitive CRM system specifically designed for sales management. It helps managers effectively work with customers, and helps managers control the sales process and analyze results.',
        reasons: '5 reasons to implement amoCRM:'
      }
    },
    software: {
      title: 'Software & Web Development',
      subtitle: 'Creating custom software solutions and websites of any complexity',
      approach: 'Our approach to development',
      approachDescription: 'We develop software and websites that solve specific business problems and bring real benefits to your company.',
      expertise: 'Our expertise',
      webDev: {
        title: 'Web Development',
        description: 'Creating modern, responsive, and fast websites and web applications.'
      },
      desktop: {
        title: 'Desktop Applications',
        description: 'Development of desktop applications for Windows, macOS, and Linux.'
      },
      backend: {
        title: 'Backend Development',
        description: 'Creating a reliable server infrastructure and API for your applications.'
      },
      ecommerce: {
        title: 'E-commerce',
        description: 'Development of online stores and online sales systems.'
      },
      integration: {
        title: 'Integrations',
        description: 'Connecting your software to external services and APIs.'
      }
    },
    mobile: {
      title: 'Mobile App Development',
      subtitle: 'Creating mobile applications for iOS and Android',
      approach: 'Our approach to development',
      approachDescription: 'We create mobile applications that not only look stylish but also provide high performance and usability.',
      collaboration: 'Working with us, you get not only a quality mobile application but also a reliable partner who will help you at all stages — from idea to launch and support.',
      expertiseTitle: 'Our expertise',
      platforms: {
        ios: 'Development of native applications for iPhone and iPad using Swift and iOS SDK.',
        android: 'Creation of native applications for Android devices using Kotlin and Java.'
      },
      expertise: {
        cross: {
          title: 'Cross-platform Development',
          description: 'Creating applications that work on iOS and Android with a single code base.'
        },
        native: {
          title: 'Native Development',
          description: 'Developing applications that maximize device capabilities.'
        },
        integration: {
          title: 'API Integration',
          description: 'Connecting applications to external services and systems.'
        },
        performance: {
          title: 'Performance Optimization',
          description: 'Creating fast and responsive applications that save battery life.'
        },
        security: {
          title: 'Security',
          description: 'Protecting user data using modern encryption methods.'
        }
      },
      cta: {
        title: 'Ready to create a mobile application for your business?',
        description: 'Contact us to discuss your idea and get a consultation on mobile application development.'
      }
    },
    restaurant: {
      title: 'Restaurant Solutions',
      subtitle: 'Comprehensive automation for restaurant business',
      challenges: 'Restaurant business challenges',
      challengesDescription: 'Modern restaurant business faces many challenges: high competition, the need to control costs, demanding customers, and rapidly changing trends.',
      solution: 'We offer comprehensive solutions for automating all aspects of your establishment — from order taking and table management to inventory control and sales analytics.',
      featuresTitle: 'Features of our solutions',
      benefits: {
        title: 'Benefits of automation',
        efficiency: 'Increased operational efficiency and service speed',
        customer: 'Improved customer experience and increased loyalty',
        costs: 'Cost reduction and expense control',
        insights: 'Analytics and insights for strategic decisions',
        competitive: 'Competitive advantage in the market'
      },
      features: {
        ordering: {
          title: 'Order Management',
          description: 'Convenient system for receiving and processing orders, integration with kitchen and bar.'
        },
        reservation: {
          title: 'Table Reservation',
          description: 'Online table reservation system, guest seating management.'
        },
        analytics: {
          title: 'Analytics and Reports',
          description: 'Detailed statistics on sales, dish popularity, establishment occupancy.'
        },
        payments: {
          title: 'Payment Acceptance',
          description: 'Integration with cash registers, support for various payment methods.'
        },
        loyalty: {
          title: 'Loyalty Programs',
          description: 'Management of discounts, promotions, bonus programs for customers.'
        }
      }
    },
    hotel: {
      title: 'Hotel Solutions',
      subtitle: 'Automation for hotel business of any scale',
      challenges: 'Hotel business challenges',
      challengesDescription: 'The hotel business requires efficient room fund management, staff organization, service quality control, and load optimization.',
      solution: 'We offer solutions for automating all aspects of hotel operations — from room booking and guest registration to staff management and performance analytics.',
      featuresTitle: 'Features of our solutions',
      benefits: {
        title: 'Benefits of automation',
        efficiency: 'Optimization of work processes and increased staff productivity',
        experience: 'Improved guest service quality',
        revenue: 'Increased profitability and load optimization',
        insights: 'Analytics for strategic decisions',
        competitive: 'Competitive advantage in the market'
      },
      features: {
        booking: {
          title: 'Booking Management',
          description: 'Online booking system, integration with global booking services.'
        },
        management: {
          title: 'Room Fund Management',
          description: 'Control of room status, planning of cleaning, maintenance.'
        },
        analytics: {
          title: 'Analytics and Reports',
          description: 'Statistics on occupancy, average prices, effectiveness of marketing campaigns.'
        },
        payments: {
          title: 'Payment Management',
          description: 'Automation of calculations with guests, invoicing, debt control.'
        },
        websites: {
          title: 'Hotel Websites',
          description: 'Development of modern websites with integrated booking system.'
        }
      }
    },
    telegram: {
      title: 'Telegram Bot PhotoExposer',
      subtitle: 'Automatic processing and enhancement of photos via Telegram',
      description: 'PhotoExposer is an innovative Telegram bot that allows you to instantly process and enhance photos without leaving the messenger.',
      features: {
        title: 'PhotoExposer Features',
        enhancement: {
          title: 'Automatic Enhancement',
          description: 'Instant correction of exposure, color, and sharpness of photos.'
        },
        filters: {
          title: 'Artistic Filters',
          description: 'Set of professional filters to create a unique style of photos.'
        },
        face: {
          title: 'Portrait Retouching',
          description: 'Intelligent face retouching while maintaining naturalness.'
        },
        batch: {
          title: 'Batch Processing',
          description: 'Ability to process several photos at once with the same settings.'
        },
        export: {
          title: 'Result Export',
          description: 'Saving processed photos in high quality.'
        }
      },
      howToUse: {
        title: 'How to Start Using',
        step1: 'Find the bot @PhotoExposerBot in Telegram',
        step2: 'Send a photo to the bot',
        step3: 'Choose the desired processing mode',
        step4: 'Get an enhanced photo within seconds'
      },
      pricing: {
        title: 'Pricing',
        free: {
          title: 'Free',
          price: '0 ₽',
          description: 'For familiarization with basic functions',
          feature1: 'Up to 10 photos per day',
          feature2: 'Basic photo enhancement',
          feature3: '3 artistic filters',
          feature4: 'Standard export quality'
        },
        premium: {
          title: 'Premium',
          price: '299 ₽/month',
          description: 'For active users',
          feature1: 'Unlimited number of photos',
          feature2: 'Advanced photo enhancement',
          feature3: 'All artistic filters',
          feature4: 'High export quality',
          feature5: 'Batch processing'
        },
        professional: {
          title: 'Professional',
          price: '699 ₽/month',
          description: 'For professional photographers',
          feature1: 'All Premium features',
          feature2: 'Advanced portrait retouching',
          feature3: 'Priority processing',
          feature4: 'Maximum quality export',
          feature5: 'Preset saving'
        }
      }
    }
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
      name: 'Anna Tsyrenova',
      position: 'Director',
      company: 'Cafe "S Ogonkom!"',
      text: 'We met last summer when we were creating a website from scratch for the cafe "S Ogonkom!" in Aginskoye village. Since then, our cooperation continues. I really like it because they are professionals in their field, everything is done quickly, without unnecessary questions and problems. I am sincerely grateful for the quality work and prompt resolution of any issues - whether it\'s website improvements or consultations on other technical aspects. It\'s easy and comfortable to work with Badara, which is why I always turn to him. Thank you very much for the excellent work!'
    },
    client2: {
      name: 'Dmitry Ivanov',
      position: 'CEO',
      company: 'TechnoProm',
      text: 'We have been working with Automagica Solutions for over a year. During this time, they implemented a CRM system for us and integrated it with our website and telephony. The result exceeded expectations - sales increased by 35%, and the time for processing applications was reduced by three times. I would like to separately note the professionalism of the team and their willingness to promptly resolve emerging issues.'
    },
    client3: {
      name: 'Sergey and Marina',
      position: 'Owners',
      company: 'Guest House "Baikal"',
      text: 'Thank you to your team for the great project of our website! For Marina and me, this was our first experience, many things were unclear and difficult, so we thank you for your patience and understanding! We wish you continued success! May your plans be successfully implemented!✊✊✊'
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
  lang: Language; // Added to fix the issue in LanguageSwitcher
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  setLanguage: () => {},
  t: () => '',
  lang: 'ru', // Added to fix the issue in LanguageSwitcher
});

// Get nested translation values by dot notation
const getNestedTranslation = (obj: any, path: string): string => {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Return the key if translation not found
    }
  }
  
  return typeof result === 'string' ? result : path;
};

// Language provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize language from localStorage or default to Russian
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage && languages.includes(savedLanguage as Language)) 
      ? (savedLanguage as Language) 
      : 'ru';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translate function
  const t = (key: string): string => {
    const translations = language === 'ru' ? ru : en;
    return getNestedTranslation(translations, key);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      lang: language // Added to fix the issue in LanguageSwitcher
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
