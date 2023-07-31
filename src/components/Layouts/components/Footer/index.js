import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../Image';
import images from '../../../../assets/images';
import Button from '../../../Button';

const cx = classNames.bind(styles);

const TITLE_FOOTER = [
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
        title: 'Liên hệ',
        to: '/lien-he',
    },
];

function Footer() {
    return (
        <h1 className={cx('wrapper')}>
            <div className={cx('back-ground')}>
                <Link to={'/'}>
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
        </h1>
    );
}

export default React.memo(Footer);
