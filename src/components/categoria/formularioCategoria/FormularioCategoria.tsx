import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContexts';
import Categoria from '../../../models/Categoria';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        alert('Categoria atualizada com sucesso') //ToastAlert
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente') //ToastAlert
          handleLogout()
        } else {
          alert('Erro ao atualizar a Categoria') //ToastAlert
        }

      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        alert('Categoria cadastrada com sucesso') //ToastAlert

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente') //ToastAlert
          handleLogout()
        } else {
          alert('Erro ao cadastrado a Categoria') //ToastAlert
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado'); //ToastAlert
      navigate('/login'); //ToastAlert
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8 underline text-orange-600">
        {id === undefined ? 'Cadastre uma nova categoria!' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
      
      <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className='font-semibold uppercase'>Nome da categoria*</label>
          <input
            type="text"
            placeholder="Nome"
            name='tipo'
            className="border-2 border-slate-800 rounded p-2"
            value={categoria.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className='font-semibold uppercase'>Descrição da categoria*</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-800 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <div> <p className="font-sm font-semibold text-red-600">*CAMPOS OBRIGATÓRIOS. Mínimo de 5 caracteres para o campo "nome" e 10 para o campo "descrição".</p></div>
        </div>
        <button
          className="rounded text-slate-100 bg-orange-400 hover:bg-orange-800 w-1/2 py-2 mx-auto block uppercase font-semibold"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;