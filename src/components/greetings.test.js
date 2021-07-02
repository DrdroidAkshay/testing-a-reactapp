import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

describe("Greetings", () => {
  test("test hello world", () => {
    //Arrange
    render(<Greetings />);
    //Act
    // ...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("test good to see you", () => {
    //Arrange
    render(<Greetings />);
    //Act
    // ...nothing

    //Assert
    const helloWorldElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
