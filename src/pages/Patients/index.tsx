import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import { Container, Content } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { LogOut, Plus } from "lucide-react";

export default function Patiences() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/auth/signin");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <div className="">
              <h1 className="text-3xl font-bold">Pacientes</h1>

              <button
                className="flex items-center modal-open w-full"
                onClick={handleOpenModal}
              >
                <Plus className="mr-2" />
                Cadastrar triagem
              </button>

              <Modal open={isModalOpen} onClose={handleCloseModal}>
                <h2 className="mt-4 text-center mb-2 text-2xl text-gray-100">
                  Cadastro do paciente
                </h2>
                <form className="flex flex-col items-center">
                  <div className="mb-4 w-full">
                    <label htmlFor="clientName" className="text-gray-100">
                      Nome do Paciente
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      placeholder="Digite o nome do paciente"
                      className="w-full py-2 px-4 border rounded-md bg-gray-800"
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <label htmlFor="triage" className="text-gray-100">
                      Triagem do Paciente
                    </label>
                    <textarea
                      id="triage"
                      placeholder="Digite a triagem do paciente"
                      className="w-full py-2 px-4 border rounded-md bg-gray-800 resize-y" // Alteração para textarea
                      rows={4} // Número de linhas visíveis
                    />
                  </div>

                  <button
                    type="submit"
                    className="button-primary"
                  >
                    Cadastrar
                  </button>
                </form>
              </Modal>
            </div>
          </main>
        </div>
      </Content>
    </Container>
  );
}
