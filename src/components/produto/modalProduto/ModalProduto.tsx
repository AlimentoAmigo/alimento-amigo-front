

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalProduto.css'
import FormularioProduto from '../formularioProduto/FormularioProduto';

function ModalProduto() {
  return (
    <>
     <Popup 
        trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Produto</button>} 
        modal
        contentStyle={{
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <div className="overflow-y-scroll">
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;