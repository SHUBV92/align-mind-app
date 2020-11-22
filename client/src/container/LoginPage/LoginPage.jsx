import React, { useState } from "react";
import Button from "../../component/Button";
import Input from "../../component/Input";
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
          className="input"
          label="Full Name"
          type="text"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleChange}
        />
        <br />
        <Input
          className="input"
          label="Email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <br />
        <Button name="Submit" />
      </InputField>
    </Container>
  );
};

export default Login;
