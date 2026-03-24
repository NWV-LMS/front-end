import PrimaryBtn from "../../../../../ui/PrimaryBtn";
import TitleBlock from "../../../../../ui/TitleBlock";
import { GoPlus } from "react-icons/go";

export default function AdminHeader() {
  return (
    <header>
      <div className="container">
        <div className="page_header">
          <TitleBlock
            title="Administrators"
            desc="Manage user access and roles within your organization."
          />

          <PrimaryBtn>
            <GoPlus className="icon" />
            Invite Administrator
          </PrimaryBtn>
        </div>
      </div>
    </header>
  );
}
