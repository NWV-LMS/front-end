import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/auth.store";

export const PublicRoute = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};