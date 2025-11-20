import { MINE_AAP_URL } from "astro:env/server";
import { LinkCard, Tag } from "@navikt/ds-react";
import { format } from "date-fns";
import { text } from "../language/text.ts";
import type { Language } from "../language/types.ts";

interface Props {
  mottatt: Date;
  language: Language;
}
const KortMottatSoknad = ({ mottatt, language }: Props) => {
  return (
    <LinkCard>
      <LinkCard.Title as={"h3"}>
        <LinkCard.Anchor href={MINE_AAP_URL}>{text.card.heading[language]}</LinkCard.Anchor>
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
  );
};
export default KortMottatSoknad;
