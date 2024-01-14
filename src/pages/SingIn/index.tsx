import React from "react";
import { Link } from "react-router-dom";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";

import { Background, Container, Content } from "./styles";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

function SignIn() {
  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Mar. Saúde" />

        <form>
          <h1>Faça seu logon</h1>

          <div className="input-div">
            <FiMail size={20} />
            <input placeholder="Email" />
          </div>

          <div className="input-div">
            <FiLock size={20} />
            <input
              type="password"
              placeholder="Senha"
            />
          </div>

          <ButtonComponent>Entrar</ButtonComponent>
          <a href="/forgout">Esqueci minha senha</a>
        </form>

        <Link to="/auth/signup">
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
}

export default SignIn;
