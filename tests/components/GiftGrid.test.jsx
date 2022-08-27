import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock("../../src/hooks/useFetchGifts");

describe("GiftGrid test", () => {
  const category = "One punch";

  test("should show loading", () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isloading: true,
    }); //Simulamos que retormanos este
    render(<GiftGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test("should show items when images loaded", () => {
    const gifs = [
      {
        id: "abc",
        title: "goku",
        url: "https://localhost.saitama",
      },
    ];
    useFetchGifts.mockReturnValue({
      images: gifs,
      isloading: true,
    }); //Simulamos que retormanos este
    render(<GiftGrid category={category} />);
    // screen.debug();
    //validar cualquier cosa del componente
    expect(screen.getAllByRole("img").length).toBe(1); //1 por que estoy simulando (con la const gifs), que llega un solo valor
  });
});
