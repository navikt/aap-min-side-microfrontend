import React from "react";
import App from "./App";
import { initAmplitude } from "./utils/amplitude";

const Mikrofrontend = () => {
  initAmplitude();

  return <App />;
};

export default Mikrofrontend;
