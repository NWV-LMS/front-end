import { PiStudentLight } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import TopBarItem from "./TopBarItem";

export default function TopBar() {
  return (
    <section className="topbar">
      <div className="container">
        <ul className="topbar_wrapper">
          <TopBarItem
            title="Student Count"
            number={76}
            perc="+20"
            icons={PiStudentLight}
          />
          <TopBarItem
            title="Payments Count"
            number={120}
            perc="+15"
            icons={GiReceiveMoney}
          />
          <TopBarItem
            title="Debts Count"
            number={34}
            perc="-5"
            icons={GiPayMoney}
          />
          <TopBarItem
            title="Teachers Count"
            number={12}
            perc="+2"
            icons={BsPersonWorkspace}
          />
        </ul>
      </div>
    </section>
  );
}
