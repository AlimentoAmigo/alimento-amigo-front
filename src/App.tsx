import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './paginas/contato/Contato';
import Sobre from './paginas/sobre/Sobre';
import Cadastro from './paginas/cadastro/Cadastro';
import Login from './paginas/login/Login';
import { AuthProvider } from './contexts/AuthContexts';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';


function App() {
  return (
      <>
          <AuthProvider>
              <BrowserRouter>
                  <Navbar />
                  <div className="min-h-[80vh]">
                      <Routes>
                          <Route path="/" element={<Login />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/home" element={<Home />} />
                          <Route path="/contato" element={<Contato />} />
                          <Route path="/cadastro" element={<Cadastro />} />
                          <Route path="/sobre" element={<Sobre />} />
                          <Route path="/categorias" element={<ListaCategoria />} />
                          <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                      </Routes>
                  </div>
                  <Footer />
              </BrowserRouter>
          </AuthProvider>
      </>
  );
}
export default App;