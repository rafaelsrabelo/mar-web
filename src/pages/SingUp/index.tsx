import React from "react";

import { FiArrowLeft, FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";
import logo from './../../../public/logo.svg';

import { Background, Container, Content } from "./styles";
import {InputComponent} from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

function SignUp() {
  return (
    <Container>
        <Background />
        <Content>
          <img src={logo} alt="Mar. Saúde"/>

          <form>
            <h1>Faça seu cadastro</h1>

            <InputComponent icon={FiUser} name="nome" placeholder="Nome Completo" />

            <InputComponent icon={FiMail} name="email" placeholder="Email" />
            
            <InputComponent icon={FiLock} name="password" type="password" placeholder="Senha" />

            <ButtonComponent>
              Cadastrar
            </ButtonComponent>
          </form>

          <a href="">
            <FiArrowLeft />
            Voltar
          </a>
        </Content>
    </Container>
  );
}

export default SignUp;