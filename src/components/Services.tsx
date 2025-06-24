
import React from 'react';
import { Wrench, Settings, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-orange-500" />,
      title: "Muffler Repair & Replacement",
      description: "Complete exhaust system repair, custom muffler installation, and performance upgrades."
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Brake Service",
      description: "Brake pad replacement, rotor resurfacing, brake fluid service, and complete brake system repair."
    },
    {
      icon: <Settings className="w-12 h-12 text-orange-500" />,
      title: "Exhaust System Service",
      description: "Catalytic converter repair, exhaust pipe replacement, and emission system diagnostics."
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-500" />,
      title: "Performance Upgrades",
      description: "High-performance exhaust systems, custom fabrication, and performance brake upgrades."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Professional Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive automotive services with a focus on mufflers, brakes, and exhaust systems. 
            All work comes with our satisfaction guarantee.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">{service.title}</h3>
              <p className="text-slate-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
