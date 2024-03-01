import {ChangeEvent, useContext, useEffect, useState} from "react";
import "./Login.css";

import {Link, useNavigate} from "react-router-dom";

import {AuthContext} from "../../contexts/AuthContexts";
import UsuarioLogin from "../../models/UsuarioLogin";
import {RotatingLines} from "react-loader-spinner";

function Login() {
    let navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    const {usuario, handleLogin} = useContext(AuthContext);

    const {isLoading} = useContext(AuthContext);

    useEffect(() => {
        if (usuario && usuario.token !== "") {
            navigate("/home");
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    function logout() {
         handleLogout();
      }

    return (
        <>
            <div className=" w-full h-screen flex items-center justify-center  bg-[url('/src/assets/img/login.png')] ">
                <form className="flex flex-col gap-4 items-center py-4" onSubmit={login}>
                    <h2 className='text-green-900 text-center text-5xl font-bold'>Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button type="submit" className="rounded bg-orange-600 hover:bg-green-900 text-white w-1/2 py-2 flex justify-center">
                        {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Entrar</span>}
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{" "}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
              
            </div>
        </>
    );
}

export default Login;
function handleLogout() {
    throw new Error("Function not implemented.");
}

