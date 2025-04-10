
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import tgLogo from '/public/telegram.png';
import { Link } from 'react-router-dom'; 

<img 
  src={tgLogo} 
  alt="Telegram" 
  className="w-8 h-8 rounded-full object-cover"
/>

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Automagica Solutions
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/BadaraBazarov" className="transition-transform hover:scale-110">
                <img 
                  src={tgLogo} 
                  alt="Telegram" 
                  className="w-8 h-8 rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="#services" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link 
                  to="#partners" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t('nav.partners')}
                </Link>
              </li>
              <li>
                <Link 
                  to="#clients" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t('nav.clients')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/cases" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t('nav.cases')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{t('footer.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:+79167985774" className="text-gray-300 hover:text-white transition-colors">+7 (916) 798-57-74</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a href="mailto:info@automagica.tech" className="text-gray-300 hover:text-white transition-colors">info@automagica.tech</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Automagica Solutions. {t('footer.rights')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/upload/privacy_policy_ru.pdf" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="/upload/conditions_ru.pdf" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
