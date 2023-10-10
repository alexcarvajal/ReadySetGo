import PropTypes from 'prop-types';
import Accordion from './Accordion/Accordion';
const Landing = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className={`min-h-full ${darkMode?'bg-custom-shark':'bg-custom-whisper'}`}>
            <h1 className=
                {
                    `flex flex-col items-center pt-10 text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`
                }
            >Choose your course</h1>
            <div className="flex flex-col items-center mt-10 h-screen">
                <Accordion title="Verb To Be"
                    content={
                        [{ text: 'Affirmative', to: '/affirmativetobe' },
                        { text: 'Negative', to: '/negativetobe' },
                        { text: 'Interrogative', to: '/interrogativetobe' }]
                    } darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Accordion title="Present Continuous" content={
                    [{ text: 'Affirmative', to: '/affirmativetobe' },
                    { text: 'Interrogative', to: '/interrogativetobe' }]
                } darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Accordion title="Simple Present" content={
                    [{ text: 'Affirmative', to: '/affirmativetobe' },
                    { text: 'Negative', to: '/negativetobe' },
                    { text: 'Interrogative', to: '/interrogativetobe' }]
                } darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Accordion title="Simple Past" content={
                    [{ text: 'Affirmative', to: '/affirmativetobe' },
                    { text: 'Negative', to: '/negativetobe' },
                    { text: 'Interrogative', to: '/interrogativetobe' }]
                } darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Accordion title="Present Perfect" content={
                    [{ text: 'Affirmative', to: '/affirmativetobe' },
                    { text: 'Negative', to: '/negativetobe' },
                    { text: 'Interrogative', to: '/interrogativetobe' }]
                } darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </div>
    );
}
Landing.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired
};
export default Landing