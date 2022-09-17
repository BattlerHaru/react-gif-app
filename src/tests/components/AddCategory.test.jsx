const { render, screen, fireEvent } = require("@testing-library/react");

import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const search = "test";

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: search } });

    // screen.debug()

    expect(input.value).toBe(search);
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: search } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(search);
  });

  test("No debe de llamar el onNewCategory si el input esta vació", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
