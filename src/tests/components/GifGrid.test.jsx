import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "test";
  const loadingText = "Cargando...";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();

    expect(screen.getByText(loadingText));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "1231",
        title: "test 1",
        url: "https://localhost/test_1.jpg",
      },
      {
        id: "1234",
        title: "test 2",
        url: "https://localhost/test_5.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
