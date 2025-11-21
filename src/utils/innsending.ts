import { isAfter, sub } from "date-fns";

export function isAfterStandardSaksbehandlingstid(søknadMottattIso: string) {
  return isAfter(sub(new Date(), { weeks: 13 }), søknadMottattIso);
}
