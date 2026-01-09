import Logo from "../../assets/icons/logo_white.svg";
import Foto from "../../assets/images/login_foto.png";
import Form from "./Form";

export default function Login() {
  return (
    <section className="login">
      <div className="login_left">
        <img className="login_logo" src={Logo} alt="Logo..." />

        <h1 className="login_title">
          Your place to work Plan. Teach. Manage. Grow
        </h1>

        <img className="login_foto" src={Foto} alt="Login Foto" />
      </div>
      <div className="login_right">
        <Form />
      </div>
    </section>
  );
}
