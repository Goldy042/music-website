import React from "react";
export function MusicMix() {
  const mixes = [{
    title: "Summer Vibes 2024",
    dj: "DJ Holaxzy",
    duration: "1:23:45",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    genre: "Afrobeats"
  }, {
    title: "Party Mix Vol. 2",
    dj: "DJ Kenzo Wheelz",
    duration: "58:30",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    genre: "Hip Hop"
  }, {
    title: "Club Bangers",
    dj: "DJ Ayi",
    duration: "1:45:20",
    image: "https://images.unsplash.com/photo-1571266866051-40a40f69f70b?w=800&q=80",
    genre: "Dance"
  }];
  return <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Music Mix</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mixes.map((mix, index) => <div key={index} className="bg-[#111111] rounded-lg overflow-hidden group">
            <div className="relative">
              <img src={mix.image} alt={mix.title} className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="w-16 h-16 bg-[#00A650] rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1">{mix.title}</h3>
              <p className="text-gray-400 text-sm mb-2">By {mix.dj}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#00A650]">{mix.genre}</span>
                <span className="text-gray-400">{mix.duration}</span>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}