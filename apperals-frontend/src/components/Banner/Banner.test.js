import { Banner } from "./Banner";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../assets/BannerVideo.mp4", () => "mockVideo.mp4");

describe("Banner Component", () => {
  it("renders the video element and does not show Banner Overlay initially", () => {
    render(<Banner />);
    const video = screen.getByRole("video");
    expect(video).toBeInTheDocument();

    expect(screen.queryByText("Elevate your Style")).not.toBeInTheDocument();
  });

  it("Displays Banner Overlay when the video is played 70%", () => {
    render(<Banner />);

    const video = screen.getByRole("video");

    Object.defineProperty(video, "currentTime", { value: 7, writable: true });
    Object.defineProperty(video, "duration", { value: 10, writable: true });

    fireEvent.timeUpdate(video);

    expect(screen.getByText("Elevate your Style")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Discover your Fashion Identity with our curated Collections"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Shop Now")).toBeInTheDocument();
  });
});
