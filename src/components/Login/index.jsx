import React from "react";
import Form from "../Form";
import * as C from "./style";

const Login = () => {
  return (
    <C.Container>
      <C.Box>
        <C.BoxImage />
        <C.BoxForm>
          <Form />
        </C.BoxForm>
      </C.Box>
    </C.Container>
  );
};

export default Login;
