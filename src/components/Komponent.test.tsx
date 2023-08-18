import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Komponent from "./Komponent";
import { format, subWeeks } from "date-fns";

describe("Micro frontend", () => {
  it("should have a headline", () => {
    render(<Komponent mottatt={new Date()} manglerVedlegg={true} />);
    expect(screen.getByText("Søknad om AAP (arbeidsavklarings\u00ADpenger)")).toBeDefined();
  });

  it("should show correct layout if application was recieved more than 11 weeks ago", () => {
    const date = subWeeks(new Date(), 12);
    render(<Komponent mottatt={date} manglerVedlegg={true} />);

    const linkText = screen.getByText("Oversikt over saken din");
    expect(linkText).toBeDefined();
  });

  it("should show correct layout if application was recieved less than 11 weeks ago", () => {
    const date = new Date();
    render(<Komponent mottatt={date} manglerVedlegg={true} />);

    const formatedDate = format(date, "dd.MM.yyyy HH:mm");

    const linkText = screen.getByText(`Mottatt: ${formatedDate}`);
    expect(linkText).toBeDefined();
  });

  it("should show message that attachments is missing if they are", () => {
    render(<Komponent mottatt={new Date()} manglerVedlegg={true} />);

    const warningMessage = screen.getByText("Dokumentasjon mangler");

    expect(warningMessage).toBeDefined();
  });

  it("should not show message that attachments is missing if they are present", () => {
    render(<Komponent mottatt={new Date()} manglerVedlegg={false} />);

    const warningMessage = screen.queryByText("Dokumentasjon mangler");

    expect(warningMessage).toBeNull();
  });
});
