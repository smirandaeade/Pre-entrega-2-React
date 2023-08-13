import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ dataCompany, handleProductSelected }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full p-5">
                <h1 className="text-4xl mb-5">Bienvenidos a console.play</h1>
                <div className="border-2">
                    <h2 className="text-2xl p-3">Ofertas</h2>
                    {dataCompany && dataCompany.length > 0 ? (
                        <Slider {...settings}>
                            {dataCompany.map((producto) => (
                                <div key={producto.id} className="p-4">
                                    {producto.oferta && (
                                        <div className="bg-white rounded-lg p-4">
                                            <img
                                                className="w-32 h-32 object-contain mx-auto"
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                            />
                                            <h3 className="text-center mt-2">{producto.nombre}</h3>
                                            <Link to={`/${producto.nombre.toLowerCase()}/${producto.id}`} key={producto.id}>
                                                <button onClick={()=>handleProductSelected(producto)} className="block mx-auto mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">Ver Detalles</button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <div className="text-center mt-8">
                            No hay productos en oferta disponibles.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
