import { NavLink } from "react-router-dom";
import type { SidebarItemProps } from "./types/sidebar";

export default function SidebarItem({ icon, label, to }: SidebarItemProps) {
  const Icon = icon;
  return (
    <li>
      <NavLink to={to} className="sidebar_item">
        <Icon className="sidebar_icons" /> <span>{label}</span>
      </NavLink>
    </li>
  );
}