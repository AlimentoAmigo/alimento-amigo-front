import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id: number;
    data_validade: string;
    descricao: string;
    foto: string;
    nome: string;
    preco: number;
    quantidade: number;
    categoria?: Categoria | null;
    usuario: Usuario | null;
}