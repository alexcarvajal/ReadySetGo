import PropTypes from 'prop-types';
import Header from "../components/Header"
import Landing from "../components/Landing/Landing"

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <div >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Landing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}
Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};
export default Home