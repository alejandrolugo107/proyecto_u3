import '../components/LoginForm.css'
import { useState } from 'react';


function LoginForm() {

    const email_user = "a.lugo@colegiopiamonte.edu.mx";
    const pass_user = "12345678";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault()
        const login_request = {
            email, password
        }
        if (login_request.email === email_user && login_request.password === pass_user) {
            console.log("Successfully Logged In");
        } else {
            console.log("Wrong credentials provided");
        }
     }
    
    return (
        <div className="container">
            <div className="row">
            <form onSubmit={handleSubmit}>
                <div class="form-group mb-2">
                    <label className="mb-2" htmlfor="correoUsuario">Correo Electronico:</label>
                        <input class="form-control" id="correoUsuario" aria-describedby="emailHelp"
                            type="email"
                            required
                            value={email}
                            onChange = {(e)=> setEmail(e.target.value)}
                        />
        
                </div>
                <div class="form-group mb-2">
                    <label className="mb-2" for="passwordUsuario">Contrasena:</label>
                        <input class="form-control" id="passwordUsuario"
                            type="password"
                            required
                            value={password}
                            onChange = {(e)=> setPassword(e.target.value)}
                        />
                </div>
                    <button type="submit" class="btn btn-primary w-100 mt-3 mb-4">Ingresar</button>
            </form>
            </div>
        </div>  
        
    );
}

export default LoginForm