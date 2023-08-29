import { useAppContext } from "./context/AppContext";

const Button = ({quantity, producto}) => {
    
    const { getQuantity, handleAddToCart } = useAppContext();

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
                handleAddToCart(producto.id)
                getQuantity(quantity)
            }}
        >
            Añadir al carrito
        </button>
    )
}

export default Button