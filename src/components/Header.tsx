
import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-500 rounded-full p-3">
            <div className="text-2xl font-bold">CMB</div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Celebrity Muffler & Brake Shop</h1>
            <p className="text-slate-300">Professional Automotive Service Since 1985</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-orange-500" />
            <span className="text-lg font-semibold">(323) 953-1666</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span>2436 Hyperion Ave, Los Angeles, CA</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
