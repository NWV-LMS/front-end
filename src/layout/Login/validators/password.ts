import type { RegisterOptions } from "react-hook-form";
import type { LoginFormData } from "../types/login.types";

export const passwordValidation: RegisterOptions<LoginFormData, "password"> = {
  required: "Password is required",
  minLength: {
    value: 6,
    message: "Minimum 6 characters",
  },
};
