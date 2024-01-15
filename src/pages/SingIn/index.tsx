import React, { useCallback, useContext, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import * as Yup from "yup";
import { Background, Container, Content } from "./styles";
import { ButtonComponent } from "../../components/Button";
import { FormHandles } from "@unform/core";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

interface SignInFormData {
  email: string;
  password: string;
}

function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const { signIn, name } = useAuth();
  console.log(`meu nome é ${name}`)

  const handleSignin = useCallback(async (data: SignInFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail obrigatório"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, { abortEarly: false });

      signIn({
        email: data.email,
        password: data.password,
      });

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.errors.forEach((errorMsg: string) => {
          toast.error(errorMsg);
        });
      } else if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.error("Erro durante o cadastro:", error.message);
      }
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Mar. Saúde" />

        <form ref={formRef} onSubmit={handleSubmit(handleSignin)}>
          <h1>Faça seu logon</h1>

          <div className="input-div">
            <FiMail size={20} />
            <input {...register("email")} placeholder="Email" />
          </div>

          <div className="input-div">
            <FiLock size={20} />
            <input
              {...register("password")}
              type="password"
              placeholder="Senha"
            />
          </div>

          <ButtonComponent type="submit" disabled={isSubmitting}>
            Entrar
          </ButtonComponent>
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
