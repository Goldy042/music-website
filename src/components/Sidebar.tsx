import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, Disc, Library } from "lucide-react";
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActivePath = path => location.pathname === path;
  const linkClass = path => `${isActivePath(path) ? "text-white" : "text-gray-400"} hover:bg-[#2A2A2A] px-4 py-2 rounded flex items-center gap-2`;
  return <>
      <button onClick={() => setIsOpen(true)} className="lg:hidden fixed top-4 left-4 z-20 text-white p-2 hover:bg-[#2A2A2A] rounded-full">
        <Menu size={24} />
      </button>
      <aside className={`${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 w-60 bg-black border-r border-[#2A2A2A] p-4 flex flex-col transition-transform z-30`}>
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00A650] rounded-full" />
            <span className="text-[#00A650] font-bold text-xl">MUSIC</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/mix" className={linkClass("/mix")}>
            Music Mix
          </Link>
          <Link to="/djs" className={linkClass("/djs")}>
            DJs
          </Link>
          <Link to="/shows" className={linkClass("/shows")}>
            Shows
          </Link>
        </nav>
        <div className="mt-8">
          <h3 className="text-gray-500 text-sm px-4 mb-2">COLLECTION</h3>
          <nav className="flex flex-col gap-2">
            <Link to="/artists" className={linkClass("/artists")}>
              <Users size={20} />
              Artists
            </Link>
            <Link to="/albums" className={linkClass("/albums")}>
              <Disc size={20} />
              Albums
            </Link>
            <Link to="/genres" className={linkClass("/genres")}>
              <Library size={20} />
              Genres
            </Link>
          </nav>
        </div>
      </aside>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>;
}