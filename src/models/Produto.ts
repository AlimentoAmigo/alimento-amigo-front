import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    data_validade: string;
    descricao: string;
    foto: string;
    nome: string;
    preco: number;
    quantidade: number;
    categoria: Categoria | null;
}