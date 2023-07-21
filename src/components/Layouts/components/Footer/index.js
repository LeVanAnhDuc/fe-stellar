import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

import React from 'react';

const cx = classNames.bind(styles);

function Footer() {
    return <h1 className={cx('wrapper')}>Footer</h1>;
}

export default React.memo(Footer);
