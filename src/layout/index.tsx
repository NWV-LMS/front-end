import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

export default function index() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="outlet">
      <Outlet />
      </div>
    </div>
  );
}
