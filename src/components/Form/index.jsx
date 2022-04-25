import React, { useState } from "react";
import * as C from "./style";
const Form = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!usuario || !senha) {
      alert("Preencha todos os campos para realizar o login");
      return;
    } else {
      console.log(usuario, senha);
      alert("Usuário logado com sucesso!");
      setUsuario("");
      setSenha("");
    }
  };
  return (
    <>
      <C.FormContent>
        <C.Title>Faça o seu Login</C.Title>
        <C.Input
          type="text"
          placeholder="Digite o seu Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <C.Input
          type="password"
          placeholder="Digite a sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <C.Button onClick={handleLogin}>Logar</C.Button>
      </C.FormContent>
    </>
  );
};

export default Form;
