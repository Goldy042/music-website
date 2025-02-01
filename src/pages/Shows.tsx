import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
export function Shows() {
  const shows = [{
    title: "Summer Beach Party",
    date: "2024-02-15",
    time: "18:00",
    location: "Landmark Beach, Lagos",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    price: "₦5,000"
  }, {
    title: "Night of Afrobeats",
    date: "2024-02-20",
    time: "20:00",
    location: "Eko Hotel, Lagos",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    price: "₦10,000"
  }, {
    title: "Club Mix Live",
    date: "2024-02-25",
    time: "22:00",
    location: "Club DNA, Port Harcourt",
    image: "https://images.unsplash.com/photo-1571266866051-40a40f69f70b?w=800&q=80",
    price: "₦7,500"
  }];
  return <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Shows</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shows.map((show, index) => <div key={index} className="bg-[#111111] rounded-lg overflow-hidden group">
            <div className="relative">
              <img src={show.image} alt={show.title} className="w-full aspect-video object-cover" />
              <div className="absolute top-4 right-4 bg-[#00A650] text-white px-3 py-1 rounded-full">
                {show.price}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-4">{show.title}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{new Date(show.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>{show.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span>{show.location}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-white text-black py-2 rounded-full hover:bg-gray-100 transition-colors">
                Get Tickets
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}