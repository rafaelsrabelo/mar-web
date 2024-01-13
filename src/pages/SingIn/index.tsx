import React from "react";

import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import logo from './../../../public/logo.svg';

import { Background, Container, Content } from "./styles";
import {InputComponent} from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

function SignIn() {
  return (
    <Container>
        <Content>
          <img src={logo} alt="Mar. Saúde"/>

          <form>
            <h1>Faça seu logon</h1>

            <InputComponent icon={FiMail} name="email" placeholder="Email" />
            
            <InputComponent icon={FiLock} name="password" type="password" placeholder="Senha" />

            <ButtonComponent>
              Entrar
            </ButtonComponent>
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