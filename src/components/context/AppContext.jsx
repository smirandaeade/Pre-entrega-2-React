import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIIwTsHYOPqgpESCFcmTPwyOO2evzoRMI",
    authDomain: "react-js-ad391.firebaseapp.com",
    projectId: "react-js-ad391",
    storageBucket: "react-js-ad391.appspot.com",
    messagingSenderId: "129402098185",
    appId: "1:129402098185:web:79c10e7ff8c97c21f8ded8",
    measurementId: "G-1FMMXE7NMW"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState('inicio');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeCategory, setActiveCategory] = useState([null, activeMenu]);
    const [dataCompany, setDataCompany] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [productoAdded, setProductoAdded] = useState(null);
    const [cartQuantity, setCartQuantity] = useState(null);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const getCompany = async () => {
            setLoading(true);
            try {
                const db = getFirestore();

                // Consulta la colección "companias" en Firestore
                const companiesCollection = collection(db, 'companias');
                const querySnapshot = await getDocs(companiesCollection);

                // Mapea los datos de Firestore en un formato similar al JSON original
                const companiesData = querySnapshot.docs.map((doc) => doc.data());

                if (activeMenu === 'inicio') {
                    const productsOnSale = companiesData.flatMap((compania) =>
                        compania.categorias.flatMap((categoria) =>
                            categoria.productos.filter((producto) => producto.oferta)
                        )
                    );

                    setDataCompany(productsOnSale);
                } else {
                    const foundCompany = companiesData.find(
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
                if (productoAdded === selectedProductId)
                    setProductoAdded(null)

            }
        }
    }, [productoAdded, selectedProduct, cartQuantity]);

    useEffect(() => {
        // Resto del código...

        // Agregar los console.log aquí, solo para propósitos de depuración
        console.log("cartQuantity:", cartQuantity);
        console.log("carrito length:", carrito.length);
        console.log("activeCategory:", activeCategory);
        console.log("productoAdded:", productoAdded);
        console.log("selectedProduct:", selectedProduct);
    }, [cartQuantity, carrito.length, activeCategory, productoAdded, selectedProduct]);

    // Más lógica y funciones aquí
    const handleAddToCart = (selectedProduct) => {
        setProductoAdded(selectedProduct);
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCarrito = carrito.filter(item => item.id !== productId);
        setCarrito(updatedCarrito);
    };

    const handleProductSelected = (producto) => {
        setSelectedProduct(producto);
    };

    const getQuantity = (cant) => {
        setCartQuantity(cant)
    }

    return (
        <AppContext.Provider value={{
            activeMenu,
            setActiveMenu,
            selectedProduct,
            setSelectedProduct,
            activeCategory,
            setActiveCategory,
            dataCompany,
            error,
            loading,
            setLoading,
            productoAdded,
            setProductoAdded,
            cartQuantity,
            setCartQuantity,
            carrito,
            setCarrito,
            handleAddToCart, // Agrega las funciones al contexto
            handleRemoveFromCart,
            getQuantity,
            handleProductSelected
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
