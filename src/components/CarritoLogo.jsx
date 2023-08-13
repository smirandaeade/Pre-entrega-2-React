import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CarritoLogo = ({ carrito }) => {
    const totalCantidad = carrito.reduce((total, producto) => total + parseInt(producto.cantidad, 10), 0);

    return (
        <Link to="/Pre-entrega-2-React/carrito">
            <div className="text-gray-600 hover:text-gray-800 px-2 py-2 md:h-full flex rounded-full mb-2 md:mb-0 md:rounded-none shadow-xl drop-shadow-2xl md:shadow-none justify-center">
                <span className="flex items-center">
                    <p className='mr-1'>Carrito</p>
                    <FaShoppingCart className="text-gray-600" />
                    {carrito.length > 0 && (
                        <span className='ml-2'>{"- " + totalCantidad}</span>
                    )}
                </span>
            </div>
        </Link>
    );
}

export default CarritoLogo;
