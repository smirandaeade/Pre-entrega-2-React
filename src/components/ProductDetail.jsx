import { useState, useEffect } from 'react';
import Button from './Button';

const ProductDetail = ({cartQuantity, getQuantity, product, handleAddToCart }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    console.log(quantity)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [product]);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);

    };


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div>No se ha seleccionado ningún producto</div>;
    }

    return (
        <>
            <div className="h-screen flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="w-72">
                    <img className="m-auto" src={product.imagen} alt={product.nombre} />
                </div>
                <div className='flex flex-col mx-7 md:mx-0 h-40 justify-between'>
                    <div>
                        <h2 className="text-2xl mb-2">{product.nombre}</h2>
                        <p>{product.descripcion}</p>
                        <p>Precio: ${product.precio}</p>
                        {product.oferta && <p>¡Oferta!</p>}
                    </div>
                    <div className='mt-4'>
                        <Button cartQuantity={cartQuantity} getQuantity={getQuantity} quantity={quantity} producto={product} handleAddToCart={handleAddToCart} />
                        <div className='mt-4'>
                            <label htmlFor="quantity">Cantidad:</label>
                            <input className="ml-2 text-center rounded border-2 w-10" type="number" id="quantity" name="quantity" min="1" max="50" value={quantity} onChange={handleQuantityChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
