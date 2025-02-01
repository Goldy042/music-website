import React from "react";
export function DJs() {
  const djs = [{
    name: "DJ Holaxzy",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    genre: "Afrobeats",
    followers: "234K"
  }, {
    name: "DJ Kenzo Wheelz",
    location: "Rivers, Nigeria",
    image: "https://images.unsplash.com/photo-1571266866051-40a40f69f70b?w=800&q=80",
    genre: "Hip Hop",
    followers: "189K"
  }, {
    name: "DJ Ayi",
    location: "Rivers, Nigeria",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    genre: "Dance",
    followers: "156K"
  }];
  return <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Featured DJs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {djs.map((dj, index) => <div key={index} className="bg-[#111111] rounded-lg overflow-hidden">
            <div className="relative h-48">
              <img src={dj.image} alt={dj.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="font-bold text-xl">{dj.name}</h3>
                <p className="text-gray-400">{dj.location}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#00A650]">{dj.genre}</span>
                <span className="text-gray-400">{dj.followers} followers</span>
              </div>
              <button className="w-full bg-[#00A650] text-white py-2 rounded-full hover:bg-[#008f44] transition-colors">
                Follow
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}