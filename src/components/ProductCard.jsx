import { Link } from "react-router-dom";
import Button from "./Button";
import { useAppContext } from "./context/AppContext";

const ProductCard = ({producto}) => {
    
    const { getQuantity, handleAddToCart, handleProductSelected } = useAppContext();

    console.log(producto)
    return (
        <div className="flex flex-col h-[25rem] w-60 card p-3 border-2 rounded-lg shadow-lg m-auto">
            <Link to={`/${producto.nombre.toLowerCase()}/${producto.id}`} key={producto.id} className="flex-grow">
                <div
                    onClick={() => handleProductSelected(producto)}
                    className="flex flex-col h-full"
                >
                    <div className="text-center">
                        <img className="m-auto" src={producto.imagen} alt={producto.nombre} />
                        <h2>{producto.nombre}</h2>
                        <p>Precio: ${producto.precio}</p>
                        {producto.oferta && <p>¡Oferta!</p>}
                    </div>
                </div>
            </Link>

            <div onClick={() => {
                handleProductSelected(producto)
                getQuantity(1)
            }} className="border-t-2 pt-3 m-auto">
                <Button getQuantity={getQuantity} producto={producto} handleAddToCart={handleAddToCart} />

            </div>
        </div>
    );
};

export default ProductCard;
