import { Link } from "react-router-dom";

const Home = ({ dataCompany, handleProductSelected }) => {
    return (
        <div className="flex flex-col justify-evenly items-center h-screen">
            <div>
                <h1 className="text-4xl">Bienvenidos a console.play</h1>
            </div>
            <div className="flex flex-col items-center border-2 w-[90%]">
                <h2 className="text-2xl mb-14">Ofertas</h2>
                {dataCompany && dataCompany.length > 0 ? (
                    <div className="flex flex-wrap gap-3 justify-center">
                        {dataCompany.map((producto) => (
                            <div key={producto.id}>
                                <div className="w-36">
                                    {producto.oferta && (
                                        <Link to={`/${producto.nombre.toLowerCase()}/${producto.id}`} onClick={()=> handleProductSelected(producto)}>
                                            <img
                                                className="w-44"
                                                key={producto.id}
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                            />
                                            <h3>{producto.nombre}</h3>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center mt-8">
                        No hay productos en oferta disponibles.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
