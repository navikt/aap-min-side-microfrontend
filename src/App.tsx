import useSWRImmutable from "swr/immutable";
import { fetcher } from "./api/api";
import { apiUrl, innsendingUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import { Loading } from "./components/Loading";

/**
 * SøknadFraAPI og SøknadFraInnsending har flere felter men vi ser kun på datoen her. Andre felter er derfor ikke med
 */
interface SøknadFraSøknadAPI {
  innsendtDato?: string;
}

interface SøknadFraInnsending {
  mottattDato: string;
}

function App() {
  const { data, isLoading } = useSWRImmutable<SøknadFraSøknadAPI[]>(apiUrl, fetcher);
  const { data: innsendingData, isLoading: innsendingIsLoading } = useSWRImmutable<SøknadFraInnsending[]>(
    innsendingUrl,
    fetcher,
  );

  const innsendtDatoFraSøknadAPI = data && data.length > 0 && data[0].innsendtDato;
  const innsendtDatoFraAAPInnsending = innsendingData && innsendingData.length > 0 && innsendingData[0].mottattDato;
  const mottattDato = innsendtDatoFraAAPInnsending ? innsendtDatoFraAAPInnsending : innsendtDatoFraSøknadAPI;

  if (isLoading || innsendingIsLoading) {
    return <Loading />;
  }

  if (!mottattDato) {
    return null;
  }

  return <Komponent mottatt={new Date(mottattDato)} />;
}

export default App;
