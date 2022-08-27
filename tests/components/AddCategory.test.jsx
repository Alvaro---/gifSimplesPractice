import {
  fireEvent,
  render,
  screen,
  toHaveBeenCalled,
  toHaveBenCalledWith,
  toHaveBeenCalledTimes,
} from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("pruebas en addCategory", () => {
  test("should change box text", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    // const input = screen.getByRole("paragraph"); // Un parrafo no existe, por lo que dispararia un error
    const input = screen.getByRole("textbox"); // Por que solo hay un textbox que es el input
    fireEvent.input(input, { target: { value: "saitama" } });
    expect(input.value).toBe("saitama");
    // screen.debug();
  });

  test("should call onNewCateory if input has value", () => {
    const inputValue = "Saitama";
    const onAddCategory = jest.fn();
    //TODO:??
    //Sujeto de pruebas
    render(<AddCategory onAddCategory={onAddCategory} />);
    //Elementos a probar
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    //Disparar evento
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    screen.debug();

    expect(input.value).toBe("");
    expect(onAddCategory).toHaveBeenCalled(); //Solo dice si la prueba se mando a llamar
    expect(onAddCategory).toHaveBeenCalledTimes(1); //Solo dice si la prueba se mando a llamar
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onAddCateory if the input is vincid", () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
