
import PropTypes from 'prop-types';

const NegativeToBe = ({darkMode}) => {
  return (
    <div className={`${darkMode}`}>Negative</div>
  )
}

NegativeToBe.propTypes = {
  darkMode: PropTypes.string
};

export default NegativeToBe;
