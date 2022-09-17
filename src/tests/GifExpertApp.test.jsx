import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

const category = "test";

describe("Pruebas en <GifExpertApp/>", () => {
  test("Debe de añadir una nueva categoría", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(screen.getByText(category)).toBeTruthy();
    // screen.debug();
  });
});
