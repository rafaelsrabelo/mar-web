import React from "react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("@mar:token");

  return token ? children : <Navigate to="/auth/signin" />;
}
