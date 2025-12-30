import { IoIosArrowForward } from "react-icons/io";
import { useToggleStore } from "../store/toggleStore";
import { useState } from "react";

export default function ToggleSidebar() {
  const { isOpen, toggle } = useToggleStore();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    toggle();

    setTimeout(() => {
      setAnimating(false);
    }, 400);
  };

  return (
    <button
      onClick={handleClick}
      className={`toggle_sidebar ${isOpen ? "open" : ""} ${
        animating ? "rotate" : ""
      }`}
    >
      <IoIosArrowForward className="toggle_icon" />
    </button>
  );
}
