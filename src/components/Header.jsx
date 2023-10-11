import DarkMode from './Buttons/DarkMode';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode, title, showButton }) => {
    return (
        <div className={`flex flex-row items-center h-16 bg-black text-white ${darkMode ? 'dark:text-custom-dark' : 'sm:text-black md:text-yellow-200'} justify-between text-center`}>
            <div className={`flex items-center ${!showButton ? 'ml-4' : ''}`}>
                {showButton &&
                    <Link to='/' className="mr-4 ml-6">
                        <IoChevronBackCircleOutline size={24} />
                    </Link>}
                {!showButton && <div className="hidden md:block lg:w-[5%] md:w-[15%]"></div>} {/* Espaciador del lado izquierdo cuando no hay botón */}
            </div>
            <h1 className="text-3xl font-bold mx-auto">{title}</h1>
            <div className={`flex items-center ${!showButton ? 'mr-4' : ''}`}>
                <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </div>
    );
};

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
    title: PropTypes.string,
    showButton: PropTypes.bool.isRequired
};

export default Header;

