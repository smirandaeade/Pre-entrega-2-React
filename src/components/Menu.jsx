import { Link } from 'react-router-dom';


const Menu = ({ setActiveMenu, setActiveCategory }) => {


    const handleOnClick = (menu) => {
        setActiveMenu(menu)
        setActiveCategory([null, menu])

    }
    return (
        <>
            <Link to="/Pre-entrega-2-React" onClick={() => handleOnClick('inicio')} className="md:h-full md:flex md:items-center" >
                <div className="text-gray-600 hover:text-gray-800 px-2 py-2 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none shadow-xl drop-shadow-2xl md:shadow-none justify-center">
                    <p>Inicio</p>
                </div>
            </Link>
            <div className='md:h-full' onClick={() => handleOnClick('PlayStation')}>
                <Link to="/Pre-entrega-2-React/playstation" className="md:h-full md:flex md:items-center">
                    <div
                        className="md:w-30 text-white bg-blue-800 hover:bg-blue-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center shadow">
                        <p className="p-2">PlayStation</p>
                    </div>
                </Link>
            </div>
            <div className='md:h-full'
                onClick={() => handleOnClick('Xbox')}>
                <Link to="/Pre-entrega-2-React/xbox"
                    className="md:h-full md:flex md:items-center">
                    <div className="md:w-20 text-white bg-lime-700 hover:bg-lime-500 md:h-full ${} items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center">
                        <p className="p-2 md:m-auto justify-center">Xbox</p>
                    </div>
                </Link>
            </div>
            <div className='md:h-full' onClick={() => handleOnClick('Nintendo Switch')}>
                <Link to="/Pre-entrega-2-React/nintendo-switch" className="w-30 md:h-full md:flex md:items-center">
                    <div className="md:w-auto md:w-30 text-white bg-red-700 hover:bg-red-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center">
                        <p className="p-2">Nintendo Switch</p>
                    </div>

                </Link>
            </div>
        </>
    );
};

export default Menu;