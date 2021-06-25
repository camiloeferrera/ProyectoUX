import React from 'react'
import './CSS/Style.css';
import { useHistory } from 'react-router-dom'


function Login(){
    let history = useHistory();

    function iniciar(e){
        e.preventDefault();
        const user = document.getElementById('correo').value;
        const pass = document.getElementById('contrasena').value;
        if(localStorage.getItem('email')){
            var correos = localStorage.getItem('email').split(",");
            var ingreso = false;
            var userAct;
            for (var i = 0; i < correos.length; i++) {
                var usuario = correos[i].split("|");
                if(usuario[0] === user && usuario[2] === pass){
                    ingreso = true;
                    userAct = usuario[1];
                }
            }
            if(ingreso){
                const usuarioActual = user + "|" + userAct;
                localStorage.removeItem('usuarioActual');
                localStorage.setItem('usuarioActual',usuarioActual);
                console.log('Ingresó correctamente');
                history.push("/principal");
            }else{
                window.alert("Usuario y/o contraseña incorrecta.");
            }
        }
    }

/*---------------------------------------------------------------------------------------------------------------------------*/

    return(
        <div className="container bg-primary rounded shadow">
            <nav className="row barra py-3 navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-9">
                <h1 className="title">ApuntesGratis.com</h1>
                </div>
           </nav>
            <div className="row">
                <div className="col bg-white p-5 rounded-end">
                        <form action="#">
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Correo:</label>
                                <input type="email" className="form-control" name="email" id="correo"></input>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Contraseña:</label>
                                <input type="password" className="form-control" name="password" id="contrasena"></input>
                            </div> 
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success" onClick={iniciar}>Iniciar Sesión</button>
                            </div>
                            <div className="my-3">
                                <span>¿Qué esperas para Registrarte? <a href="registro">Registrarse</a></span>  <br></br>
                            </div>
                        </form>
                </div> 
            </div>
        </div>
    )
}

export default Login