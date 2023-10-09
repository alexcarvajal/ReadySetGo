import PropTypes from 'prop-types';
import Accordion from './Accordion/Accordion';

const Landing = ({ darkMode }) => {
    return (
        <>
            <h1 className={`flex flex-col items-center mt-10 font-semibold ${darkMode ? 'text-white' : 'text-black'} `}>Ingresa a tu curso</h1>
            <div className="flex flex-col items-center mt-10 h-screen">
                <Accordion title="Verb To Be" content="Componente del curso" />
                <Accordion title="Present Continuous" content="Componente del curso" />
                <Accordion title="Simple Present" content="Componente del curso" />
                <Accordion title="Simple Past" content="Componente del curso" />
                <Accordion title="Present Perfect" content="Componente del curso" />
                

            </div>
        </>
    );
}
Landing.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired
};
export default Landing