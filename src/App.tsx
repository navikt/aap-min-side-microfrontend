import useSWRImmutable from "swr/immutable";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  //const { data } = useSWRImmutable(apiUrl, fetcher);
  const data = [
    {
      innsendtDato: "2022-08-30T10:54:49.737467",
      manglendeVedlegg: ["ARBEIDSGIVER"],
    },
  ];
  const mottattTidspunkt = new Date(data[0]?.innsendtDato);
  const manglerVedlegg = data[0]?.manglendeVedlegg?.length > 0;

  return (
    <section>
      <Komponent mottatt={mottattTidspunkt} manglerVedlegg={manglerVedlegg} />
    </section>
  );
}

export default App;
