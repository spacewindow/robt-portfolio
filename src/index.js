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
        <Route exact path="/" element={<App isHomepage />}>
          <Route exact path="*" element={<NotFound />} />
          <Route exact index element={<Work />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
        </Route>
        <Route exact path="/work/" element={<App />}>
          <Route
            exact
            path="animated-characters"
            element={<AnimatedCharacters />}
          />
          <Route
            exact
            path="campaign-analytics"
            element={<CampaignAnalytics />}
          />
          <Route exact path="e-newsletters" element={<ENewsletters />} />
          <Route exact path="michael-thwaites" element={<MichaelThwaites />} />
          <Route
            exact
            path="mobile-store-locator"
            element={<MobileStoreLocator />}
          />
          <Route
            exact
            path="songs-for-the-fallen"
            element={<SongsForTheFallen />}
          />
          <Route exact path="wattyl-100-years" element={<Wattyl100Years />} />
          <Route exact path="allhomes-app" element={<Allhomes />} />
          <Route exact path="employment" element={<Employment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
