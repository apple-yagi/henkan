import { render } from "@testing-library/react";
import { it, expect } from "vitest";

import Page from "./page";

it("should render the page", () => {
  const { asFragment, getByText } = render(<Page />);

  expect(getByText("Hello World")).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
