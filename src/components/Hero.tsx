
import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Los Angeles' Trusted <span className="text-orange-500">Muffler & Brake</span> Experts
        </h2>
        <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
          Over 35 years of professional automotive service in Los Angeles. We specialize in muffler repair, 
          brake service, and complete exhaust system solutions with honest pricing and quality workmanship.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <Phone className="w-6 h-6 text-orange-500" />
            <span className="text-2xl font-bold">(323) 953-1666</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-orange-500" />
            <span>Mon-Fri: 8AM-6PM | Sat: 8AM-4PM</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Call for Free Estimate
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-slate-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
