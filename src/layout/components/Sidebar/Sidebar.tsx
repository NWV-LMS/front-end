import { TbCategoryFilled } from "react-icons/tb";
import Logo from "../../../assets/icons/logo.svg";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="sidbar_logo" src={Logo} alt="logo" />

      <nav className="sidebar_nav">
        <p className="sidebar_text">Menu</p>
        <ul className="sidebar_list">
          <SidebarItem icon={TbCategoryFilled} label="Dashboard" />
        </ul>
      </nav>
    </aside>
  );
}
