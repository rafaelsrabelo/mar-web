import React from "react";

import { FiLogIn } from "react-icons/fi";
import logo from './../../../public/logo.svg';

// import logoImg from "./../../../public/logo.react.svg";

import { Background, Container, Content } from "./styles";

function SignIn() {
  return (
    <Container>
        <Content>
          <img src={logo} alt="Mar. Saúde"/>

          <form>
            <h1>Faça seu logon</h1>

            <input placeholder="Email" />

            <input type="password" placeholder="Senha" />
          
            <button type="submit">Entrar</button>
            <a href="/forgout">Esqueci minha senha</a>
          </form>

          <a href="">
            <FiLogIn />
            Criar Conta
          </a>
        </Content>
        <Background />
    </Container>
  );
}

export default SignIn;