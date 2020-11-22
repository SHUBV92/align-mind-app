import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

it("should take snapshot", () => {
  const { asFragment } = render(<Button />);

  expect(asFragment(<Button />)).toMatchSnapshot();
});
