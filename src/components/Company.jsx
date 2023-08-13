
import ProductCard from "./ProductCard";
import Categories from "./Categories";

const Company = ({getQuantity, handleProductSelected, activeMenu, handleAddToCart, activeCategory, setActiveCategory, dataCompany, error, loading }) => {


    const handleTitleBgColor = () => {
        if (activeMenu === 'PlayStation') {
            return 'bg-blue-800';
        } else if (activeMenu === 'Xbox') {
            return 'bg-lime-700';
        } else if (activeMenu === 'Nintendo Switch') {
            return 'bg-red-700';
        }
    };

    return (
        <div>
            <div className={`${handleTitleBgColor()}`}>
                <p className="text-center text-white">{activeMenu}</p>
            </div>

            <Categories activeMenu={activeMenu} setActiveCategory={setActiveCategory} />

            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <div className=" -z-50 animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}

            {error && (
                <div className="text-red-500 text-center mt-8">
                    Error al cargar los datos. Por favor, intenta nuevamente.
                </div>
            )}

            {!loading && !error && dataCompany && !dataCompany.categorias?.length && (
                <div className="text-center mt-8">
                    No se encontraron datos para la compañía seleccionada.
                </div>
            )}

            {!loading && !error && dataCompany && dataCompany.categorias && (
                <div className="flex flex-col">
                    <h1 className="text-xl text-center mt-8 mb-8">{activeCategory[0] !== null ? activeCategory[0] : 'Todos los productos'}</h1>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3">
                        {dataCompany.categorias.map((categoria) => {
                            if (activeCategory[0] === null && activeCategory[1] !== null || activeCategory[0] === categoria.nombre.toLowerCase() && activeCategory[1] === dataCompany.nombre) {
                                return categoria.productos.map((producto) => (
                                    <ProductCard
                                        key={producto.id}
                                        getQuantity={getQuantity}
                                        producto={producto}
                                        handleAddToCart={handleAddToCart}
                                        handleProductSelected={handleProductSelected}
                                    />
                                ));
                            }
                            return null;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Company;
