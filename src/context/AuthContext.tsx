import React, { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthState {
  token: string;
  name: string;
  email?: string;
}

interface SignInCredentials {
  email?: string;
  password: string;
}

interface AuthContextProps {
  name: string;
  email?: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }: any) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@mar:token");
    const name = localStorage.getItem("@mar:name");

    if (token && name) {
      return { token, name };
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/auth/signin", { email, password });
      const { acess_token: token, name, userEmail } = response.data;
  
      localStorage.setItem("@mar:token", token);
      localStorage.setItem("@mar:name", name);
      localStorage.setItem("@mar:email", userEmail);
  
      setData({ token, name, email: userEmail });
  
      toast.success(`Usuário logado: ${localStorage.getItem("@mar:name")}`);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
  
        if (status === 401) {
          toast.error("Senha incorreta. Tente novamente.");
        } else {
          toast.error(`Erro durante o login: ${data.message}`);
        }
      } else {
        console.error("Erro durante o login:", error.message);
      }
    }
  }, []);
  

  const logout = useCallback(() => {
    localStorage.removeItem("@mar:token");
    localStorage.removeItem("@mar:name");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        name: data.name,
        signIn,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
export { AuthProvider, useAuth };
