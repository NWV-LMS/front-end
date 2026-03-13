import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface BackBtnProps {
  text: string;
  to?: number | string;
}

export default function BackBtn({ text, to = -1 }: BackBtnProps) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to as any)} className="back_btn">
      <IoArrowBack />
      Back to {text}
    </button>
  );
}
