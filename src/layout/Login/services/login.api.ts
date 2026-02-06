import axios from "axios";
import type { LoginFormData } from "../types/login.types";

export const login = (data: LoginFormData) => {
  return axios.post("http://localhost:3003/user/login", data);
};