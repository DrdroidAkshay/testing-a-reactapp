import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greetings", () => {
  test("renders hello world", () => {
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
  test("renders good to see you if the button was clicked", () => {
    //Arrange
    render(<Greetings />);
    //Act
    // ...nothing

    //Assert
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  test("renders Changed if the button was not clicked", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  test("not render good to see you if button is not clicked", () => {
    render(<Greetings />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).not.toBeInTheDocument();
  });
});
