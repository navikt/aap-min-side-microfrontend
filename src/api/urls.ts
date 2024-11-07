const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("dev.nav.no");

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

const MINE_AAP_URL: EnvUrl = {
  local: "http://localhost:3000/aap/mine-aap/",
  development: "https://aap-mine-aap.ansatt.dev.nav.no/aap/mine-aap/",
  production: "https://www.nav.no/aap/mine-aap/",
};

export const mineAapUrl = MINE_AAP_URL[getEnvironment()];

const INNSENDING_URL: EnvUrl = {
  local: "http://localhost:3000/api/innsending",
  development: "https://aap-mine-aap.ansatt.dev.nav.no/aap/mine-aap/api/soknader/soknaderInnsending/",
  production: "https://www.nav.no/aap/mine-aap/api/soknader/soknaderInnsending/",
};
export const innsendingUrl = INNSENDING_URL[getEnvironment()];
