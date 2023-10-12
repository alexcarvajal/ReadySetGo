import Header from '../../../../Header';
import PropTypes from 'prop-types';

const InterrogativeToBe = ({ darkMode, toggleDarkMode, title, showButton }) => {
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showButton={true}  title="Interrogative To Be" />
      <div className={`min-h-full ${darkMode ? 'bg-custom-shark' : 'bg-custom-whisper'}`}>
        <h1 className=
          {
            `flex flex-col items-center pt-10 text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`
          }
        >Choose your course</h1>
        <div className="flex flex-col items-center mt-10 h-screen">

        </div>
      </div>
    </>
  )
}

InterrogativeToBe.propTypes = {
  darkMode: PropTypes.string,
  toggleDarkMode: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default InterrogativeToBe