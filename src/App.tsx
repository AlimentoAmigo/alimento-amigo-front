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
                      </Routes>
                  </div>
                  <Footer />
              </BrowserRouter>
          </AuthProvider>
      </>
  );
}
export default App;