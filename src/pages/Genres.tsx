import React from "react";
import { Play } from "lucide-react";
export function Genres() {
  const genres = [{
    name: "Afrobeats",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    artists: "Davido, Burna Boy, Wizkid",
    color: "from-purple-500"
  }, {
    name: "Gospel",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    artists: "Mercy Chinwo, Nathaniel Bassey",
    color: "from-blue-500"
  }, {
    name: "Hip Hop",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    artists: "MI Abaga, Vector, Ice Prince",
    color: "from-red-500"
  }, {
    name: "Highlife",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    artists: "Flavour, Umu Obiligbo",
    color: "from-green-500"
  }];
  return <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Browse by Genre</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {genres.map((genre, index) => <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
            <img src={genre.image} alt={genre.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t ${genre.color} to-transparent opacity-90`}>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{genre.name}</h3>
                <p className="text-sm text-gray-200 mb-4">{genre.artists}</p>
                <button className="w-12 h-12 bg-[#00A650] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-6 h-6 text-white ml-1" />
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}