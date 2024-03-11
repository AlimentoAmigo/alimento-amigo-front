import React, { useContext } from 'react';
import CardProdutoUsuario from '../cardProdutoUsuario/CardProdutoUsuario';
import { CarrinhoContext } from '../context/CarrinhoContext';

function Carrinho() {
  const { carrinhoItems, limparCarrinho, aumentarQuantidade, diminuirQuantidade, removerProduto } = useContext(CarrinhoContext);

  const finalizarReserva = () => {
    // Adicione aqui a lógica para finalizar a reserva, se necessário
    // Por exemplo, enviar uma solicitação ao servidor para processar a reserva
    alert('Reserva finalizada com sucesso!');
    limparCarrinho(); // Limpar o carrinho após a reserva
  };

  return (
    <div className="relative min-h-screen bg-cover" style={{ backgroundImage: `url('/src/assets/img/carrinho.png')` }}>
      <div className="absolute top-0 left-0 right-0 p-8">
        <h2 className="text-3xl font-bold mb-4 text-green-900 flex items-center">
          <span className="flex-grow">Seu Carrinho</span>
        </h2>

        {carrinhoItems.length === 0 ? (
          <p className="text-gray-600">Seu carrinho está vazio. Adicione produtos para começar a reserva!</p>
        ) : (
          <div className="container mx-auto my-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carrinhoItems.map((produto) => (
                <div key={produto.id} className="mb-8">
                  <CardProdutoUsuario produto={produto} mostrarBotaoAdicionar={false} tamanhoImagem="h-32" />
                  <div className="flex justify-center items-center mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => diminuirQuantidade(produto.id)}>
                      -
                    </button>
                    <span className="mx-4">{produto.quantidade}</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => aumentarQuantidade(produto.id)}>
                      +
                    </button>
                    <button className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full ml-4" onClick={() => removerProduto(produto.id)}>
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end m-2 absolute top-0 right-0">
              <button className="bg-green-900 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full" onClick={finalizarReserva}>
                Finalizar Reserva
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
