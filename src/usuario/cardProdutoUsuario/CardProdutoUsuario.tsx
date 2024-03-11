import React, { useContext } from 'react';
import Produto from '../../models/Produto';
import { CarrinhoContext } from '../context/CarrinhoContext';

interface CardProdutoUsuarioProps {
  produto: Produto;
  mostrarBotaoAdicionar?: boolean;
}

function CardProdutoUsuario({ produto, mostrarBotaoAdicionar = true }: CardProdutoUsuarioProps) {
  const { adicionarProduto } = useContext(CarrinhoContext);

  const handleAdicionarAoCarrinho = () => {
    adicionarProduto(produto);
    alert('Produto adicionado ao carrinho!');
  };

  return (
    <div className='border-green-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-green-800 py-2 px-4 justify-center items-center gap-4">
          <img src={produto.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase text-white'>{produto.usuario?.nome}</h3>
        </div>
        <div className='p-4'>
          <h4 className='text-lg font-semibold uppercase text-center'>{produto.nome}</h4>
          <hr className='border-orange-400 border-2'/>
          <br />
          <div className="flex justify-center items-center">
            <img src={produto.foto} alt='Produto ofertado' className="w-32 h-32 object-cover"/>
          </div>
          <br /> 
          <p className='text-center'>{produto.descricao}</p>
          <br />
          
          <p className='text-justify'><strong>CATEGORIA:</strong> {produto.categoria?.tipo} </p>
          <p><strong>VALIDADE:</strong> {produto.data_validade} </p>
          <p><strong>QUANTIDADE DISPONÍVEL:</strong> {produto.quantidade} </p>
        </div>
      </div>

      <div className="flex justify-between items-center p-4">
        {mostrarBotaoAdicionar && (
          <button onClick={handleAdicionarAoCarrinho} className='bg-green-900 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full'>
            Adicionar ao Carrinho
          </button>
        )}
      </div>
    </div>
  );
}

export default CardProdutoUsuario;
