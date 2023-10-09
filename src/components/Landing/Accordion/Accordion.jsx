import { useState } from "react"
import RightArrow from '../../../assets/RightArrow.svg'
import PropTypes from 'prop-types';

const Accordion = ({ title, content, darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`mb-2 transition-transform duration-300 ${isOpen ? 'transform translate-y-[heightOfContent]' : ''}`}>
            <div
                className={`${darkMode ? 'bg-custom-bismark text-custom-whisperText' : 'bg-[#e9e9e9]'} p-5 border-[#c9c9c6] rounded-md w-[280px] group ${isOpen ? 'is-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center">
                    <div className={`w-full ${isOpen ? 'font-bold' : ''}`}>
                        {title}
                    </div>
                    <img
                        src={RightArrow}
                        alt="Flecha"
                        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-[0deg]'}`}
                        width={25}
                        height={25}
                    />
                </div>
                <div className={`overflow-hidden max-h-0 ${isOpen ? 'max-h-[100px]' : ''}`}>
                    {content}
                </div>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    darkMode: PropTypes.bool.isRequired,
}
export default Accordion
