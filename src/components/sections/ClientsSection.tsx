
import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
  { 
    name: "Nayan-Navaa", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Technology Partner"
  },
  { 
    name: "S Ogonkom", 
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Software Solutions"
  },
  { 
    name: "Iron Horse", 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Enterprise Client"
  },
  { 
    name: "Sytaya Cherepaha", 
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Strategic Partner"
  },
  { 
    name: "Tuya", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Global Partner"
  },
  { 
    name: "AltanSerge", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Technology Client"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Our Clients</h2>
          <p className="text-lg text-gray-600">
            Trusted by leading companies across various industries.
          </p>
        </div>

        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 mb-12">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center p-4 transition-all hover:scale-105">
              <div className="w-24 h-24 mb-3 overflow-hidden rounded-lg shadow-md">
                <img 
                  src={client.image} 
                  alt={`${client.name} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800">{client.name}</h3>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col items-center p-4">
                    <div className="w-24 h-24 mb-3 overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={client.image} 
                        alt={`${client.name} logo`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-800">{client.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
