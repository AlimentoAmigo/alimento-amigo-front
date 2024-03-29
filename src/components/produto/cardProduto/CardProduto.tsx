// CardProduto.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { AuthContext } from '../../../contexts/AuthContexts';


interface CardProdutoProps {
  produto: Produto;
}

function formatarData(data: string): string {
  const dataObj = new Date(data);
  const dia = dataObj.getDate().toString().padStart(2, '0');
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
  const ano = dataObj.getFullYear();
  return `${dia}-${mes}-${ano}`;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { usuario } = useContext(AuthContext); // Obtenha o estado de autenticação do contexto

  return (
    <div className='border-green-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-green-800 py-2 px-4 justify-center items-center gap-4">
          <img src='' className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase text-white'>{produto.nome}</h3>
        </div>
        <div className='p-4'>
          <h4 className='text-lg font-semibold uppercase text-center'>{produto.nome}</h4>
          <hr className='border-orange-400 border-2'/>
          <br />
          <div className="flex justify-center items-center">
            <img src={produto.foto} alt='Produto ofertado' className="w-48 h-48"/>
          </div>
          <br /> 
          <p className='text-center'>{produto.descricao}</p>
          <br />
          
          <p className='text-justify'><strong>CATEGORIA:</strong> {produto.categoria?.tipo} </p>
          <p><strong>VALIDADE:</strong> {formatarData(produto.data_validade)} </p>
          <p><strong>QUANTIDADE DISPONÍVEL:</strong> {produto.quantidade} </p>
        </div>
      </div>
     
      {usuario && usuario.token !== "" && ( // Verifica se o usuário está logado
        <div className="flex">
          <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-green-400 hover:bg-green-800 flex items-center justify-center py-2'>
            <button className='uppercase font-semibold'>Editar</button>
          </Link>
          <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-orange-400 hover:bg-orange-800 w-full flex items-center justify-center'>
            <button className='uppercase font-semibold'>Deletar</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CardProduto;
