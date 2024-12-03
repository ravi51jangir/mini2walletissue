import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import your pages
import Homepage from "./pages/HOMEPAGE";
import Homepage_2 from "./pages/HOMEPAGE_2";
import Homepage_3 from "./pages/HOMEPAGE_3";
import Nftpage from "./pages/NFT";
import Stackpage from "./pages/Stack";
import Notificationpage from "./pages/NOTIFICATION";
import ICO_3page from "./pages/ICO_3";
import ICO_4page from "./pages/ICO_4";
import ICO_5page from "./pages/ICO_5";



// Create App component with routing
function App() {
  return (
    <div className="centered-div">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home2" element={<Homepage_2 />} />
        <Route path="/home3" element={<Homepage_3 />} />
        <Route path="/nft" element={<Nftpage />} />
        <Route path="/stack" element={<Stackpage />} />
        <Route path="/notifications" element={<Notificationpage />} />
        <Route path="/ico3" element={<ICO_3page />} />
        <Route path="/ico4" element={<ICO_4page />} />
        <Route path="/ico5" element={<ICO_5page />} />
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
     
    </div>
  );
}

// Root render
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

        <BrowserRouter>
          <App />
        </BrowserRouter>

  </React.StrictMode>
);