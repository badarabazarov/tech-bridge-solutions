
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight animate-fade-in">
              Transforming Businesses Through <span className="bg-gradient-to-r from-brand-600 to-accent-teal bg-clip-text text-transparent">Automation</span>
            </h1>
            
            <p className="text-lg text-gray-600 md:text-xl animate-fade-in" style={{animationDelay: "100ms"}}>
              We build custom IT solutions that automate processes, improve efficiency, and drive growth for businesses of all sizes.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{animationDelay: "200ms"}}>
              <Button size="lg" className="gap-2 group">
                Get Started 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in" style={{animationDelay: "300ms"}}>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium">Secure Solutions</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium">Fast Deployment</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/90 to-accent-teal/90 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Person working on automation solutions"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
