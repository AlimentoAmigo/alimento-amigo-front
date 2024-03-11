// VendorHome.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import FormularioProduto from '../../components/produto/formularioProduto/FormularioProduto';


function VendorHome() {
  return (
    <div>
      <h2>Bem-vindo à Área do Fornecedor!</h2>
      <Link to="/cadastro-produto">Cadastrar Produto</Link>
      <FormularioProduto onAdicionarProduto={() => {}} /> 
    </div>
  );
}

export default VendorHome;
