import { NavLink } from "react-router-dom";
import type { SidebarItemProps } from "../../types/sidebar";
import { useToggleStore } from "../../store/toggleStore";

export default function SidebarItem({ icon, label, to }: SidebarItemProps) {
  const { isOpen } = useToggleStore();
  const Icon = icon;

  return (
    <li>
      <NavLink to={to} className={`sidebar_item ${isOpen ? "isactive" : ""}`}>
        <Icon className="sidebar_icons" /> <span>{label}</span>
      </NavLink>
    </li>
  );
}
