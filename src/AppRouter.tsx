import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { MusicMix } from "./pages/MusicMix";
import { DJs } from "./pages/DJs";
import { Shows } from "./pages/Shows";
import { Artists } from "./pages/Artists";
import { Albums } from "./pages/Albums";
import { Genres } from "./pages/Genres";
import { TrendingSection } from "./components/TrendingSection";
export function AppRouter() {
  return <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TrendingSection />} />
          <Route path="mix" element={<MusicMix />} />
          <Route path="djs" element={<DJs />} />
          <Route path="shows" element={<Shows />} />
          <Route path="artists" element={<Artists />} />
          <Route path="albums" element={<Albums />} />
          <Route path="genres" element={<Genres />} />
        </Route>
      </Routes>
    </Router>;
}