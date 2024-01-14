import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

import { Background, Container, Content } from "./styles";

import { FiArrowLeft, FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";

const signUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  confirmation_password: z.string().min(6),
});
const signUpFormWithValidation = signUpForm.refine(data => data.password === data.confirmation_password, {
  message: "A senha e a confirmação de senha devem ser iguais",
});

type SignUpForm = z.infer<typeof signUpFormWithValidation>;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  async function handleSignUp(data: SignUpForm) {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }


    console.log(user);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src="/logo.svg" alt="Mar. Saúde" />

        <form onSubmit={handleSubmit(handleSignUp)}>
          <h1>Faça seu cadastro</h1>

          <div className="input-div">
            <FiUser size={20} />
            <input
              {...register("name")}
              // icon={FiUser}
              placeholder="Nome completo"
            />
          </div>

          <div className="input-div">
            <FiMail size={20} />

            <input
              {...register("email")}
              // icon={FiMail}
              placeholder="Email"
            />
          </div>

          <div className="input-div">
            <FiLock size={20} />

            <input
              {...register("password")}
              // icon={FiLock}
              type="password"
              placeholder="Senha"
            />
          </div>

          <div className="input-div">
            <FiLock size={20} />

            <input
              {...register("confirmation_password")}
              // icon={FiLock}
              type="password"
              placeholder="Confirmar Senha"
            />
          </div>

          <ButtonComponent disabled={isSubmitting} type="submit">
            Cadastrar
          </ButtonComponent>
        </form>
        <Link to="/auth/signin">
          <FiArrowLeft />
          Voltar
        </Link>
      </Content>
    </Container>
  );
}

export default SignUp;
