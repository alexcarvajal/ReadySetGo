import PropTypes from 'prop-types';

const Landing = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-screen transition-colors duration-500">
            <h1 className="text-3xl text-center font-bold text-custom-primary dark:text-custom-dark">
                Bienvenido al modo {darkMode ? 'oscuro' : 'claro'}
            </h1>
            <button
                className="justify-center items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-500"
                onClick={toggleDarkMode}
            >
                Cambiar a modo {darkMode ? 'claro' : 'oscuro'}
            </button>
        </div>
    )
}

Landing.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired
};
export default Landing