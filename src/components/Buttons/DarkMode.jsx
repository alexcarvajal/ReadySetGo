import PropTypes from 'prop-types';
import MoonButton from '../../assets/MoonDarkButton.svg'
import SunButton from '../../assets/SunDarkButton.svg'
const DarkMode = ({ darkMode, toggleDarkMode }) => {
    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="sr-only" // Esconde el input original
                />
                <div className="block bg-gray-600 w-14 h-8 mr-4 rounded-full relative">
                    {/* Ícono del sol */}
                    <img src={SunButton} className={`absolute top-1 left-1 w-6 h-6 transition-transform duration-300 ease-in-out transform ${darkMode ? 'translate-x-full opacity-0' : 'opacity-100'}`} />
                    <img src={MoonButton} className={`absolute top-1 left-1 w-6 h-6 transition-transform duration-300 ease-in-out transform ${darkMode ? 'translate-x-full opacity-100' : 'opacity-0'}`} />
                </div>
            </div>
        </label>
    )
}
DarkMode.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};
export default DarkMode;
