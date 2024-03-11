import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { buscarProduto } from '../../services/Service';
import { toastAlerta } from '../../utils/toastAlerta';
import CardProdutoUsuario from '../cardProdutoUsuario/CardProdutoUsuario';
import Produto from '../../models/Produto';

function ListaProdutosUsuario() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      // Chame a rota /produto/all para obter todos os produtos
      await buscarProduto('/produto/all', setProdutos);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <CardProdutoUsuario key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutosUsuario;
