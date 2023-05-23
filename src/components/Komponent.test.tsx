import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Komponent from "./Komponent";

describe("Simple working test for Komponent", () => {
  it("has a text", () => {
    render(<Komponent mottatt={new Date()} manglerVedlegg={true} />);
    expect(screen.getByText("Søknad om AAP (arbeidsavklarings\u00ADpenger)")).toBeDefined();
  });
});
