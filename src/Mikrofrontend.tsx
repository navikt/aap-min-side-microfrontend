import React from "react";
import App from "./App";
import LanguageProvider from "./provider/LanguageProvider";

const Mikrofrontend = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

export default Mikrofrontend;
