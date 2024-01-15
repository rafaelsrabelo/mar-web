import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ButtonComponent } from "../../components/Button";
import { FormHandles } from "@unform/core";
import { Background, Container, Content, AnimationContainer } from "./styles";
import * as Yup from "yup";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { api } from "../../services/api";
import { toast } from "react-toastify";

function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  async function handleSignup(data: any) {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, { abortEarly: false });

      const response = await api.post("/auth/signup", user);

      if (response.status === 201) {
        console.log("Cadastro realizado com sucesso!");
        reset();
        toast.success("Conta criada");
      } else {
        toast.error("Erro ao cadastrar. Verifique os dados e tente novamente.");

        if (response.status === 409) {
          toast.error("E-mail já cadastrado. Por favor, escolha outro e-mail.");
        }

        console.error("Falha no cadastro. Status:", response.status);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // Exibindo mensagens de erro do Yup usando toast
        error.errors.forEach((errorMsg: string) => {
          toast.error(errorMsg);
        });
      } else if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.error("Erro durante o cadastro:", error.message);
      }
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src="/logo.svg" alt="Mar. Saúde" />

          <form ref={formRef} onSubmit={handleSubmit(handleSignup)}>
            <h1>Faça seu cadastro</h1>

            <div className="input-div">
              <FiUser size={20} />
              <input {...register("name")} placeholder="Nome completo" />
            </div>
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

            <ButtonComponent disabled={isSubmitting} type="submit">
              Cadastrar
            </ButtonComponent>
          </form>

          <Link to="/auth/signin">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default SignUp;
