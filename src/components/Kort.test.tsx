import { format } from "date-fns";
import { describe, expect, it } from "vitest";
import { isAfterStandardSaksbehandlingstid } from "../utils/innsending.ts";
import { render, screen } from "../utils/test.tsx";
import KortGenerell from "./KortGenerell.tsx";
import KortMottatSoknad from "./KortMottatSoknad.tsx";

describe("KortGenerell og KortMottattSoknad", () => {
  it("dagens dato er ikke eldre enn 13 uker", () => {
    const mottatt = new Date().toISOString();
    const isOlderThanThirteen = isAfterStandardSaksbehandlingstid(mottatt);
    expect(isOlderThanThirteen).toEqual(false);
  });

  it("01.01.2024 er eldre enn 13 uker", () => {
    const mottatt = new Date("2024-11-17T15:02:01.737467").toISOString();
    const isOlderThanThirteen = isAfterStandardSaksbehandlingstid(mottatt);
    expect(isOlderThanThirteen).toEqual(true);
  });

  it("should have a headline KortGenerell", () => {
    render(<KortMottatSoknad href={"/"} mottatt={new Date()} language={"nb"} />);
    expect(screen.getByText("Søknad om arbeidsavklarings\u00ADpenger (AAP)")).toBeDefined();
  });

  it("should have a headline KortGenerell", () => {
    render(<KortGenerell href={"/"} language={"nb"} />);
    expect(screen.getByText("Arbeidsavklaringspenger (AAP)")).toBeDefined();
  });

  it("should show correct layout if application was recieved more than 13 weeks ago", () => {
    render(<KortGenerell href={"/"} language={"nb"} />);

    const linkText = screen.getByText("Se meldekort, ettersend dokumenter, eller meld fra om endringer");
    expect(linkText).toBeDefined();
  });

  it("should show correct layout if application was recieved less than 13 weeks ago", () => {
    const date = new Date();
    render(<KortMottatSoknad href={"/"} mottatt={date} language={"nb"} />);

    const formatedDate = format(date, "dd.MM.yyyy HH:mm");

    const linkText = screen.getByText(`Mottatt: ${formatedDate}`);
    expect(linkText).toBeDefined();
  });
});
