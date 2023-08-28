import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/Image';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import config from '../../../config';

const cx = classNames.bind(styles);

const TITLE_FOOTER = [
    {
        title: 'Về Stellar',
        to: config.Routes.aboutStellar,
    },
    {
        title: 'Phòng nghỉ',
        to: config.Routes.bookRoom,
    },
    {
        title: 'Nhà hàng',
        to: config.Routes.restaurentAndBar,
    },
    {
        title: 'Hội thảo & sự kiện',
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

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('back-ground')}>
                <Link to={config.Routes.home}>
                    <Image src={images.logo} className={cx('logo')} />
                </Link>
                <div className={cx('menu-item')}>
                    {TITLE_FOOTER.map((item, index) => (
                        <Button className={cx('btn')} none_1 to={item.to} key={index}>
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>
            <div className={cx('thanh-ngang')}></div>
            <div className={cx('info')}>
                <div>Website chính thức của khách sạn Stellar</div>
                <div>Số điện thoại: (+84) 9465412XX</div>
                <div>Email: info@stellar.com.vn</div>
                <div>Địa chỉ: 01 Võ Văn Ngân, P. Linh Chiểu, Q. Thủ Đức, TP. Hồ Chí Minh</div>
            </div>
        </div>
    );
}

export default React.memo(Footer);
