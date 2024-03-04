import {Basket, HouseSimple, PlusCircle, SignIn, SignOut, UserCircle, UserCirclePlus} from "@phosphor-icons/react";
import {Note} from "@phosphor-icons/react/dist/ssr";
import favicon from "../../assets/img/favicon.png";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContexts";
import {useContext} from "react";

function Navbar() {
    const {usuario, handleLogout} = useContext(AuthContext);
    const navigate = useNavigate();

    //botão sair
    const handleLogoutClick = () => {
        localStorage.removeItem("seuToken");
        handleLogout();
        navigate("/login");
    };

    return (
        <>
            {/* Acima da linha verde */}
            <div className="w-full bg-green-900 text-white flex justify-center py-2 border-b-2 border-green-200">
                <div className="container flex justify-end text-lg item-center text-sm uppercase">
                    <div className="flex gap-4 items-center">
                        {!usuario.token ? (
                            <>
                                {/* Botões para usuários não logados */}
                                <div className="flex px-1 items-center">
                                    <div className="px-1">
                                        <SignIn size={20} />
                                    </div>
                                    <Link to="/login" className="hover:underline">
                                        Login
                                    </Link>
                                </div>
                                <div className="flex px-1 items-center">
                                    <div className="px-1">
                                        <UserCirclePlus size={20} />
                                    </div>
                                    <Link to="/cadastro" className="hover:underline">
                                        Cadastro
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Botões adicionais para usuários logados */}
                                <div className="flex px-1 items-center">
                                    <div className="px-1">
                                        <UserCircle size={20} />
                                    </div>
                                    <Link to="/perfil" className="hover:underline">
                                        Perfil
                                    </Link>
                                </div>
                                <div className="flex px-1 items-center">
                                    <div className="px-1">
                                        <SignOut size={20} />
                                    </div>
                                    <div className="hover:underline" onClick={handleLogoutClick}>
                                        Sair
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Abaixo da linha verde */}
            <div className="w-full bg-green-900 text-white flex justify-center py-2">
                <div className="container flex justify-between text-lg">
                    <div className="container flex justify-between text-lg">
                        <div className="flex justify-left items-center">
                            <img src={favicon} alt="" className="w-30" />
                            <div className="text-2xl font-bold uppercase">Alimento amigo</div>
                        </div>

                        <div className="flex gap-2 items-center uppercase text-sm">
                            <div className="flex px-1 items-center">
                                <div className="px-1">
                                    <HouseSimple size={20} />
                                </div>
                                <Link to="/home" className="hover:underline">
                                    Home
                                </Link>
                            </div>
                            <div className="flex px-1 items-center">
                                <div className="px-1">
                                    <Basket size={20} />
                                </div>
                                <Link to="/produto/all" className="hover:underline">
                                    Produtos
                                </Link>
                            </div>
                            {usuario.token && (
                                <>
                                    {/* Botões adicionais para usuários logados */}
                                    <div className="flex px-1 items-center">
                                        <div className="px-1">
                                            <Note size={20} />
                                        </div>
                                        <Link to="/categorias" className="hover:underline">
                                            Categorias
                                        </Link>
                                    </div>
                                    <div className="flex px-1 items-center">
                                        <div className="px-1">
                                            <PlusCircle size={20} />
                                        </div>
                                        <Link to="/cadastroCategoria" className="hover:underline">
                                            Nova Categoria
                                        </Link>
                                    </div>
                                    <div className="flex px-1 items-center">
                                        <div className="px-1">
                                            <PlusCircle size={20} />
                                        </div>
                                        <Link to="/cadastroProduto" className="hover:underline">
                                            Novo Produto
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
