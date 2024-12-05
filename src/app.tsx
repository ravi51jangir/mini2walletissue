import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HOMEPAGE from "./pages/HOMEPAGE";  // Your homepage
import { TelegramProvider } from 'react-telegram-miniapp';

const routes = {
  home: "/",
  home2: "/home2",
  home3: "/home3",
  nft: "/nft",
  stack: "/stack",
  notification: "/notification",
  ico: "/ico",
};

const NavigationHandler: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path); // Navigates to the specified path
  };

  return (
    <footer>
      {/* Example of Navigation Buttons */}
      <img
        onClick={() => handleNavigation(routes.home)}
        style={{ cursor: "pointer" }}
        alt="Home"
        src="home_icon.png"  // Update with your icon source
      />
      {/* Add more navigation buttons as needed */}
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <TelegramProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HOMEPAGE />} />
          {/* Other routes for your app */}
        </Routes>

        <NavigationHandler />
      </Router>
    </TelegramProvider>
  );
};

export default App;
