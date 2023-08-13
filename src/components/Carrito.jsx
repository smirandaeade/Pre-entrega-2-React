const Carrito = ({ carrito }) => {
    // Crear un mapa para rastrear las cantidades por ID de producto
    const cantidadPorId = new Map();

    // Calcular las cantidades acumuladas por ID de producto
    carrito.forEach(item => {
        if (cantidadPorId.has(item.id)) {
            cantidadPorId.set(item.id, cantidadPorId.get(item.id) + parseInt(item.cantidad));
        } else {
            cantidadPorId.set(item.id, item.cantidad);
        }
    });

    return (
        <div>
            <h2>Carrito de compras</h2>
            <ul>
                {Array.from(cantidadPorId.entries()).map(([id, cantidad], index) => (
                    <li key={index}>
                        {"Producto: " + id + " cantidad: " + cantidad}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Carrito;
