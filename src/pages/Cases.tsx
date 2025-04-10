
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Globe, Users } from "lucide-react";


const Cases = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      title: t('cases.case1.title'),
      client: t('cases.case1.client'),
      industry: t('cases.case1.industry'),
      duration: t('cases.case1.duration'),
      description: t('cases.case1.description'),
      results: t('cases.case1.results'),
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    },
    {
      title: t('cases.case2.title'),
      client: t('cases.case2.client'),
      industry: t('cases.case2.industry'),
      duration: t('cases.case2.duration'),
      description: t('cases.case2.description'),
      results: t('cases.case2.results'),
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    },
    {
      title: t('cases.case3.title'),
      client: t('cases.case3.client'),
      industry: t('cases.case3.industry'),
      duration: t('cases.case3.duration'),
      description: t('cases.case3.description'),
      results: t('cases.case3.results'),
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      title: t('cases.case4.title'),
      client: t('cases.case4.client'),
      industry: t('cases.case4.industry'),
      duration: t('cases.case4.duration'),
      description: t('cases.case4.description'),
      results: t('cases.case4.results'),
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center mb-4">{t('cases.title')}</h1>
              <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                {t('cases.subtitle')}
              </p>

              <div className="space-y-16">
                {caseStudies.map((caseStudy, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                    } gap-8 items-center`}
                  >
                    <div className="md:w-1/2">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
                      />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <h2 className="text-2xl font-bold">{caseStudy.title}</h2>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{caseStudy.client}</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-1" />
                          <span>{caseStudy.industry}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{caseStudy.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600">{caseStudy.description}</p>
                      
                      <div>
                        <h3 className="font-semibold mb-2">{t('cases.results')}:</h3>
                        <p>{caseStudy.results}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Cases;
