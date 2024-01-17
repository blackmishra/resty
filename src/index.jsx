import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";

// import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-5rx1xwc0aa6k4oe2.us.auth0.com"
    clientId="oyZIMJy3ITUH1bnBi1PNpvPq4arIFZqC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById("root"),
);
