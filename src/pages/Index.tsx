
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ServicesSection from "@/components/sections/ServicesSection";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <PartnersSection />
          
          {/* Benefits Section */}
          <section id="benefits" className="section bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-center mb-12">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">International Projects</h3>
                  <p className="text-gray-600">Experience in international companies such as Huawei, NetCracker, EPAM ensures that we apply all relevant competencies and maintain the highest standards of quality and professionalism in the IT field.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Democratic Prices</h3>
                  <p className="text-gray-600">With democratic pricing, you can be assured that you are getting a fair price for the quality and benefits you receive, without any hidden fees or mark-ups.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Quality Services</h3>
                  <p className="text-gray-600">Experience in the industry, and utilizing the latest technology and methodology to ensure the efficiency, reliability and effectiveness of our IT services.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="section bg-primary text-white">
            <div className="container mx-auto">
              <h2 className="text-center mb-12">Get In Touch</h2>
              <div className="max-w-lg mx-auto">
                <div className="flex flex-col space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="px-4 py-3 rounded-md text-gray-900"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="px-4 py-3 rounded-md text-gray-900"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    className="px-4 py-3 rounded-md text-gray-900 min-h-32"
                  ></textarea>
                  <button className="bg-white text-primary font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                    Send Message
                  </button>
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

export default Index;
