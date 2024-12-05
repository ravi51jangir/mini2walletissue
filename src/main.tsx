import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { TelegramProvider } from 'react-telegram-miniapp';  // Telegram SDK import

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <TelegramProvider>  {/* Wrap the entire app with TelegramProvider */}
      <App />
    </TelegramProvider>
  </React.StrictMode>
);
