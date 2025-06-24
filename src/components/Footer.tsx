
import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-500 rounded-full p-2">
                <div className="text-lg font-bold">CMB</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Celebrity Muffler & Brake Shop</h3>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Your trusted automotive service partner in Los Angeles since 1985. 
              Professional muffler, brake, and exhaust system services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>(323) 953-1666</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>2436 Hyperion Ave, Los Angeles, CA 90027</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>Mon-Fri: 8AM-6PM | Sat: 8AM-4PM</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Muffler Repair & Replacement</li>
              <li>• Brake Service & Repair</li>
              <li>• Exhaust System Service</li>
              <li>• Catalytic Converter Repair</li>
              <li>• Performance Upgrades</li>
              <li>• Custom Fabrication</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Celebrity Muffler & Brake Shop. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
