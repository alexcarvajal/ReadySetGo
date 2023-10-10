
import PropTypes from 'prop-types';

const InterrogativeToBe = ({darkMode}) => {
  return (
    <div className={`${darkMode}`}>Interrogative</div>
  )
}

InterrogativeToBe.propTypes = {
  darkMode: PropTypes.string
};

export default InterrogativeToBe