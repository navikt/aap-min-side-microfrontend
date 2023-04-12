import React, { useContext } from "react";
import { BodyShort, Heading, Tag } from "@navikt/ds-react";
import { format } from "date-fns";
import { mineAapUrl } from "../api/urls";
import styles from "./Komponent.module.css";
import LinkCard from "./card/LinkCard";
import { LanguageContext } from "../provider/LanguageProvider";
import { text } from "../translations/text";

interface Props {
  mottatt: Date;
  manglerVedlegg: boolean;
}

const Komponent = ({ mottatt, manglerVedlegg }: Props) => {
  const url = mineAapUrl; //`${mineAapUrl}${manglerVedlegg ? `${søknadId}/ettersendelse/` : ""}`;
  const language = useContext(LanguageContext);
  return (
    <div className={styles.mikrofrontend}>
      <LinkCard href={url}>
        <>
          <Heading level="3" size="small" className={styles.heading}>
            {text.card.heading[language]}
          </Heading>
          <BodyShort size="small" className={styles.detail}>
            {text.card.recieved[language]} {format(mottatt, "dd.MM.yyyy hh:mm")}
          </BodyShort>
          {manglerVedlegg ? (
            <Tag variant="warning" size="small">
              {text.card.dokumentasjonMangler[language]}
            </Tag>
          ) : (
            <Tag variant="neutral" size="small">
              {text.card.tarKontakt[language]}
            </Tag>
          )}
        </>
      </LinkCard>
    </div>
  );
};

export default Komponent;
