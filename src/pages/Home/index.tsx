import React from "react";
import SideBar from "../../components/SideBar";
import { Container, Content } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../components/Logout";
import { LogOut } from "lucide-react";

export default function Home() {
  const { name, email, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/signin");
  };

  return (
    <Container>
      <header className="flex items-center">
        <img src="/logo.png" alt="" />

        <button className="flex items-center" onClick={handleLogout}>
          Sair
          <LogOut className="ml-3 h-5 w-5 text-red-500" />
        </button>
      </header>
      <Content>
        <div className="grid min-h-screen">
          <SideBar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-4 lg:pt-2">
            <h1 className="text-3xl font-bold text-white mb-4">Olá, {name}!</h1>
            <p className="text-gray-300">
              Seja parte da revolução na gestão de triagem hospitalar com o mar.
              algoritmos de saúde. Desenvolvemos esta plataforma para otimizar e
              agilizar o processo de triagem, garantindo que os pacientes
              recebam o cuidado necessário de forma eficiente.
            </p>
          </main>
        </div>
      </Content>
    </Container>
  );
}
