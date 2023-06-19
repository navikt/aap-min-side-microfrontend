import useSWRImmutable from "swr/immutable";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import styles from "./App.module.css";
import { Loading } from "./components/Loading";

function App() {
  const { data, isLoading } = useSWRImmutable(apiUrl, fetcher);

  if (!isLoading && data?.length === 0) {
    return null;
  }

  return (
    <section>
      <div className={styles.mikrofrontend}>
        {isLoading ? (
          <Loading />
        ) : (
          <Komponent mottatt={new Date(data[0]?.innsendtDato)} manglerVedlegg={data[0]?.manglendeVedlegg?.length > 0} />
        )}
      </div>
    </section>
  );
}

export default App;
