import { createContext } from "react";

interface AuthContextProps {
    name: string;
    email: string;
    token: string;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;
