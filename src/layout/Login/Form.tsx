import { LuEye } from "react-icons/lu";
import { IoCheckmarkOutline } from "react-icons/io5";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";

export default function Form() {
  return (
    <>
      <h2 className="form_title">Sign In to LMS+CRM</h2>

      <form>
        <div className="form_content">
          <div className="form_input input_content_left">
            <label htmlFor="">Phone Number</label>
            <input type="tel" placeholder="505 00 00 00" />
            <p className="form_input_code left_content">+996</p>
          </div>

          <div className="form_input input_content_right">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your password" />
            <LuEye className="form_input_eye right_content" />
          </div>
        </div>

        <div className="form_checkbox_text">
          <IoCheckmarkOutline className="form_checkbox active" />
          <p className="form_checkbox_remember">Remember me</p>
        </div>

        <button className="form_btn">
          Sign In
          <HiArrowRightEndOnRectangle className="form_btn_icon" />
        </button>
      </form>
    </>
  );
}
