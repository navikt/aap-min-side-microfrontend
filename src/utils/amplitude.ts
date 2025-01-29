import { logAmplitudeEvent } from "@navikt/nav-dekoratoren-moduler";

export const logNavigereEvent = () => {
  logAmplitudeEvent({
    origin: "aap-min-side-microfrontend",
    eventName: "navigere",
    eventData: {
      komponent: "aap",
    },
  });
};
