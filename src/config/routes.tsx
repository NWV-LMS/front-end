import Layout from "../layout";
import Dashboard from "../modules/Dashboard";
import Users from "../modules/Users";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <Users /> },
    ],
  },
];
