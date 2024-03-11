import { createContext, ReactNode, useState, useEffect } from "react";
import { Produto } from "../../models/Produto";

interface CarrinhoContextProps {
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (produtoId: number) => void;
  limparCarrinho: () => void;
  aumentarQuantidade: (produtoId: number) => void;
  diminuirQuantidade: (produtoId: number) => void;
  carrinhoItems: Produto[];
  quantidadeItems: number;
}

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps);

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {
  const [carrinhoItems, setCarrinhoItems] = useState<Produto[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]); // Estado global de produtos

  useEffect(() => {
    // Atualize o estado global de produtos sempre que o carrinho for modificado
    setProdutos((estadoAnterior) =>
      estadoAnterior.map((produto) => {
        const produtoNoCarrinho = carrinhoItems.find((item) => item.id === produto.id);
        return produtoNoCarrinho ? { ...produto, quantidade: produto.quantidade - produtoNoCarrinho.quantidade } : produto;
      })
    );
  }, [carrinhoItems]);

  const quantidadeItems = carrinhoItems.length;

  function adicionarProduto(produto: Produto) {
    const produtoExistente = carrinhoItems.find((item) => item.id === produto.id);

    if (produtoExistente) {
      aumentarQuantidade(produto.id);
    } else {
      // Verifique se a quantidade disponível é suficiente
      if (produto.quantidade > 0) {
        setCarrinhoItems((state) => [...state, { ...produto, quantidade: 1 }]);
      } else {
        alert("Produto sem quantidade disponível.");
      }
    }
  }

  function removerProduto(produtoId: number) {
    const novoCarrinho = carrinhoItems.filter((item) => item.id !== produtoId);
    setCarrinhoItems(novoCarrinho);
  }

  function limparCarrinho() {
    alert("Compra Efetuada com Sucesso");
    setCarrinhoItems([]);
  }

  function aumentarQuantidade(produtoId: number) {
    const novoCarrinho = carrinhoItems.map((item) =>
      item.id === produtoId ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCarrinhoItems(novoCarrinho);
  }

  function diminuirQuantidade(produtoId: number) {
    const novoCarrinho = carrinhoItems.map((item) =>
      item.id === produtoId && item.quantidade > 1 ? { ...item, quantidade: item.quantidade - 1 } : item
    );
    setCarrinhoItems(novoCarrinho);
  }

  return (
    <CarrinhoContext.Provider
      value={{ adicionarProduto, removerProduto, limparCarrinho, aumentarQuantidade, diminuirQuantidade, carrinhoItems, quantidadeItems }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
