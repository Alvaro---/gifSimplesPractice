import { render, screen } from "@testing-library/react";
import { GiftGridItem } from "../../src/components/GiftGridItem";

describe("Pruebas en GiftGridItem", () => {
  const title = "saitama";
  const url = "https://test.com/";
  test("should match snapshot", () => {
    const { container } = render(<GiftGridItem title={title} imageUrl={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show image whit url and alt", () => {
    render(<GiftGridItem title={title} imageUrl={url} />);
    // screen.debug(); // Para ver el snapshot
    // console.log(screen.getByRole("img").src);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("should show title in component", () => {
    render(<GiftGridItem title={title} imageUrl={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
