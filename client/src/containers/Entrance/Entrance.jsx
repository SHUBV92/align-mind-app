import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import { EntranceWrapper } from "./Entrance.styles";

const Entrance = () => {
  return (
    <EntranceWrapper>
      <header>Align Mind</header>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </EntranceWrapper>
  );
};

export default Entrance;
