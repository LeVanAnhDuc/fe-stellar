import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Image from '../../../components/Image';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import '../../../components/Icon';
import { Wrapper as PopperWrapper } from '../../../components/Popper';

import React, { useState } from 'react';
import Account from './Account';
import { Link } from 'react-router-dom';
import Language from './Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import config from '../../../config';

const cx = classNames.bind(styles);

const TITLE_HEADER = [
    {
        title: 'Giới thiệu',
        to: config.Routes.aboutStellar,
    },
    {
        title: 'Phòng nghỉ',
        to: config.Routes.bookRoom,
        icon: <FontAwesomeIcon icon={faAngleDown} />,
        children: [
            {
                title: 'Giới thiệu',
                id: '1',
            },
            {
                title: 'Phòng Superior Double Or Twin',
                id: '2',
            },
            {
                title: 'Phòng Deluxe Double',
                id: '3',
            },
            {
                title: 'Phòng Executive City View',
                id: '4',
            },
            {
                title: 'Phòng Suite Garden',
                id: '5',
            },
        ],
    },
    {
        title: 'Nhà hàng & Bar',
        to: config.Routes.restaurentAndBar,
    },
    {
        title: 'Hội thảo & Sự kiện',
        to: config.Routes.conferenceEvents,
    },
    {
        title: 'Tiện ích',
        to: config.Routes.utilities,
    },
    {
        title: 'Liên hệ',
        to: config.Routes.contact,
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
                <Link to={config.Routes.home}>
                    <Image src={images.logo} className={cx('logo')} onClick={() => setActiveButton(null)} />
                </Link>

                <div className={cx('menu')}>
                    <div className={cx('header_2')}>
                        {TITLE_HEADER.map((item, index) =>
                            item.icon ? (
                                <Tippy
                                    // visible={true}
                                    key={index}
                                    offset={[0, 10]}
                                    interactive={true}
                                    delay={[0, 300]}
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <h1 className={cx('more-menu')} tabIndex="-1" {...attrs}>
                                            <PopperWrapper className={cx('menu-list', 'custom-popper')}>
                                                {item.children.map((item2, index2) => (
                                                    <Button
                                                        className={cx('btn', 'custom-btn')}
                                                        none_1
                                                        // to={item.to}
                                                        key={index2}
                                                    >
                                                        {item2.title}
                                                    </Button>
                                                ))}
                                            </PopperWrapper>
                                        </h1>
                                    )}
                                >
                                    <Button
                                        className={cx('btn', 'custom-btn', 'hover')}
                                        none_1
                                        to={item.to}
                                        key={index}
                                        rightIcon={item.icon}
                                        onClick={() => handleActive(index)}
                                    >
                                        {item.title}
                                    </Button>
                                </Tippy>
                            ) : (
                                <Button
                                    className={
                                        activeButton === index && !item.icon
                                            ? cx('btn-active', 'custom-btn')
                                            : cx('btn', 'custom-btn')
                                    }
                                    none_1
                                    to={item.to}
                                    key={index}
                                    onClick={() => handleActive(index)}
                                >
                                    {item.title}
                                </Button>
                            ),
                        )}
                        <div className={cx('more-btn1')}>
                            {signIn === true ? (
                                <Account onClick={() => handleActive(null)} />
                            ) : (
                                <>
                                    <Button className={cx('btn', ' sign-in')} none_1 to={config.Routes.signIn}>
                                        Đăng nhập
                                    </Button>
                                </>
                            )}
                            <Language className={cx('lang')} />
                        </div>
                        {/* --------------------------------------------------------------------------------------- */}
                        {/* Responsive */}
                        <div className={cx('btn-bar')}>
                            <Tippy
                                // visible={true}
                                hideOnClick={false}
                                offset={[5, 10]}
                                interactive={true}
                                delay={[0, 300]}
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper className={cx('menu-list-resposive', 'custom-popper')}>
                                            {TITLE_HEADER.map((item, index) => (
                                                <Button
                                                    className={
                                                        activeButton === index && !item.icon
                                                            ? cx('btn-active-responsive')
                                                            : cx('btn')
                                                    }
                                                    none_1
                                                    to={item.to}
                                                    key={index}
                                                    onClick={() => handleActive(index)}
                                                    // style={{
                                                    //     color:
                                                    //         activeButton === index && !item.icon
                                                    //             ? 'var(--color-Gray-700)'
                                                    //             : 'var(--color-Sienna)',
                                                    // }}
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
                            <Link to={config.Routes.home}>
                                <Image
                                    src={images.logo}
                                    className={cx('logo-responsive')}
                                    onClick={() => setActiveButton(null)}
                                />
                            </Link>
                            <div className={cx('more-btn1-responsive')}>
                                {signIn === true ? (
                                    <Account onClick={() => handleActive(null)} />
                                ) : (
                                    <>
                                        <Button className={cx('btn', ' sign-in')} none_1 to={config.Routes.signIn}>
                                            Đăng nhập
                                        </Button>
                                    </>
                                )}
                                <Language className={cx('lang')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default React.memo(Header);
