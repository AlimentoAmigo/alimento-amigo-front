import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Alimento amigo</div>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to= '/cadastro' className='hover:underline'>Cadastro</Link>
              <Link to= '/contato' className='hover:underline'>Contato</Link>
              <Link to= '/sobre' className='hover:underline'>Sobre nós</Link>
              <Link to= '/categorias' className='hover:underline'>Categorias</Link>
              <Link to= '/cadastroCategoria' className='hover:underline'>Nova Categoria</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar