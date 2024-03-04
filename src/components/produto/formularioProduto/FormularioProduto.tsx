import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContexts';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { toastAlerta } from '../../../utils/toastAlerta';


function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: '',
    descricao: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    data_validade: '',
    descricao: '',
    foto: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    categoria: null,
    usuario: null
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produto/all/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/produto/all');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });
    retornar()
    if (id != undefined) {
      try {
        await atualizar(`/produto/all`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto atualizado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar o produto', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/produto/all`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Produto cadastrado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info');
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar o produto', 'erro');
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricao === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8  text-orange-600">{id !== undefined ? 'Editar um produto!' : 'Cadastre um produto!'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className='uppercase'><strong>Nome do Produto:</strong></label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-800 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className='uppercase'><strong>Foto:</strong></label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Link da foto"
            name="foto"
            required
            className="border-2 border-slate-800 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="data_validade" className='uppercase'> <strong>Data de Validade:</strong></label>
          <input
            value={produto.data_validade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="date"
            placeholder="Data de Validade"
            name="data_validade"
            required
            className="border-2 border-slate-800 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className='uppercase'><strong>Valor</strong></label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Valor simbólico"
            name="preco"
            required
            className="border-2 border-slate-800 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="quantidade" className='uppercase'><strong>Quantidade</strong></label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Quantidade de produtos"
            name="quantidade"
            required
            className="border-2 border-slate-800 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className='uppercase'><strong>Descrição</strong></label>
          <textarea
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-800 rounded p-2"
            rows={4}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className='uppercase'><strong>Categoria:</strong></p>
          <select name="categoria" id="categoria" className='border-2 p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.tipo}</option>
              </>
            ))}
          </select>
        </div>
        <div className='py-4'><button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-orange-300 bg-orange-400 hover:bg-orange-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'EDITAR' : 'CADASTRAR'}
        </button></div>
      </form>
    </div>
  );
}

export default FormularioProduto;