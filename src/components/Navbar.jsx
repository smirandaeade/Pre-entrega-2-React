import { useState } from 'react';
import Carrito from './CarritoLogo';
import Menu from './Menu';
import Hamburguer from './Hamburguer';
import Logo from './Logo';


const Navbar = ({carrito, cartQuantity, setActiveMenu, setActiveCategory}) => {

    const [showMenu, setShowMenu] = useState(false);

    const handleHamburguerClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-white shadow sticky top-0">
            <div className="max-w-7x7 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                    <div className="md:flex items-center hidden lg:w-auto lg:mr-56 xl:mr-96 h-full">
                        <Menu setActiveMenu={setActiveMenu} setActiveCategory={setActiveCategory}/>
                    </div>
                    <div className="hidden md:block">
                        <Carrito carrito={carrito} cartQuantity={cartQuantity} />
                    </div>
                    <div onClick={handleHamburguerClick} className="z-50 focus:outline-none md:hidden">
                        <Hamburguer />
                    </div>
                </div>
            </div>

            <div className={`${showMenu ? "block z-50" : "hidden"} items-center flex flex-col w-full md:hidden fixed top-auto -z-10 px-8 py-8 bg-white h-full`}>
                <div className='w-full max-w-md mt-0'>
                    <Menu setActiveMenu={setActiveMenu} setActiveCategory={setActiveCategory}/>
                    <Carrito carrito={carrito} cartQuantity={cartQuantity}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
