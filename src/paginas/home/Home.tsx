import { Link } from 'react-router-dom';
import homeLogo from '../../assets/img/celular_home.png';
import ListaProdutos from '../../components/produto/listaProduto/ListaProduto';
import ModalProduto from '../../components/produto/modalProduto/ModalProduto';
import './Home.css';



function Home() {
  return (
    <>
      <div className="bg-green-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
            <p className='text-xl'></p>

            <div className="flex justify-around gap-4">

              <ModalProduto />
              <Link to="/produto/all"  className='rounded bg-orange-600 text-white-800 py-2 px-4'>Ver produtos</Link>
            </div>

          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-1/2' />

          </div>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}

export default Home;