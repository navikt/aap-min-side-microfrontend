import useSWRImmutable from "swr/immutable";
import { fetcher } from "./api/api";
import { innsendingUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import { Loading } from "./components/Loading";

interface SøknadFraInnsending {
  mottattDato: string;
}

function App() {
  const { data: innsendingData, isLoading: innsendingIsLoading } = useSWRImmutable<SøknadFraInnsending[]>(
    innsendingUrl,
    fetcher
  );

  const mottattDato = innsendingData && innsendingData.length > 0 && innsendingData[0].mottattDato;

  if (innsendingIsLoading) {
    return <Loading />;
  }

  if (!mottattDato) {
    return null;
  }

  return <Komponent mottatt={new Date(mottattDato)} />;
}

export default App;
