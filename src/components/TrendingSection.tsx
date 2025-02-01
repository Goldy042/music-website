import React, { useContext } from "react";
import { MoreVertical, Play, Pause } from "lucide-react";
import { AudioContext } from "../contexts/AudioContext";
export function TrendingSection() {
  const {
    currentTrack,
    setCurrentTrack,
    isPlaying,
    togglePlay
  } = useContext(AudioContext);
  const trendingSongs = [{
    title: "Joy Is Coming",
    artist: "Fido",
    image: "/images/1.jpeg",
    type: "Single",
    url: "/audio/1.mp3"
  }, {
    title: "Funds",
    artist: "Davido",
    image: "/images/2.jpeg",
    type: "Single",
    url: "/audio/2.mp3"
  }, {
    title: "May 10th",
    artist: "Serotonin",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    type: "Single",
    url: "/audio/3.mp3"
  }, {
    title: "Deep",
    artist: "Phyno Ft. Fave",
    image: "/images/4.webp",
    type: "Phyno X Fave",
    url: "/audio/4.mp3"
  },{
    title: "Awolowo",
    artist: "Fido",
    image: "/images/5.webp",
    type: "Single",
    url: "/audio/5.mp3"
  }, {
    title: "Back to Back",
    artist: "Zerrydl",
    image: "/images/6.webp",
    type: "Single",
    url: "/audio/6.mp3"
  }
];
  const handlePlay = song => {
    if (currentTrack?.url === song.url) {
      togglePlay();
    } else {
      setCurrentTrack(song);
    }
  };
  return <section className="mb-12">
  <h2 className="text-2xl font-bold pl-8 mb-6">Trending</h2>
  <div className="flex gap-6 no-scrollbar overflow-x-auto pb-4 px-4">
    {trendingSongs.map((song, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-64 bg-[#111111] rounded-lg p-4 group hover:bg-[#1A1A1A] transition-colors"
      >
        <div className="relative mb-4">
          <img
            src={song.image}
            alt={song.title}
            className="w-full aspect-square object-cover rounded-lg"
          />
          <button
            onClick={() => handlePlay(song)}
            className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              currentTrack?.url === song.url && isPlaying
                ? "bg-white text-black"
                : "bg-[#00A650] text-white"
            } ${
              currentTrack?.url === song.url
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
            aria-label={`${
              isPlaying && currentTrack?.url === song.url ? "Pause" : "Play"
            } ${song.title}`}
          >
            {isPlaying && currentTrack?.url === song.url ? (
              <Pause size={20} />
            ) : (
              <Play size={20} className="ml-1" />
            )}
          </button>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium mb-1 truncate">{song.title}</h3>
            <p className="text-sm text-gray-400 truncate">
              {song.type} by {song.artist}
            </p>
          </div>
          <button
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="More options"
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

}