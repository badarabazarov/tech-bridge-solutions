
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';


const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t('about.team.member1.name'),
      position: t('about.team.member1.position'),
      bio: t('about.team.member1.bio'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      name: t('about.team.member2.name'),
      position: t('about.team.member2.position'),
      bio: t('about.team.member2.bio'),
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    },
    {
      name: t('about.team.member3.name'),
      position: t('about.team.member3.position'),
      bio: t('about.team.member3.bio'),
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: t('about.milestones.m1.title'),
      description: t('about.milestones.m1.description'),
    },
    {
      year: "2012",
      title: t('about.milestones.m2.title'),
      description: t('about.milestones.m2.description'),
    },
    {
      year: "2015",
      title: t('about.milestones.m3.title'),
      description: t('about.milestones.m3.description'),
    },
    {
      year: "2018",
      title: t('about.milestones.m4.title'),
      description: t('about.milestones.m4.description'),
    },
    {
      year: "2023",
      title: t('about.milestones.m5.title'),
      description: t('about.milestones.m5.description'),
    },
  ];

  const values = [
    {
      title: t('about.values.v1.title'),
      description: t('about.values.v1.description'),
    },
    {
      title: t('about.values.v2.title'),
      description: t('about.values.v2.description'),
    },
    {
      title: t('about.values.v3.title'),
      description: t('about.values.v3.description'),
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-gray-100 to-white py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
                  <p className="text-lg text-gray-600 mb-6">{t('about.subtitle')}</p>
                  <p className="mb-8">{t('about.description')}</p>
                  <div className="flex gap-3">
                    <Link to="/#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">
                    <Button>{t('about.joinTeam')}</Button>
                    </Link>
                    
                    <Link to="/#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">
                    <Button variant="outline">{t('about.contactUs')}</Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Our Team" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">{t('about.values.title')}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
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

export default About;
