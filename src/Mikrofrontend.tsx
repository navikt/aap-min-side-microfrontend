import React from "react";
import App from "./App";
import { initAmplitude } from "./utils/amplitude";
import LanguageProvider from "./provider/LanguageProvider";

const Mikrofrontend = () => {
  initAmplitude();

  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

export default Mikrofrontend;
