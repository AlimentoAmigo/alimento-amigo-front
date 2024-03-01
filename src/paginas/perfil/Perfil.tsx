import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import loginLogo from "../../assets/img/login.png";
import {toastAlerta} from "../../utils/toastAlerta";
import { AuthContext } from "../../contexts/AuthContexts";
import perfilPadrao from "../../assets/img/perfil-padrao.png";

function Perfil() {
    let navigate = useNavigate();

    const {usuario} = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta("Dados inconsistentes. Verifique as informações de cadastro.", "erro");
            navigate("/login");
        }
    }, [usuario.token]);

    const fotoPerfil = usuario.foto ? usuario.foto : perfilPadrao;

    return (
        <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
            <img className="w-full h-72 object-cover border-b-8 border-white" src={loginLogo} alt="Capa do Perfil" />
            <img src={fotoPerfil} alt={`Foto de perfil de ${usuario.nome}`} className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10" />
            <div className="relative mt-[-6rem] h-72 flex flex-col bg-green-900 text-white text-2xl items-center justify-center">
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>
        </div>
    );
}

export default Perfil;
