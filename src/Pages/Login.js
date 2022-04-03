import logo_escuela from '../san_esteban_logo.png'
import LoginForm from '../Components/LoginForm'
import FooterLogin from '../Components/FooterLogin'

function Login() {
    return (
        <div>
            <div className="vh-100 container d-flex justify-content-center align-items-center flex-column">
                <div className="row">
                    <img src={logo_escuela} alt="logo-img"/>
                </div>
                <div className="row">
                    <LoginForm></LoginForm>
                </div>
                <div className="row">
                    <FooterLogin></FooterLogin>
                </div>
            </div>
        </div>
  );
}

export default Login;
