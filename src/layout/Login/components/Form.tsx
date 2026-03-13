import { useState, createElement } from "react";
import { useForm } from "react-hook-form";
import type { LoginFormData } from "../types/login.types";
import { login } from "../services/login.api";
// validators
import { useAuthStore } from "../../../store/auth.store";
import { phoneValidation } from "../validators/phone";
import { passwordValidation } from "../validators/password";
// icons
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { IoCheckmarkOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
  });

  const [formattedPhone, setFormattedPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, "");
    if (digits.length > 9) digits = digits.slice(0, 9);

    const formatted = digits.match(/.{1,3}/g)?.join("") || "";
    setFormattedPhone(formatted);

    setValue("phone", digits, { shouldValidate: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitForm = async (data: LoginFormData) => {
    try {
      const res = await login(data);
      const { accessToken, refreshToken } = res.data;

      useAuthStore.getState().setTokens(accessToken, refreshToken);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2 className="form_title">Sign In to LMS+CRM</h2>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form_content">
          <div
            className={`form_input input_content_left ${errors.phone ? "error" : ""}`}
          >
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="50500411"
              value={formattedPhone}
              {...register("phone", phoneValidation)}
              onChange={handlePhoneChange}
            />
            <p className="form_input_code left_content">+996</p>
            <span className="form_err_text">{errors.phone?.message}</span>
          </div>

          <div
            className={`form_input input_content_right ${errors.password ? "error" : ""}`}
          >
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", passwordValidation)}
            />
            {createElement(showPassword ? LuEyeOff : LuEye, {
              className: "form_input_eye right_content",
              onClick: togglePasswordVisibility,
            })}

            <span className="form_err_text">{errors.password?.message}</span>
          </div>
        </div>

        <div className="form_checkbox_text">
          <IoCheckmarkOutline className="form_checkbox active" />
          <p className="form_checkbox_remember">Remember me</p>
        </div>

        <button type="submit" className="form_btn">
          Sign In
          <HiArrowRightEndOnRectangle className="form_btn_icon" />
        </button>
      </form>
    </>
  );
}
