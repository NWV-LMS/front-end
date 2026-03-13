import type { RouteObject } from "react-router";
import { ProtectedRoute } from "../guards/ProtectedRoute";
import { PublicRoute } from "../guards/PublicRoute";
import Login from "../layout/Login/Login";
import Layout from "../layout";
import Dashboard from "../modules/Dashboard";
import Users from "../modules/Users";
import MyProfile from "../modules/MyProfile";

export const routes: RouteObject[] = [
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "users", element: <Users /> },
          { path: "my-profile", element: <MyProfile /> },
        ],
      },
    ],
  },
];
