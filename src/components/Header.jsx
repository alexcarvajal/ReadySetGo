import DarkMode from './Buttons/DarkMode';
import PropTypes from 'prop-types';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className={` flex flex-row justify-between content-between items-center h-16 bg-black text-white ${darkMode ? 'dark:text-custom-dark' : 'sm:text-black md:text-yellow-200'} text-center`}>
            <div className="invisible md:visible lg:w-[5%] md:w-[15%]"></div> {/* Elemento espaciador */}
            <h1 className="text-3xl font-bold">READY, SET, GO!</h1>
            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
};
Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};
export default Header;

