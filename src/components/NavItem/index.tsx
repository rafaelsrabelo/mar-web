import { ChevronRight } from 'lucide-react';
import React from 'react';
import { ElementType } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  title: string;
  icon: ElementType;
  route: string;
}

export function NavItem({ title, icon: Icon, route }: NavItemProps) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        ` flex items-center gap-3 rounded px-3 py-2  ${isActive ? 'bg-gray-800 text-blue-500' : ''}`
      }
    >
      <Icon className="h-5 w-5 text-zinc-500 " />
      <span className="font-medium text-zinc-300 text-sm">{title}</span>
      <ChevronRight className="ml-auto h-5 w-5 text-zinc-400 " />
    </NavLink>
  );
}