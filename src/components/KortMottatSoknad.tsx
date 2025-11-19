import {  LinkCard, Tag } from "@navikt/ds-react";
import { text } from "../language/text.ts";
import React from "react";
import type { Language } from "../language/types.ts";
import { format } from "date-fns";

interface Props {
  mottatt: Date;
  language: Language;
}
const KortMottatSoknad = ({mottatt, language}: Props) => {
  return (
    <LinkCard>
      <LinkCard.Title as={"h3"}>
        <LinkCard.Anchor href="/eksempel">{text.card.heading[language]}</LinkCard.Anchor>
      </LinkCard.Title>
      <LinkCard.Description>
        {text.card.recieved[language]} {format(mottatt, "dd.MM.yyyy HH:mm")}
      </LinkCard.Description>
      <LinkCard.Footer>
        <Tag variant="neutral-moderate" size="small">
          {text.card.tarKontakt[language]}
        </Tag>
      </LinkCard.Footer>
    </LinkCard>
  )
}
export default KortMottatSoknad;