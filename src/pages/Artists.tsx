import React from "react";
import { Play, Heart } from "lucide-react";
export function Artists() {
  const artists = [{
    name: "Fido",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    genre: "Afrobeats",
    monthlyListeners: "2.5M",
    topSong: "Joy Is Coming"
  }, {
    name: "Davido",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    genre: "Afropop",
    monthlyListeners: "5.8M",
    topSong: "Funds"
  }, {
    name: "Burna Boy",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    genre: "Afrofusion",
    monthlyListeners: "4.2M",
    topSong: "Bundle by Bundle"
  }];
  return <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Popular Artists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist, index) => <div key={index} className="bg-[#111111] rounded-lg overflow-hidden group">
            <div className="relative h-64">
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="w-12 h-12 bg-[#00A650] rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white ml-1" />
                </button>
                <button className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{artist.name}</h2>
              <p className="text-gray-400 mb-4">{artist.genre}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">
                  {artist.monthlyListeners} monthly listeners
                </span>
                <span className="text-[#00A650]">
                  Top Song: {artist.topSong}
                </span>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}