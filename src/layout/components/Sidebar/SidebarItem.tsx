import type { SidebarItemProps } from "./types/sidebar";

export default function SidebarItem({ icon, label }: SidebarItemProps) {
  const Icon = icon;
  return (
    <li className="sidebar_item">
      <Icon className="sidebar_icons" /> <span>{label}</span>
    </li>
  );
}
