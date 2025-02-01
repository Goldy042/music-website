import React from "react";
import { Play, Heart, Clock } from "lucide-react";
export function Albums() {
  const albums = [{
    title: "Joy Is Coming",
    artist: "Fido",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    year: "2024",
    tracks: [{
      title: "Joy Is Coming",
      duration: "3:45"
    }, {
      title: "Dance Tonight",
      duration: "3:20"
    }, {
      title: "Love & Light",
      duration: "4:15"
    }]
  }, {
    title: "Timeless",
    artist: "Davido",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    year: "2023",
    tracks: [{
      title: "Funds",
      duration: "3:30"
    }, {
      title: "No Competition",
      duration: "3:15"
    }, {
      title: "UNAVAILABLE",
      duration: "3:45"
    }]
  }, {
    title: "African Giant",
    artist: "Burna Boy",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    year: "2023",
    tracks: [{
      title: "Bundle by Bundle",
      duration: "3:55"
    }, {
      title: "City Boys",
      duration: "3:25"
    }, {
      title: "Big 7",
      duration: "4:00"
    }]
  }];
  return <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Latest Albums</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {albums.map((album, index) => <div key={index} className="bg-[#111111] rounded-lg overflow-hidden">
            <div className="flex">
              <img src={album.image} alt={album.title} className="w-48 h-48 object-cover" />
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-1">{album.title}</h2>
                    <p className="text-gray-400">
                      {album.artist} • {album.year}
                    </p>
                  </div>
                  <button className="w-10 h-10 bg-[#00A650] rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </button>
                </div>
                <div className="space-y-3">
                  {album.tracks.map((track, trackIndex) => <div key={trackIndex} className="flex items-center justify-between group hover:bg-[#2A2A2A] p-2 rounded-md transition-colors">
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                        <span className="text-sm">{track.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Heart className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">
                          {track.duration}
                        </span>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}