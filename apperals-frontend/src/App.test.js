import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Routes, Route } from "react-router-dom";

jest.mock("./AppRoutes", () => () => (
  <div data-testid="app-routes">AppRoutes Mock</div>
));

describe("App Component", () => {
  it("Renders app structure correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const appContainer = screen.getByRole("main");
    expect(appContainer).toBeInTheDocument();

    const appRoutes = screen.getByTestId("app-routes");
    expect(appRoutes).toBeInTheDocument();
  });

  it("renders outlet content with nested routes", () => {
    render(
      <MemoryRouter initialEntries={["/nested"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="nested" element={<div>Nested Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Nested Content")).toBeInTheDocument();
  });
});
