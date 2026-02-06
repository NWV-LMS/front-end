import type { RegisterOptions } from "react-hook-form";
import type { LoginFormData } from "../types/login.types";

export const phoneValidation: RegisterOptions<LoginFormData, "phone"> = {
  required: {
    value: true,
    message: "This field is required",
  },
  minLength: {
    value: 9,
    message: "Minimum 9 characters",
  },
  pattern: {
    value: /^[0-9 ]*$/,
    message: "You can only enter numbers",
  },
};
