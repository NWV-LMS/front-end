import { LuLogOut } from "react-icons/lu";

export default function MyProfileInfo() {
  return (
    <div className="myprofile_info">
      <div className="myprofile_info_head">
        <img
          className="myprofile_info_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLBV2gL7AZt6i3yO3rbk6G0i7GmiWSLQHsA&s"
          alt="Name"
        />

        <h2 className="myprofile_info_name">Evan Yates</h2>
        <p className="myprofile_info_role">Admin</p>
        <p className="myprofile_info_date">Member since Sep 2021</p>
      </div>

      <div className="my_profile_solid"></div>

      <ul className="my_profile_details">
        <li>
          <h3 className="my_profile_detail_article">Department</h3>
          <p className="my_profile_detail_text">Education</p>
        </li>
        <li>
          <h3 className="my_profile_detail_article">Location</h3>
          <p className="my_profile_detail_text">New York, USA</p>
        </li>
        <li>
          <h3 className="my_profile_detail_article">Status</h3>
          {/* red-no-active */}
          <p className="my_profile_detail_text active_status ">Active</p>
        </li>
      </ul>

      <button className="logout">
        <LuLogOut />
        Logout
      </button>
    </div>
  );
}
