import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import "./i18n/i18n.ts";
import channelService from "./channelService";

channelService.loadScript();

channelService.boot({
  pluginKey: import.meta.env.VITE_CHANNEL_PLUGIN_KEY,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
