import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, deletar } from '../../../services/Service'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContexts'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produto/all/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produto")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produto/all/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto deletado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao deletar o produto', 'erro')
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja deletar o produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-green-800 text-white font-bold text-2xl'>{produto.nome}</header>
        <p className='p-8 text-2xl bg-slate-100 h-full items-center justify-center text-justify'>{produto.descricao}</p>
        <div className="flex">
          <button className='text-slate-100 bg-orange-400 hover:bg-orange-800 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-green-500 hover:bg-green-800 flex items-center justify-center' onClick={deletarProduto}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto