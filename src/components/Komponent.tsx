import React from "react";
import { BodyShort, Heading, Tag } from "@navikt/ds-react";
import { format } from "date-fns";
import { mineAapUrl } from "../api/urls";
import styles from "./Komponent.module.css";
import LinkCard from "./card/LinkCard";

interface Props {
  mottatt: Date;
  manglerVedlegg: boolean;
}

const Komponent = ({ mottatt, manglerVedlegg }: Props) => {
  const url = mineAapUrl; //`${mineAapUrl}${manglerVedlegg ? `${søknadId}/ettersendelse/` : ""}`;

  return (
    <div className={styles.mikrofrontend}>
      <LinkCard href={url}>
        <>
          <Heading level="3" size="small" className={styles.heading}>
            Søknad om AAP (arbeidsavklarings&shy;penger)
          </Heading>
          <BodyShort size="small" className={styles.detail}>
            Mottatt: {format(mottatt, "dd.MM.yyyy hh:mm")}
          </BodyShort>
          {manglerVedlegg ? (
            <Tag variant="warning" size="small">
              Dokumentasjon mangler
            </Tag>
          ) : (
            <Tag variant="neutral" size="small">
              Vi tar kontakt om vi trenger mer informasjon
            </Tag>
          )}
        </>
      </LinkCard>
    </div>
  );
};

export default Komponent;
