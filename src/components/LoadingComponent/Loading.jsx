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
            <div className={`fixed w-full h-full ${opacityClass}`}>
                <img className="w-full h-full animate-fade-in object-cover sm:hidden animation-ease-in-out" src={BackgroundMobile} alt="Loading..." />
                <img className="w-full h-full animate-fade-in object-cover hidden sm:block md:hidden animation-ease-in-out" src={BackgroundTablet} alt="Loading..." />
                <img className="w-full h-full animate-fade-in object-cover hidden md:block lg:hidden animation-ease-in-out" src={BackgroundDesktop} alt="Loading..." />
                <img className="w-full h-full animate-fade-in object-cover hidden lg:block animation-ease-in-out" src={BackgroundLaptop} alt="Loading..." />
            </div>
        );
    }
    return children;
}
Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};
export default Loading;
