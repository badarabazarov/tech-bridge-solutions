
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                    <Button>{t('about.joinTeam')}</Button>
                    <Button variant="outline">{t('about.contactUs')}</Button>
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

          {/* Team */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">{t('about.team.title')}</h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">{t('about.team.subtitle')}</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{member.position}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button variant="outline">{t('about.seeAllTeam')}</Button>
              </div>
            </div>
          </section>

          {/* Timeline/History */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">{t('about.milestones.title')}</h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">{t('about.milestones.subtitle')}</p>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                      <div className="md:w-1/2 mb-6 md:mb-0 px-4">
                        <div className={`text-right ${index % 2 !== 0 ? 'md:text-left' : ''}`}>
                          <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="hidden md:flex items-center justify-center z-10 bg-primary rounded-full h-8 w-8">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      
                      <div className="md:w-1/2 px-4">
                        {/* Empty space for layout on the right/left side */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Office Locations */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">{t('about.locations.title')}</h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">{t('about.locations.subtitle')}</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('about.locations.moscow.title')}</h3>
                      <p className="text-gray-600">{t('about.locations.moscow.address')}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">{t('about.locations.directions')}</Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('about.locations.spb.title')}</h3>
                      <p className="text-gray-600">{t('about.locations.spb.address')}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">{t('about.locations.directions')}</Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{t('about.locations.kazan.title')}</h3>
                      <p className="text-gray-600">{t('about.locations.kazan.address')}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">{t('about.locations.directions')}</Button>
                </div>
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
