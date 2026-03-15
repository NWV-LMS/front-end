import BackBtn from "../../ui/BackBtn";
import TitleBlock from "../../ui/TitleBlock";
import MyProfileEdit from "./components/MyProfileEdit";
import MyProfileInfo from "./components/MyProfileInfo";

export default function index() {
  return (
    <section>
      <div className="container">
        <BackBtn text="Home" to="/" />
        <TitleBlock
          title="User Profile"
          desc="Manage access and roles for your organization"
        />

        <div className="my_profile_wrapper">
          <MyProfileInfo />
          <MyProfileEdit />
        </div>
      </div>
    </section>
  );
}
