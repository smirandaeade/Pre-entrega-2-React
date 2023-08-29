import Navbar from './components/Navbar'
import Company from './components/Company'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Carrito from './components/Carrito';
import AppProvider from './components/context/AppContext'; // Asegúrate de importar correctamente AppProvider y useAppContext

const App = () => {

  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Pre-entrega-2-React" element={<Home />} />
          <Route path="/Pre-entrega-2-React/playstation" element={<Company />} />
          <Route path="/Pre-entrega-2-React/xbox" element={<Company />} />
          <Route path="/Pre-entrega-2-React/nintendo-switch" element={<Company />} />
          <Route path="/:product/:productId" element={<ProductDetail />} />
          <Route path="/Pre-entrega-2-React/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App
