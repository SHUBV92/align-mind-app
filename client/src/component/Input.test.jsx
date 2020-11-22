import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

it("should take snapshot", () => {
  const { asFragment } = render(<Input />);

  expect(asFragment(<Input />)).toMatchSnapshot();
});
