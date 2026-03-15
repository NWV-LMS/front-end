import CancelBtn from "../../../ui/CancelBtn";
import { RiUser3Line } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import PrimaryBtn from "../../../ui/PrimaryBtn";

export default function MyProfileEdit() {
  return (
    <div className="my_profile_edit">
      <div className="my_profile_edit_head">
        <h3>Edit Profile</h3>
      </div>

      <div className="my_profile_edit_content">
        <div className="my_profile_title personal">
          <div className="my_profile_icon">
            <RiUser3Line />
          </div>
          <h4 className="my_profile_text">Personal Information</h4>
        </div>

        <div className="my_profile_edit_wrapper">
          <div className="my_profile_label_inp">
            <label className="my_profile_label">Full Name</label>
            <div className="my_profile_inp left">
              <RiUser3Line className="my_profile_inp_icon" />
              <input type="text" placeholder="Full Name" />
            </div>
          </div>
          <div className="my_profile_label_inp">
            <label className="my_profile_label">Phone Number</label>
            <div className="my_profile_inp left">
              <FiPhone className="my_profile_inp_icon" />
              <input type="tel" placeholder="Phone Number" />
            </div>
          </div>
          <div className="my_profile_label_inp">
            <label className="my_profile_label">Email Address</label>
            <div className="my_profile_inp left">
              <HiOutlineMail className="my_profile_inp_icon" />
              <input type="text" placeholder="Email Address" />
            </div>
          </div>
        </div>

        <div className="my_profile_solid"></div>

        <div className="my_profile_title security">
          <div className="my_profile_icon">
            <FiLock />
          </div>
          <h4 className="my_profile_text">Security</h4>
        </div>

        <div className="my_profile_edit_wrapper">
          <div className="my_profile_label_inp">
            <label className="my_profile_label">Current Password</label>
            <div className="my_profile_inp right">
              <LuEye className="my_profile_inp_icon" />
              <input type="password" placeholder="Current Password" />
            </div>
          </div>

          <div className="my_profile_label_inp">
            <label className="my_profile_label">New Password</label>
            <div className="my_profile_inp right">
              <LuEye className="my_profile_inp_icon" />
              <input type="password" placeholder="New Password" />
            </div>
          </div>

          <div className="my_profile_label_inp">
            <label className="my_profile_label">Confirm New Password</label>
            <div className="my_profile_inp right">
              <LuEye className="my_profile_inp_icon" />
              <input type="password" placeholder="Confirm New Password" />
            </div>
          </div>
        </div>

        <div className="my_profile_solid"></div>

        <div className="my_profile_buttons">
          <CancelBtn />
          <PrimaryBtn>Save Changes</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}
