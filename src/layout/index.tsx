import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

export default function index() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="outlet">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
