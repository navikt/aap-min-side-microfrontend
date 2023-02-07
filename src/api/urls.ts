const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.dev.nav.no");

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
  local: "https://aap-innsyn.labs.nais.io/aap/mine-aap/api/soknader/soknader/",
  development: "https://www.dev.nav.no/tms-min-side-proxy/aap/oppslag/soeknader",
  production: "https://www.nav.no/tms-min-side-proxy/aap/oppslag/soeknader",
};

export const apiUrl = API_URL[getEnvironment()];
