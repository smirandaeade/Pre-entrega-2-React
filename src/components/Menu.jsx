import { useState } from 'react';
import SubMenu from './SubMenu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Menu = ({ onMenuClick }) => {


    const [showSubMenu, setShowSubMenu] = useState(false);
    let [activeMenu2, setActiveMenu] = useState(null);


    const handleMouseOver = (menu) => {
        if (window.innerWidth < 768) {
            return;
        }
        setShowSubMenu(true);
        setActiveMenu(menu);

    };

    const handleMouseOut = () => {
        if (window.innerWidth < 768) {
            return;
        }

        setShowSubMenu(false);
        setActiveMenu(null);
    };

    return (
        <>
            <Link to="/" className="md:h-full md:flex md:items-center">
                <div className="text-gray-600 hover:text-gray-800 px-2 py-2 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none shadow-xl drop-shadow-2xl md:shadow-none justify-center">
                    <p>Inicio</p>
                </div>
            </Link>
            <div className='md:h-full' onMouseOut={handleMouseOut}
                onMouseOver={() => handleMouseOver('PlayStation')}>
                <Link to="/playstation"

                    className="md:h-full md:flex md:items-center"
                >
                    <div
                        className="md:w-30 text-white bg-blue-800 hover:bg-blue-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center shadow"
                    >
                        <p className="p-2">PlayStation</p>
                    </div>


                </Link>
                {showSubMenu && activeMenu2 === 'PlayStation' && <SubMenu activeMenu={activeMenu2} />}
            </div>

            <div className='md:h-full' onMouseOut={handleMouseOut}
                onMouseOver={() => handleMouseOver('Xbox')}>
                <Link to="/xbox"
                    className="md:h-full md:flex md:items-center"
                >
                    <div
                        className="md:w-20 text-white bg-lime-700 hover:bg-lime-500 md:h-full ${} items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center"
                    >
                        <p className="p-2 md:m-auto justify-center">Xbox</p>
                    </div>

                </Link>
                {showSubMenu && activeMenu2 === 'Xbox' && <SubMenu activeMenu={activeMenu2} />}
            </div>
            <div className='md:h-full' onMouseOut={handleMouseOut}
                onMouseOver={() => handleMouseOver('Nintendo Switch')}>
                <Link to="/nintendo-switch"
                    className="w-30 md:h-full md:flex md:items-center">
                    <div
                        className="md:w-auto md:w-30 text-white bg-red-700 hover:bg-red-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center"
                    >
                        <p className="p-2">Nintendo Switch</p>
                    </div>

                </Link>
                {showSubMenu && activeMenu2 === 'Nintendo Switch' && <SubMenu activeMenu={activeMenu2} />}
            </div>
        </>
    );
};

Menu.propTypes = {
    onMenuClick: PropTypes.func.isRequired,
};

export default Menu;