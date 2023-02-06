import React from "react";
import { Detail, Heading, Panel, Tag } from "@navikt/ds-react";
import "./Komponent.css";
import { format } from "date-fns";

interface Props {
  mottatt: Date;
  manglerVedlegg: boolean;
}

const Komponent = ({ mottatt, manglerVedlegg }: Props) => {
  return (
    <div className="">
      <Panel border>
        <Heading level="3" size="small" className="heading">
          Søknad om AAP (arbeidsavklaringspenger)
        </Heading>
        <Detail className="detail">Mottatt: {format(mottatt, "dd.MM.yyyy hh:mm")}</Detail>
        {manglerVedlegg ? (
          <Tag variant="warning" size="small">
            Dokumentasjon mangler
          </Tag>
        ) : (
          <Tag variant="neutral" size="small">
            Vi tar kontakt om vi trenger mer informasjon
          </Tag>
        )}
      </Panel>
    </div>
  );
};

export default Komponent;
