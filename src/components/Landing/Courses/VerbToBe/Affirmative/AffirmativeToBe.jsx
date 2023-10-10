
import PropTypes from 'prop-types';

const AffirmativeToBe = ({darkMode}) => {
  return (
    <div className={`${darkMode}`}>AffirmativeToBe</div>
  )
}

AffirmativeToBe.propTypes = {
  darkMode: PropTypes.string
};

export default AffirmativeToBe