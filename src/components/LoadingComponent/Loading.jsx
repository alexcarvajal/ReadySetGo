import BackgroundMobile from '../../assets/BackgroundMobile.png'
import BackgroundTablet from '../../assets/BackgroundTablet.png'
import BackgroundDesktop from '../../assets/BackgroundPC.png'
import BackgroundLaptop from '../../assets/BackgroundLaptop.png'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const Loading = ({ isLoading, children }) => {
    const [opacityClass, setOpacityClass] = useState('opacity-100');
    useEffect(() => {
        if (!isLoading) {
            setOpacityClass('opacity-0');
        }
    }, [isLoading]);
    if (isLoading) {
        return (
            <div className={`fixed w-full z-50 h-full ${opacityClass}`}>
                {/*animate-fade-in animation-ease-in-out */}
                <img className="w-full h-full object-cover sm:block md:hidden lg:hidden xl:hidden" src={BackgroundMobile} alt="Loading..." />
                <img className="w-full h-full object-cover sm:hidden md:block lg:hidden xl:hidden" src={BackgroundTablet} alt="Loading..." />
                <img className="w-full h-full object-cover sm:hidden md:hidden lg:block xl:hidden" src={BackgroundDesktop} alt="Loading..." />
                <img className="w-full h-full object-cover sm:hidden md:hidden lg:hidden xl:block" src={BackgroundLaptop} alt="Loading..." />
            </div>
        );
    }
    return children;
}
Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.node,
};
export default Loading;
