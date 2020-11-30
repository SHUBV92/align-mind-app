import React from "react";
import { Container } from "./Card.styles.jsx";

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
