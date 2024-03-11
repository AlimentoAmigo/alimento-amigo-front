// UserHome.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ListaProduto from '../../components/produto/listaProduto/ListaProduto';


function UserHome() {
  return (
    <div>
      <h2>Bem-vindo à Loja!</h2>
      <Link to="/produto/all">Ver Produtos</Link>
      <ListaProduto />
    </div>
  );
}

export default UserHome;
