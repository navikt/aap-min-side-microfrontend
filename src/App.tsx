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
    fetcher
  );

  console.log("Data fra søknad-api: ", data);
  console.log("Data fra innsending: ", innsendingData);

  const innsendtDatoFraSøknadAPI = data && data[0].innsendtDato;
  const innsendtDatoFraAAPInnsending = innsendingData && innsendingData[0].mottattDato;
  const mottattDato = innsendtDatoFraAAPInnsending ? innsendtDatoFraAAPInnsending : innsendtDatoFraSøknadAPI;
  console.log("Mottatt dato: ", mottattDato);
  if (isLoading || innsendingIsLoading) {
    return <Loading />;
  }

  if (!mottattDato) {
    return null;
  }

  return <Komponent mottatt={new Date(mottattDato)} />;
}

export default App;
