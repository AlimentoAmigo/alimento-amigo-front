import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { Basket } from '@phosphor-icons/react'

interface CardCategoriaProps{
    categoria: Categoria
}
function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border-2 border-green-900 flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-green-800 text-white font-bold text-2xl uppercase'>{categoria.tipo}</header>
      <p className='p-8 text-3xl h-full uppercase text-sm text-justify'>{categoria.descricao}</p>
      <div className="flex">
      <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-green-500 hover:bg-green-800 flex items-center justify-center py-2'>
        <button className='uppercase font-semibold'>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-orange-400 hover:bg-orange-800 w-full flex items-center justify-center'>
          <button className='uppercase font-semibold'>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria