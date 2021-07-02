import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Test", () => {
  test("renders posts if requests succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", value: "First Post" }],
    });
    render(<Async />);

    const listItem = await screen.findAllByRole("listitem");
    expect(listItem).not.toHaveLength(0);
  });
});
