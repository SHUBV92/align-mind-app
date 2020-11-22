// packages
import React, { useState } from "react";

// components
import Button from "../../components/Button";
import Input from "../../components/Input";

// styles
import { Container, InputField } from "./LoginPage.styles";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ name: "Shubs", email: "" });

  const handleChange = (event) => {
    setUserDetails({ name: event.target.value });
  };

  return (
    <Container>
      <InputField>
        <h1>Login</h1>
        <hr />
        <Input
          label="Full Name"
          type="text"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleChange}
        />
        <br />
        <Input
          label="Email"
          type="email"
          placeholder="Email Address"
          value=""
          onChange={handleChange}
        />
        <br />
        <Button>Submit</Button>
      </InputField>
    </Container>
  );
};

export default Login;
