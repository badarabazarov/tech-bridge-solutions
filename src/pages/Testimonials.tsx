
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      position: t('testimonials.client1.position'),
      company: t('testimonials.client1.company'),
      testimonial: t('testimonials.client1.text'),
      rating: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      name: t('testimonials.client2.name'),
      position: t('testimonials.client2.position'),
      company: t('testimonials.client2.company'),
      testimonial: t('testimonials.client2.text'),
      rating: 5,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    },
    {
      name: t('testimonials.client3.name'),
      position: t('testimonials.client3.position'),
      company: t('testimonials.client3.company'),
      testimonial: t('testimonials.client3.text'),
      rating: 5,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
  ];

  const renderRating = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center mb-4">{t('testimonials.title')}</h1>
              <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                {t('testimonials.subtitle')}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </p>
                        <div className="flex mt-1">
                          {renderRating(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 border-l-4 border-primary pl-4">
                      "{testimonial.testimonial}"
                    </blockquote>
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

export default Testimonials;
