import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Image from '../../../components/Image';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import '../../../components/Icon';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import React, { useEffect, useState } from 'react';
import Account from './Account';
import { Link } from 'react-router-dom';
import Language from './Language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import config from '../../../config';

import { useSelector } from 'react-redux';
import { getStateHeaderSlice } from '../../../redux/select';
import { typeRoomApi } from '../../../apis';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Header() {
    const { isSignIn } = useSelector(getStateHeaderSlice);
    const [activeButton, setActiveButton] = useState(null);

    const handleActive = (index) => {
        setActiveButton(index);
    };

    const [typeRooms, setTypeRooms] = useState([]);
    useEffect(() => {
        let ignore = false;
        async function fetchTypeRooms() {
            await typeRoomApi
                .getRoomType()
                .then((response) => {
                    setTypeRooms(response.data.data);
                })
                .catch((error) => {
                    toast.error(error.response?.data.message ?? 'Mất kết nối server!');
                });
        }

        !ignore && fetchTypeRooms();

        return () => {
            ignore = true;
        };
    }, []);

    const TITLE_HEADER = [
        {
            title: 'Giới thiệu',
            to: config.Routes.aboutStellar,
        },
        {
            title: 'Phòng nghỉ',
            icon: <FontAwesomeIcon icon={faAngleDown} />,
            to: null,
            children: typeRooms,
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
                                                        to={config.Routes.bookRoom + '#' + item2._id}
                                                        key={index2}
                                                    >
                                                        {item2.name}
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
                            {isSignIn === true ? (
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
                                offset={[-90, 10]}
                                interactive={true}
                                delay={[0, 300]}
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper className={cx('menu-list-resposive', 'custom-popper')}>
                                            {TITLE_HEADER.map((item, index) => (
                                                <Button
                                                    className={
                                                        activeButton === index ? cx('btn-active-responsive') : cx('btn')
                                                    }
                                                    none_1
                                                    to={item.to === null ? config.Routes.bookRoom : item.to}
                                                    key={index}
                                                    onClick={() => handleActive(index)}
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
                                {isSignIn === true ? (
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
