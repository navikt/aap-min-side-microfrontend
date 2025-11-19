import { Box, LinkCard } from "@navikt/ds-react";
import { text } from "../language/text.ts";
import type { Language } from "../language/types.ts";
import { Piktogram } from "./Piktogram.tsx";

interface Props {
  language: Language;
}
const KortGenerell = ({ language }: Props) => {
  return (
    <LinkCard>
      <Box asChild borderRadius="12" padding="space-8" style={{ backgroundColor: "var(--ax-bg-moderateA)" }}>
        <LinkCard.Icon>
          <Piktogram />
        </LinkCard.Icon>
      </Box>
      <LinkCard.Title as={"h3"}>
        <LinkCard.Anchor href="/eksempel">{text.card.aapHeading[language]}</LinkCard.Anchor>
      </LinkCard.Title>
      <LinkCard.Description>{text.card.aapDescription[language]}</LinkCard.Description>
    </LinkCard>
  );
};
export default KortGenerell;
