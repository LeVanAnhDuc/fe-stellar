import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Scroll.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ScrollClickTop() {
    const [showButton, setShowButton] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 10) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={cx('scroll-to-top')}>
            {showButton && (
                <Button filled_2 className={cx('btn')} onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </Button>
            )}
        </div>
    );
}

export default ScrollClickTop;
