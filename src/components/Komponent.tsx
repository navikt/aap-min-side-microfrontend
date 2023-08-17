import React, { useContext } from "react";
import { BodyShort, Heading, Tag } from "@navikt/ds-react";
import { format, isAfter, sub } from "date-fns";
import { mineAapUrl } from "../api/urls";
import styles from "./Komponent.module.css";
import LinkCard from "./card/LinkCard";
import { LanguageContext } from "../provider/LanguageProvider";
import { text } from "../translations/text";
import { Piktogram } from "./Piktogram";

interface Props {
  mottatt: Date;
  manglerVedlegg: boolean;
}

const Komponent = ({ mottatt, manglerVedlegg }: Props) => {
  const url = mineAapUrl; //`${mineAapUrl}${manglerVedlegg ? `${søknadId}/ettersendelse/` : ""}`;
  const language = useContext(LanguageContext);

  const isAfter7weeks = isAfter(sub(new Date(), { weeks: 7 }), mottatt);

  return (
    <div className={styles.mikrofrontend}>
      <LinkCard href={url}>
        {isAfter7weeks ? (
          <div className={styles.flex}>
            <div>
              <Piktogram />
            </div>
            <div>
              <Heading level="3" size="small" className={styles.heading}>
                {text.card.aapHeading[language]}
              </Heading>
              <BodyShort size="small" className={styles.detail}>
                {text.card.aapDescription[language]}
              </BodyShort>
            </div>
          </div>
        ) : (
          <>
            <Heading level="3" size="small" className={styles.heading}>
              {text.card.heading[language]}
            </Heading>
            <BodyShort size="small" className={styles.detail}>
              {text.card.recieved[language]} {format(mottatt, "dd.MM.yyyy hh:mm")}
            </BodyShort>
            {manglerVedlegg ? (
              <Tag variant="warning-moderate" size="small">
                {text.card.dokumentasjonMangler[language]}
              </Tag>
            ) : (
              <Tag variant="neutral-moderate" size="small">
                {text.card.tarKontakt[language]}
              </Tag>
            )}
          </>
        )}
      </LinkCard>
    </div>
  );
};

export default Komponent;
