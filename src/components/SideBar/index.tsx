import React from "react";
import { Container } from "./styles";
import { NavItem } from "../NavItem";
import { CircleUser, Home } from "lucide-react";

export default function SideBar() {
  return (
    <Container className="flex flex-col h-full">
      <NavItem route="/home" title="Início" icon={Home} />
      <NavItem route="/patiences" title="Pacientes" icon={CircleUser} />
    </Container>
  );
}
