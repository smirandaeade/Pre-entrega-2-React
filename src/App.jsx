import Navbar from './components/Navbar'
import Company from './components/Company'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import { useEffect } from 'react';
import Category from "./mocks/categories.json";
import Carrito from './components/Carrito';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('inicio');
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeCategory, setActiveCategory] = useState([null, activeMenu]);
  const [dataCompany, setDataCompany] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productoAdded, setProductoAdded] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(null)
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const getCompany = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (activeMenu === 'inicio') {
          const productsOnSale = Category.companias.flatMap((compania) =>
            compania.categorias.flatMap((categoria) =>
              categoria.productos.filter((producto) => producto.oferta)
            )
          );

          setDataCompany(productsOnSale);
        } else {
          const foundCompany = Category.companias.find(
            (compania) => compania.nombre === activeMenu
          );
          setDataCompany(foundCompany);
        }
      } catch (error) {
        setError(error);
        setDataCompany(null);
      } finally {
        setLoading(false);
      }
    };

    getCompany();
  }, [activeMenu]);

  useEffect(() => {
    // Dependiendo de la ruta, actualiza la categoría activa
    const path = window.location.pathname;
    if (path.includes('playstation')) {
      setActiveMenu('PlayStation');
    } else if (path.includes('xbox')) {
      setActiveMenu('Xbox');
    } else if (path.includes('nintendo-switch')) {
      setActiveMenu('Nintendo Switch');
    } else {
      setActiveMenu('inicio');
    }
  }, []);

  console.log(cartQuantity)
  console.log(carrito)
  console.log(activeCategory)
  console.log(activeMenu)
  console.log(dataCompany)
  console.log(productoAdded)
  console.log(selectedProduct)

  const loquehay = carrito.map((producto) => ({ ...producto }));
  console.log(loquehay)

    useEffect(() => {
      if (selectedProduct !== null) {
        const selectedProductId = selectedProduct.id; console.log(selectedProductId)

        if (productoAdded !== null && selectedProductId === productoAdded) {
          console.log(productoAdded)
          const updatedSelectedProduct = {
            ...selectedProduct,
            cantidad: cartQuantity
          };

          setCarrito(prevCarrito => [...prevCarrito, updatedSelectedProduct])
          if(productoAdded === selectedProductId)
            setProductoAdded(null)
        
        }
      }
    }, [productoAdded, selectedProduct, cartQuantity]);

  const handleAddToCart = (selectedProduct) => {
    setProductoAdded(selectedProduct);
  };

  const handleProductSelected = (producto) => {
    setSelectedProduct(producto);
  };

  const getQuantity = (cant) => {
    setCartQuantity(cant)
  }

  return (
    <Router>
      <Navbar carrito={carrito} setActiveMenu={setActiveMenu} setActiveCategory={setActiveCategory} cartQuantity={cartQuantity} />
      <Routes>
        <Route exact path="/Pre-entrega-2-React" element={<Home handleProductSelected={handleProductSelected} dataCompany={dataCompany} />} />
        <Route exact path="/Pre-entrega-2-React/playstation" element={<Company getQuantity={getQuantity} handleProductSelected={handleProductSelected} loading={loading} error={error} dataCompany={dataCompany} setActiveCategory={setActiveCategory} activeMenu={activeMenu} activeCategory={activeCategory} handleAddToCart={handleAddToCart} />} />
        <Route exact path="/Pre-entrega-2-React/xbox" element={<Company getQuantity={getQuantity} handleProductSelected={handleProductSelected} loading={loading} error={error} dataCompany={dataCompany} setActiveCategory={setActiveCategory} activeMenu={activeMenu} activeCategory={activeCategory} handleAddToCart={handleAddToCart} />} />
        <Route exact path="/Pre-entrega-2-React/nintendo-switch" element={<Company getQuantity={getQuantity} handleProductSelected={handleProductSelected} loading={loading} error={error} dataCompany={dataCompany} setActiveCategory={setActiveCategory} activeMenu={activeMenu} activeCategory={activeCategory} handleAddToCart={handleAddToCart} />} />
        <Route exact path="/:product/:productId" element={<ProductDetail cartQuantity={cartQuantity} getQuantity={getQuantity} handleAddToCart={handleAddToCart} product={selectedProduct} />} />
        <Route exact path="/Pre-entrega-2-React/carrito" element={<Carrito carrito={carrito} />} />
      </Routes>
    </Router>
  )
}

export default App
