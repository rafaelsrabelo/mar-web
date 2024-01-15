import React, { createContext, useCallback, useState } from "react";
import { api } from "../services/api";

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
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@mar:token");
    const name = localStorage.getItem("@mar:name");
    const userEmail = localStorage.getItem("@mar:email");

    if (token && name ) {
      return { token, name, email: userEmail };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/auth/signin", { email, password });
      console.log(response.data);
      const { acess_token: token, name, userEmail } = response.data;

      localStorage.setItem("@mar:token", token);
      localStorage.setItem("@mar:name", name);
      localStorage.setItem("@mar:email", userEmail);

      setData({ token, name, email: userEmail });
    } catch (error) {
      console.error("Error during signIn:", error.message);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        name: data.name,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
