const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const API_URL: EnvUrl = {
  local: "http://localhost:3000/api/endpoint",
  development: "https://www.dev.nav.no/tms-min-side-proxy/aap/oppslag/soeknader",
  production: "https://www.nav.no/tms-min-side-proxy/aap/oppslag/soeknader",
};

export const apiUrl = API_URL[getEnvironment()];

const MINE_AAP_URL: EnvUrl = {
  local: "http://localhost:3000/aap/mine-aap/",
  development: "https://aap-mine-aap.intern.dev.nav.no/aap/mine-aap/",
  production: "https://www.nav.no/aap/mine-aap/",
};

export const mineAapUrl = MINE_AAP_URL[getEnvironment()];
