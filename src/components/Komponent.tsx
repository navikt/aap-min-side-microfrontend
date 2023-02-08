import React from "react";
import { Detail, Heading, LinkPanel, Tag } from "@navikt/ds-react";
import { Next } from "@navikt/ds-icons";
import "./Komponent.css";
import { format } from "date-fns";
import { mineAapUrl } from "../api/urls";

interface Props {
  mottatt: Date;
  manglerVedlegg: boolean;
  søknadId: string;
}

const Komponent = ({ mottatt, manglerVedlegg, søknadId }: Props) => {
  const url = `${mineAapUrl}${manglerVedlegg ? `${søknadId}/ettersendelse/` : ""}`;

  return (
    <div>
      <LinkPanel className="panel" href={url} border>
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
      </LinkPanel>
    </div>
  );
};

export default Komponent;
