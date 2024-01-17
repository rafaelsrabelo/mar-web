import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { Container, Content } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { Clock, LogOut, Plus } from "lucide-react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface Order {
  id: string;
  customer: string;
  address: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: any;
}

export default function Patiences() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [patientTriage, setPatientTriage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOpenDetailsModal = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setSelectedOrder(null);
    setIsDetailsModalOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/signin");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPatientName("");
    setPatientTriage("");
  };

  const handlePatientSubmit = async () => {
    try {
      if (!patientName || !patientTriage) {
        toast.error("Nome do paciente e triagem são obrigatórios.");
        return;
      }

      const token = localStorage.getItem("@mar:token");

      const orderData = {
        customer: patientName,
        address: patientTriage,
        status: "opened",
      };

      await api.post("/orders", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPatientName("");
      setPatientTriage("");

      setIsModalOpen(false);

      toast.success("Triagem criada com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar pedido:", error.message);
    }
  };

  const handlePatientCancel = async (orderId: string) => {
    try {
      const token = localStorage.getItem("@mar:token");

      await api.put(
        `/orders/${orderId}`,
        { status: "canceled" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Atendimento cancelado!");
      getOrders();
    } catch (error) {
      toast.error("Erro ao cancelar triagem:", error.message);
    }
  };

  const handlePatientFinish = async (orderId: string) => {
    try {
      const token = localStorage.getItem("@mar:token");

      await api.put(
        `/orders/${orderId}`,
        { status: "done" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Atendimento finalizado!");
      getOrders();
      handleCloseDetailsModal();
    } catch (error) {
      toast.error("Erro ao finalizar atendimento:", error.message);
    }
  };

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("@mar:token");

      const response = await api.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, [patientName]);

  const formatarData = (dataString) => {
    const data = new Date(dataString);

    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear().toString().substring(2);
    const horas = data.getHours().toString().padStart(2, "0");
    const minutos = data.getMinutes().toString().padStart(2, "0");

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "opened":
        return "Aguardando";
      case "done":
        return "Atendido";
      case "canceled":
        return "Cancelado";
      default:
        return status;
    }
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

              <div className="mt-4 grid grid-cols-4 gap-4 cards relative">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  orders.map((order) => (
                    <div key={order.id} className="card">
                      <div className="flex items-center card-header text-sm">
                        <Clock width={18} className="me-2" />
                        {formatarData(order.created_at)}
                      </div>
                      <div className="card-body">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm">Nome:</p>
                          <p className="ms-auto text-sm">{order.customer}</p>
                        </div>
                        <span
                          className={`status-label text-sm ${
                            order.status === "done"
                              ? "bg-green-100 text-green-800 text-xs font-medium me-2 px-1 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                              : order.status === "canceled"
                              ? "bg-red-100 text-red-800 text-xs font-medium me-2 px-1 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
                              : "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-1 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {getStatusLabel(order.status)}
                        </span>{" "}
                        <div className="flex mt-2">
                          <button
                            className={`btn-cancel rounded-md px-1 py-1 text-sm flex-grow ${
                              order.status === "done" ||
                              order.status === "canceled"
                                ? "disabled"
                                : ""
                            }`}
                            disabled={
                              order.status === "done" ||
                              order.status === "canceled"
                            }
                            onClick={() => handlePatientCancel(order.id)}
                          >
                            Cancelar
                          </button>
                          <button
                            className={`btn-details rounded-md px-1 py-1 ms-2 text-sm flex-grow`}
                            onClick={() => handleOpenDetailsModal(order)}
                          >
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
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
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </div>

                      <div className="mb-4 w-full">
                        <label htmlFor="triage" className="text-gray-100">
                          Triagem do Paciente
                        </label>
                        <textarea
                          id="triage"
                          placeholder="Digite a triagem do paciente"
                          className="w-full py-2 px-4 border rounded-md bg-gray-800 resize-y"
                          rows={4}
                          value={patientTriage}
                          onChange={(e) => setPatientTriage(e.target.value)}
                        />
                      </div>

                      <button
                        type="button"
                        className="button-primary"
                        onClick={handlePatientSubmit}
                      >
                        Cadastrar
                      </button>
                    </form>
                  </Modal>
                </div>
              )}
            </div>

            <div className="fixed bottom-4 right-4">
              <button
                className="flex items-center justify-center modal-open w-full"
                onClick={handleOpenModal}
              >
                <Plus className="mr-2" />
                Cadastrar triagem
              </button>
            </div>
          </main>
        </div>
      </Content>

      {selectedOrder && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <Modal open={isDetailsModalOpen} onClose={handleCloseDetailsModal}>
            <h2 className="mt-4 text-center mb-2 text-2xl text-gray-100">
              Detalhes da Triagem
            </h2>
            <p>Nome do Paciente: {selectedOrder.customer}</p>
            <p className="mt-2">Triagem: {selectedOrder.address}</p>

            <div className="mt-4 flex">
              <button
                className={`flex-grow btn-details text-white px-4 py-2 rounded-md ${
                  selectedOrder.status === "done" ||
                  selectedOrder.status === "canceled"
                    ? "disabled"
                    : ""
                }`}
                disabled={
                  selectedOrder.status === "done" ||
                  selectedOrder.status === "canceled"
                }
                onClick={() => handlePatientFinish(selectedOrder.id)}
                style={
                  selectedOrder.status === "done" ||
                  selectedOrder.status === "canceled"
                    ? { cursor: "not-allowed" }
                    : {}
                }
              >
                Finalizar Atendimento
              </button>
            </div>
          </Modal>
        </div>
      )}
    </Container>
  );
}
