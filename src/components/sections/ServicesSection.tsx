
import React from 'react';
import { Database, Code, Smartphone, Globe, Settings, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Database className="h-12 w-12 text-brand-600" />,
    title: "CRM Implementation",
    description: "We prepare your business for efficient operation by auditing processes, selecting software, configuring and implementing solutions like Bitrix24 and amoCRM.",
    link: "#"
  },
  {
    icon: <Code className="h-12 w-12 text-accent-teal" />,
    title: "Software Development",
    description: "Custom programming solutions including code writing, testing, debugging and optimization to meet your specific business needs.",
    link: "#"
  },
  {
    icon: <Smartphone className="h-12 w-12 text-accent-indigo" />,
    title: "Mobile App Development",
    description: "Creating mobile applications for iOS and Android devices that provide seamless experiences for your customers.",
    link: "#"
  },
  {
    icon: <Globe className="h-12 w-12 text-brand-600" />,
    title: "Website Creation",
    description: "From simple to complex websites, we build responsive and modern web solutions that represent your brand online.",
    link: "#"
  },
  {
    icon: <Settings className="h-12 w-12 text-accent-teal" />,
    title: "IT Automation",
    description: "Streamline your business processes with custom automation solutions that save time and reduce errors.",
    link: "#"
  },
  {
    icon: <Server className="h-12 w-12 text-accent-indigo" />,
    title: "Database Administration",
    description: "Expert management of your databases ensuring optimal performance, security, and reliability.",
    link: "#"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive IT solutions to help your business grow and thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 transition-all hover:shadow-md hover:border-brand-300">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 min-h-[100px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto text-brand-600 hover:text-brand-800" asChild>
                  <a href={service.link}>Learn more</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
