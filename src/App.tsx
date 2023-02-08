import useSWRImmutable from "swr/immutable";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";
import "./components/Komponent.css";
import { Loader, Panel } from "@navikt/ds-react";
import { Loading } from "./components/Loading";

function App() {
  const { data, isLoading } = useSWRImmutable(apiUrl, fetcher);

  if (isLoading) {
    return <Loading />;
  }

  if (data?.length === 0) {
    return null;
  }

  const mottattTidspunkt = new Date(data[0]?.innsendtDato);
  const manglerVedlegg = data[0]?.manglendeVedlegg?.length > 0;
  const søknadId = data[0]?.søknadId;

  return (
    <section>
      <Komponent mottatt={mottattTidspunkt} manglerVedlegg={manglerVedlegg} søknadId={søknadId} />
    </section>
  );
}

export default App;
