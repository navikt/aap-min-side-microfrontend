import { Loader, Panel } from "@navikt/ds-react";
import "./Loading.css";

export const Loading = () => {
  return (
    <section>
      <Panel className="loading-panel" border>
        <Loader />
        Laster&#8230;
      </Panel>
    </section>
  );
};
