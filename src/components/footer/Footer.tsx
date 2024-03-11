import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, Phone, UsersThree } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {

  let data = new Date().getFullYear()
  

  return (
    <>
        <div className="flex justify-center bg-green-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Alimento Amigo | &copy; {data}</p>
            <p className='text-sm uppercase text-green-300'>Acesse nossas redes sociais!</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' /></div>
              <div className='flex'>
              <Link to= '/sobre' className='hover:underline px-2 text-green-300'>Sobre nós</Link> |
              <Link to= '/contato' className='hover:underline px-2 text-green-300'>Contato</Link>
            </div>
            </div>
            </div>
      </>
  )
}

export default Footer