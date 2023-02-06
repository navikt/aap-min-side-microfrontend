import React from "react";
import { Detail, Heading, Panel, Tag } from "@navikt/ds-react";
import "./Komponent.css";

interface Props {
  tekst: string;
}

const Komponent = ({ tekst }: Props) => {
  return (
    <div className="">
      <Panel border>
        <Heading level="3" size="small" className="heading">
          Søknad om AAP (arbeidsavklaringspenger)
        </Heading>
        <Detail className="detail">Mottatt: 24.12 2022 17:00</Detail>
        <Tag variant="warning" size="small">
          Dokumentasjon mangler
        </Tag>
      </Panel>
    </div>
  );
};

export default Komponent;
