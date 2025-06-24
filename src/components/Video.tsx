
import React from 'react';
import { Play } from 'lucide-react';

const Video = () => {
  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">See Our Work in Action</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how our experienced technicians provide professional muffler and brake services
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Celebrity Muffler & Brake Shop Services"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
