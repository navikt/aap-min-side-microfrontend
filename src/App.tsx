import useSWRImmutable from "swr/immutable";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  const { data, isLoading, error } = useSWRImmutable(apiUrl, fetcher);

  if (isLoading) {
    return <div>Laster...</div>;
  }

  if (error) {
    return <div>Det oppstod en feil :(</div>;
  }

  if (data.length === 0) {
    return <div></div>;
  }

  const mottattTidspunkt = new Date(data[0]?.innsendtDato);
  const manglerVedlegg = data[0]?.manglendeVedlegg?.length > 0;

  return (
    <section>
      <Komponent mottatt={mottattTidspunkt} manglerVedlegg={manglerVedlegg} />
    </section>
  );
}

export default App;
