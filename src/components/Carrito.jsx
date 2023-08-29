import { useState } from 'react';
import { useAppContext } from "./context/AppContext";


const Carrito = () => {
    const [showSummary, setShowSummary] = useState(false);
    const [purchasedProducts, setPurchasedProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const { carrito, handleRemoveFromCart } = useAppContext();


    const productosAgrupados = new Map();

    carrito.forEach(item => {
        if (productosAgrupados.has(item.id)) {
            const productoExistente = productosAgrupados.get(item.id);
            productoExistente.cantidad += parseInt(item.cantidad);
        } else {
            productosAgrupados.set(item.id, { ...item });
        }
    });

    const productosAgrupadosArray = Array.from(productosAgrupados.values());

    const handleBuyClick = () => {
        setShowSummary(true);
        setPurchasedProducts(productosAgrupadosArray);
        
        // Calculate total cost
        const total = productosAgrupadosArray.reduce((acc, producto) => {
            return acc + (producto.cantidad * producto.precio);
        }, 0);
        setTotalCost(total);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Carrito de compras</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul className="w-full">
                        {productosAgrupadosArray.map((producto, index) => (
                            <li key={index} className="flex flex-col py-2 border-b">
                                <div className="flex items-center mb-2">
                                    <img src={producto.imagen} alt={producto.nombre} className="w-10 h-10 mr-2" />
                                    <span>{producto.nombre}</span>
                                </div>
                                <div>{"Cantidad: " + producto.cantidad}</div>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleRemoveFromCart(producto.id)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    {showSummary ? (
                        <div>
                            <h3 className="mt-4 text-lg font-semibold">Resumen de la compra:</h3>
                            <ul>
                                {purchasedProducts.map((producto, index) => (
                                    <li key={index}>
                                        {producto.nombre} - Cantidad: {producto.cantidad} - Precio unitario: ${producto.precio} - Total: ${producto.cantidad * producto.precio}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 font-semibold">Total de la compra: ${totalCost}</p>
                        </div>
                    ) : (
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                            onClick={handleBuyClick}
                        >
                            Comprar
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Carrito;
