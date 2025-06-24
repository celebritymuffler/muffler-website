
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "Excellent service! They fixed my muffler quickly and at a fair price. The staff was professional and explained everything clearly. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      name: "David Chen",
      rating: 5,
      text: "Been coming here for years for brake service. Always honest, reliable, and their work lasts. Best auto shop in the area!",
      date: "1 month ago"
    },
    {
      name: "Jennifer Williams",
      rating: 5,
      text: "Great experience! They diagnosed my exhaust problem correctly the first time and had me back on the road the same day. Fair pricing too.",
      date: "3 weeks ago"
    },
    {
      name: "Robert Johnson",
      rating: 5,
      text: "Professional service from start to finish. They took the time to explain the brake repair and provided a detailed estimate. Very satisfied!",
      date: "1 week ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-slate-800">4.9/5</span>
            <span className="text-slate-600">Based on 150+ Google Reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
              <Quote className="w-8 h-8 text-orange-500 opacity-50 absolute top-4 right-4" />
              <div className="flex space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-slate-700 mb-4 italic">"{review.text}"</p>
              <div>
                <p className="font-semibold text-slate-800">{review.name}</p>
                <p className="text-sm text-slate-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Read More Reviews on Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
