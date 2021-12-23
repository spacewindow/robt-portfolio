import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/main.css";
import App from "./App";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import AnimatedCharacters from "./pages/AnimatedCharacters";
import CampaignAnalytics from "./pages/CampaignAnalytics";
import ENewsletters from "./pages/ENewsletters";
import MichaelThwaites from "./pages/MichaelThwaites";
import MobileStoreLocator from "./pages/MobileStoreLocator";
import SongsForTheFallen from "./pages/SongsForTheFallen";
import Wattyl100Years from "./pages/Wattyl100Years";
import Allhomes from "./pages/Allhomes";
import Employment from "./pages/Employment";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/work/" element={<App />}>
          <Route path="animated-characters" element={<AnimatedCharacters />} />
          <Route path="campaign-analytics" element={<CampaignAnalytics />} />
          <Route path="e-newsletter" element={<ENewsletters />} />
          <Route path="michael-thwaites" element={<MichaelThwaites />} />
          <Route path="mobile-store-locator" element={<MobileStoreLocator />} />
          <Route path="songs-for-the-fallen" element={<SongsForTheFallen />} />
          <Route path="wattyl-100-years" element={<Wattyl100Years />} />
          <Route path="allhomes" element={<Allhomes />} />
          <Route path="employment" element={<Employment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
