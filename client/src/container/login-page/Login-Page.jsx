import React from "react";
import Button from "../../component/Button";
import Input from "../../component/Input";
import { Container, InputField } from "./Login-page.styles";

const Login = () => {
  return (
    <Container>
      <InputField>
      <h1>Login</h1>
      <hr />
      <Input className="input" label="Full Name" type="text" placeholder="Name" />
      <br />
      <Input className="input" label="Email" type="email" placeholder="Email Address" />
      <br />
      <Button name="Submit" />
      </InputField>
    </Container>
  );
};

export default Login;
