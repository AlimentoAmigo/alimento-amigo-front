export default interface Categoria {
    id: number;
    data_validade: string;
    descricao: string;
    foto: string;
    nome: string;
    preco: number;
    quantidade: number;
    categoria: Categoria | null;
}