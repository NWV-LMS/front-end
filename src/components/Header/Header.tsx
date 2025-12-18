import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <div className="header_wrapper">
        <button className="header_search">
          <FiSearch className="header_search_icon" /> Search (Ctrl+K)
        </button>

        <div className="header_content">
          <button className="header_notice">
            <IoMdNotificationsOutline className="header_notice_icon" />
          </button>
          <button className="header_profile">
            <div className="header_profile_foto_name">
              <img
                className="header_profile_foto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLBV2gL7AZt6i3yO3rbk6G0i7GmiWSLQHsA&s"
                alt=""
              />
              <p className="header_profile_name">Evan Yates</p>
            </div>

            <IoIosArrowDown className="header_profile_arrow" />
          </button>
        </div>
      </div>
    </header>
  );
}
