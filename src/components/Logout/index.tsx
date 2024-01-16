import React from "react";
import { LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/signin");
  };

  return (
    <div className="">
      <button className="flex items-center " type="submit" onSubmit={handleLogout}>
        Sair
        <LogOut className="ml-3 h-5 w-5 text-red-500" />
      </button>
    </div>
  );
}
