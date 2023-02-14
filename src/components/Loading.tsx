import { Loader, Panel } from "@navikt/ds-react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <section>
      <Panel className={styles.loading} border>
        <Loader />
        Laster&#8230;
      </Panel>
    </section>
  );
};
