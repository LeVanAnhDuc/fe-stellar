import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Image from '../../../Image';
import images from '../../../../assets/images';
import Button from '../../../Button';
import '../../../Icon';

import React, { useState } from 'react';
import Account from './Account';
import { Link } from 'react-router-dom';
import Language from './Language';

const cx = classNames.bind(styles);

const HEADER_2 = [
    {
        title: 'Về Stellar',
        to: '/ve-Stellar',
    },
    {
        title: 'Phòng nghỉ',
        to: '/dat-phong',
    },
    {
        title: 'Nhà hàng',
        to: '/nha-hang-quan-bar',
    },
    {
        title: 'Hội thảo & sự kiện',
        to: '/hoi-thao-su-kien',
    },
    {
        title: 'Tiện ích',
        to: '/tien-ich',
    },
    {
        title: 'Đặt chỗ của tôi',
        to: '/dat-cho-cua-toi',
    },
    {
        title: 'Liên hệ',
        to: '/lien-he',
    },
];

function Header() {
    const [activeButton, setActiveButton] = useState(null);
    const handleActive = (index) => {
        setActiveButton(index);
    };

    return (
        <header className={cx('wrapper')}>
            <Link to={'/'}>
                <Image src={images.logo} className={cx('logo')} onClick={() => setActiveButton(null)} />
            </Link>

            <div className={cx('menu')}>
                <div className={cx('header_1')}>
                    <span className={cx('sdt')}>Số điện thoại: 09465412XX</span>
                    <div className={cx('more-btn1')}>
                        <Button className={cx('btn')} none_1>
                            Đăng ký
                        </Button>
                        <Button className={cx('btn')} none_1>
                            Đăng nhập
                        </Button>
                        <Language />
                    </div>
                </div>
                <div className={cx('header_2')}>
                    {HEADER_2.map((item, index) => (
                        <Button
                            className={cx('btn', 'custom-btn')}
                            none_1
                            to={item.to}
                            key={index}
                            onClick={() => handleActive(index)}
                            style={{
                                backgroundColor:
                                    activeButton === index ? 'var(--color-Apricot)' : 'var(--color-Champagne)',
                            }}
                        >
                            {item.title}
                        </Button>
                    ))}

                    {/* <Account onClick={() => setActiveButton(null)} /> */}
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);
