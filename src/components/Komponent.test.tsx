import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Komponent from "./Komponent";
import { format, subWeeks } from "date-fns";

describe("Micro frontend", () => {
  it("should have a headline", () => {
    render(<Komponent mottatt={new Date()} />);
    expect(screen.getByText("Søknad om AAP (arbeidsavklarings\u00ADpenger)")).toBeDefined();
  });

  it("should show correct layout if application was recieved more than 13 weeks ago", () => {
    const date = subWeeks(new Date(), 14);
    render(<Komponent mottatt={date} />);

    const linkText = screen.getByText("Oversikt over saken din");
    expect(linkText).toBeDefined();
  });

  it("should show correct layout if application was recieved less than 13 weeks ago", () => {
    const date = new Date();
    render(<Komponent mottatt={date} />);

    const formatedDate = format(date, "dd.MM.yyyy hh:mm");

    const linkText = screen.getByText(`Mottatt: ${formatedDate}`);
    expect(linkText).toBeDefined();
  });
});
