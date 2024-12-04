import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/HOMEPAGE";
import Nftpage from "./pages/NFT";
import Stackpage from "./pages/Stack";
import Notificationpage from "./pages/NOTIFICATION";
import ICO_3page from "./pages/ICO_3";
import { images } from "./StoreImages/StoreImages";
import styles from "./css_modules/HOMEPAGE.module.css";
export const routes = {
  home: "/",
  nft: "/nft",
  stack: "/stack",
  notification: "/notification",
  ico: "/ico",
};

// Navigation handler logic for footer buttons
const NavigationHandler: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <footer >
       <img className={styles.homeButtonIcon}
        src={images.HomeButton}
        alt="Home"
        onClick={() => handleNavigation(routes.home)}
        style={{ cursor: "pointer" }}
      />
       <img className={styles.icoButtonIcon}
        src={images.ICOButton}
        alt="ICO"
        onClick={() => handleNavigation(routes.ico)}
        style={{ cursor: "pointer" }}
      />
       <img className={styles.nftButtonIcon}
        src={images.NFTButton}
        alt="NFT"
        onClick={() => handleNavigation(routes.nft)}
        style={{ cursor: "pointer" }}
      />
     <img className={styles.stackButtonIcon}
        src={images.StackButton}
        alt="Stack"
        onClick={() => handleNavigation(routes.stack)}
        style={{ cursor: "pointer" }}
      />
       <img className={styles.notificationButtonIcon}
        src={images.NotificationButton}
        alt="Notifications"
        onClick={() => handleNavigation(routes.notification)}
        style={{ cursor: "pointer" }}
      />

    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Routes for pages */}
      <Routes>
        <Route path={routes.home} element={<Homepage />} />
        <Route path={routes.nft} element={<Nftpage />} />
        <Route path={routes.stack} element={<Stackpage />} />
        <Route path={routes.notification} element={<Notificationpage />} />
        <Route path={routes.ico} element={<ICO_3page />} />
      </Routes>

      {/* Footer with navigation logic */}
      <NavigationHandler />
    </Router>
  );
};

export default App;
