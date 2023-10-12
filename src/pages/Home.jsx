import PropTypes from 'prop-types';
import Header from "../components/Header"
import Landing from "../components/Landing/Landing"

const Home = ({ darkMode, toggleDarkMode, title, showButton }) => {
  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showButton={false} title='ReadySetGo'  />
      <Landing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  title: PropTypes.string
};
export default Home