import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { buscar, deletar } from '../../../services/Service'
import Categoria from '../../../models/Categoria'
import { AuthContext } from '../../../contexts/AuthContexts'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
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
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria deletada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao deletar a categoria', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border-2 border-green-900 flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-green-800 text-white font-bold uppercase text-2xl'>{categoria.tipo}</header>
                <p className='p-8 text-2xl bg-slate-100 h-full items-center justify-center text-justify'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-orange-400 hover:bg-orange-800 w-full py-2 uppercase font-semibold' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-green-400 hover:bg-green-800 flex items-center justify-center uppercase font-semibold' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria