import Logo from "../../../assets/icons/logo.svg";
import "./sidebar.scss";
import { TbCategoryFilled } from "react-icons/tb";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="sidbar_logo" src={Logo} alt="logo" />

      <nav>
        <ul className="sidebar_list">
          <li><TbCategoryFilled className="sidabar_icons" /> <span>Dashboard</span></li>
        </ul>
      </nav>
    </aside>
  )
}
