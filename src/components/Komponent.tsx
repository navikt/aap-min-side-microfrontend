import React from "react";
import { BodyShort, Heading, LinkPanel, Tag } from "@navikt/ds-react";
import { format } from "date-fns";
import { mineAapUrl } from "../api/urls";
import styles from "./Komponent.module.css";
import LinkCard from "./card/LinkCard";

interface Props {
  mottatt: Date;
  manglerVedlegg: boolean;
  søknadId: string;
}

const Komponent = ({ mottatt, manglerVedlegg, søknadId }: Props) => {
  const url = mineAapUrl; //`${mineAapUrl}${manglerVedlegg ? `${søknadId}/ettersendelse/` : ""}`;

  return (
    <div className={styles.mikrofrontend}>
      <Heading className={styles.mikrofrontendHeader} level="2" size="medium">
        Arbeidsavklarings&shy;penger
      </Heading>
      <LinkCard href={url}>
        <>
          <Heading level="3" size="small" className={styles.heading}>
            Søknad om AAP (arbeidsavklarings&shy;penger)
          </Heading>
          <BodyShort size="small" className={styles.detail}>
            Mottatt: {format(mottatt, "dd.MM.yyyy hh:mm")}
          </BodyShort>
          {manglerVedlegg ? (
            <Tag variant="warning">Dokumentasjon mangler</Tag>
          ) : (
            <Tag variant="neutral">Vi tar kontakt om vi trenger mer informasjon</Tag>
          )}
        </>
      </LinkCard>
    </div>
  );
};

export default Komponent;
