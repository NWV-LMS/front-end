import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../config/routes";

export default function Routing() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}