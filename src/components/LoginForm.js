import './LoginForm.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom' 


function LoginForm() {
    

    let navi_ = useNavigate();

    function redirect_Profile() {
        navi_('/main')
    }


    //Fake Login Details
    const email_user = "a.lugo@colegiopiamonte.edu.mx";
    const pass_user = "12345678";

    //UseState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    


    //PreventDefault
    const handleSubmit = (e) => {
        e.preventDefault()
        const login_request = {
            email, password
        }

        //ValidateCredentials
        if (login_request.email === email_user && login_request.password === pass_user) {
            alert("Bienvenido")
            redirect_Profile();
        } else {
            alert("Credenciales de acceso no validas")
        }
     }
    
    return (
        <div className="container">
            <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label className="mb-2" htmlFor="correoUsuario">Correo Electrónico:</label>
                        <input className="form-control" id="correoUsuario" aria-describedby="emailHelp"
                            type="email"
                            required
                            value={email}
                            onChange = {(e)=> setEmail(e.target.value)}
                        />
        
                </div>
                <div className="form-group mb-2">
                    <label className="mb-2" htmlFor="passwordUsuario">Contraseña:</label>
                        <input className="form-control" id="passwordUsuario"
                            type="password"
                            required
                            value={password}
                            onChange = {(e)=> setPassword(e.target.value)}
                        />
                </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3 mb-4">Ingresar</button>
            </form>
            </div>
        </div>  
        
    );
}

export default LoginForm