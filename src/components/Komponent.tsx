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
}

const Komponent = ({ mottatt }: Props) => {
  const url = mineAapUrl; //`${mineAapUrl}${manglerVedlegg ? `${søknadId}/ettersendelse/` : ""}`;
  const language = useContext(LanguageContext);

  const isAfterStandardSaksbehandlingstid = isAfter(sub(new Date(), { weeks: 13 }), mottatt);

  return (
    <div className={styles.mikrofrontend}>
      <LinkCard href={url}>
        {isAfterStandardSaksbehandlingstid ? (
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
              {text.card.recieved[language]} {format(mottatt, "dd.MM.yyyy HH:mm")}
            </BodyShort>
            <Tag variant="neutral-moderate" size="small">
              {text.card.tarKontakt[language]}
            </Tag>
          </>
        )}
      </LinkCard>
    </div>
  );
};

export default Komponent;
