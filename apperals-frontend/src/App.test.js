import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

jest.mock("./components/Navigation.js", () => () => (
    <div data-testid="navigation">Navigation Mock</div>
  ));

describe("App component", () => {
    it("Renders app structure correctly", () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    })

    const appContainer = screen.getByRole("main");
    expect(appContainer).toBeInTheDocument();
});