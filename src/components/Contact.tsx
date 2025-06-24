
import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl text-slate-300">
            Conveniently located in Los Angeles. No appointment necessary for estimates!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-2xl font-bold text-orange-500">(323) 953-1666</p>
            <p className="text-slate-300">Free estimates over the phone</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-slate-300">
              2436 Hyperion Ave<br />
              Los Angeles, CA 90027
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p className="text-slate-300">
              Mon-Fri: 8:00 AM - 6:00 PM<br />
              Saturday: 8:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Get Directions</h3>
            <p className="text-slate-300">
              Easy parking available<br />
              Near Silver Lake & Los Feliz
            </p>
          </div>
        </div>
        <div className="mt-16 bg-slate-700 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Emergency Brake Service</h3>
              <p className="text-slate-300 mb-4">
                Don't wait if you're experiencing brake problems. We offer same-day service for brake emergencies 
                and can often accommodate walk-ins for urgent repairs.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Call for Emergency Service
              </button>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Why Choose Celebrity Muffler & Brake?</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Over 35 years in business</li>
                <li>• ASE certified technicians</li>
                <li>• Competitive pricing</li>
                <li>• Quality parts & workmanship</li>
                <li>• Same-day service available</li>
                <li>• All work guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
