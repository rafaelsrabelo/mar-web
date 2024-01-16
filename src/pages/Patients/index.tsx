import React from "react";
import SideBar from "../../components/SideBar";
import { Container, Content } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../components/Logout";

export default function Patiences() {
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

        <Logout />
      </header>
      <Content>
        <div className="grid min-h-screen">
          <SideBar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-4 lg:pt-2">
            <h1 className="text-3xl font-bold text-white mb-4">Pacientes</h1>
          </main>
        </div>
      </Content>
    </Container>
  );
}