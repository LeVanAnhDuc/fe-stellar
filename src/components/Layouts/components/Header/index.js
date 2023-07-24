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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';

const cx = classNames.bind(styles);

const TITLE_HEADER = [
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
    const [signIn, setSignIn] = useState(false);

    const handleActive = (index) => {
        setActiveButton(index);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('back-ground')}>
                <Link to={'/'}>
                    <Image src={images.logo} className={cx('logo')} onClick={() => setActiveButton(null)} />
                </Link>

                <div className={cx('menu')}>
                    <div className={cx('header_1')}>
                        {/* <span className={cx('sdt')}>Số điện thoại: 09465412XX</span> */}
                        <div className={cx('more-btn1')}>
                            {signIn === true ? (
                                <Account />
                            ) : (
                                <>
                                    <Button className={cx('btn', 'sign-up')} none_1>
                                        Đăng ký
                                    </Button>
                                    <Button className={cx('btn', ' sign-in')} none_1>
                                        Đăng nhập
                                    </Button>
                                </>
                            )}
                            <Language className={cx('lang')} />
                        </div>
                    </div>
                    <div className={cx('header_2')}>
                        {TITLE_HEADER.map((item, index) => (
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
                        {/* --------------------------------------------------------------------------------------- */}
                        {/* Responsive */}
                        <div className={cx('btn-bar')}>
                            <Tippy
                                // visible={true}
                                offset={[5, 10]}
                                interactive={true}
                                delay={[0, 300]}
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper className={cx('menu-list-resposive')}>
                                            {TITLE_HEADER.map((item, index) => (
                                                <Button
                                                    // className={cx('btn', 'custom-btn')}
                                                    none_1
                                                    to={item.to}
                                                    key={index}
                                                    onClick={() => handleActive(index)}
                                                    style={{
                                                        backgroundColor:
                                                            activeButton === index
                                                                ? 'var(--color-Apricot)'
                                                                : 'var(--color-Champagne)',
                                                    }}
                                                >
                                                    {item.title}
                                                </Button>
                                            ))}
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <FontAwesomeIcon className={cx('menu_responsive')} icon={faBars} />
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);
