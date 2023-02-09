import React from "react";
import { BodyShort, Heading, LinkPanel, Tag } from "@navikt/ds-react";
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
      <LinkPanel className="panel" href={url} border={false}>
        <Heading level="3" size="small" className="heading">
          Søknad om AAP (arbeidsavklaringspenger)
        </Heading>
        <BodyShort className="detail">Mottatt: {format(mottatt, "dd.MM.yyyy hh:mm")}</BodyShort>
        {manglerVedlegg ? (
          <Tag variant="warning">Dokumentasjon mangler</Tag>
        ) : (
          <Tag variant="neutral">Vi tar kontakt om vi trenger mer informasjon</Tag>
        )}
      </LinkPanel>
    </div>
  );
};

export default Komponent;
