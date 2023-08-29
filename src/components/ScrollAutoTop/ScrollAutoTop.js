import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollAutoTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0, {
            behavior: 'smooth',
        });
    }, [pathname]);
    return null;
}

export default ScrollAutoTop;
