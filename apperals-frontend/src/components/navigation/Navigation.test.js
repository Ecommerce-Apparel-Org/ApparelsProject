import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import { render, screen, waitFor, act } from "@testing-library/react";

describe("Navigation Component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      writeable: true,
      value: 0,
    });
  });

  it("renders navigation links correctly", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    expect(screen.getByText("Fashion Fusion")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Page 1")).toBeInTheDocument();
    expect(screen.getByText("Page 2")).toBeInTheDocument();
  });

  it("applies sticky class when scrolled past 100px", async () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const container = screen.getByRole("navigation");
    expect(container).not.toHaveClass("sticky");

    act(() => {
      window.scrollY = 150;
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => expect(container).toHaveClass("sticky"));
  });

  it("removes sticky class when scrolled back above 100px", async () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const container = screen.getByRole("navigation");

    act(() => {
      window.scrollY = 150;
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => expect(container).toHaveClass("sticky"));

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => expect(container).not.toHaveClass("sticky"));
  });
});
