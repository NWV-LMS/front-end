import { TbCategoryFilled } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { FiLogIn } from "react-icons/fi";
import Logo from "../../../assets/icons/logo.svg";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_top">
        <img className="sidbar_logo" src={Logo} alt="logo" />

        <nav className="sidebar_nav">
          <p className="sidebar_text">Menu</p>
          <ul className="sidebar_list">
            <SidebarItem to="/" icon={TbCategoryFilled} label="Dashboard" />
            <SidebarItem to="/users" icon={HiUsers} label="Users" />
          </ul>
        </nav>
      </div>

      <button className="sidebar_logout">
        <FiLogIn className="sidebar_logout_icon" /> Logout
      </button>
    </aside>
  );
}
