import React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "../utils/test-utils";
import Komponent from "./Komponent";

describe("Simple working test for Komponent", () => {
  it("has a text", () => {
    render(<Komponent mottatt={new Date()} manglerVedlegg={true} søknadId="123" />);
    expect(screen.getByText("Søknad om AAP (arbeidsavklaringspenger)")).toBeDefined();
  });
});
