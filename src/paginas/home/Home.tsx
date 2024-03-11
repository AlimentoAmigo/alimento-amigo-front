// Importe os módulos necessários
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';
import homeLogo from '../../assets/img/celular_home.png';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    if (usuario && usuario.token !== '') {
      navigate('/home');
    }
  }, [usuario, navigate]);

  // Função para verificar se o usuário é um fornecedor
  const isVendor = () => {
    // Substitua essa lógica com base na sua implementação de autenticação
    return true; // Retornando true para exemplo
  };

  // Função para lidar com o clique no botão "Área do Fornecedor"
  const handleFornecedorClick = () => {
    if (isVendor()) {
      navigate('/login'); // Redireciona para a página de login
    } else {
      navigate('/produto/all'); // Redireciona para a loja
    }
  };

  return (
    <>
      <div className="bg-green-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem-vindo!</h2>
            <p className="text-xl"></p>

            <div className="flex justify-around gap-4">
              {/* Botão para fornecedores */}
              <button onClick={handleFornecedorClick} className="rounded bg-white text-green-900 py-2 px-4">
                Área do Fornecedor
              </button>

              {/* Botão para consumidores */}
              <Link to="/produtosUsuario" className="rounded bg-orange-600 text-white py-2 px-4">
                Loja
              </Link>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-1/2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
