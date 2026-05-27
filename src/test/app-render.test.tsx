import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("app render", () => {
  it("renders the home page", async () => {
    window.localStorage.setItem("rawr.language", "de");

    render(<App />);

    expect(
      await screen.findByRole("heading", { name: /KI im HR ist pragmatisch/i }),
    ).toBeInTheDocument();
  });
});
