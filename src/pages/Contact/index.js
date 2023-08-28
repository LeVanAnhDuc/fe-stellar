import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import React from 'react';
import Button from '../../components/Button';

import { Container, Row } from 'react-bootstrap';

import SliderHero from '../../components/SliderHero';
import Map from '../../components/Map';

import { sliderHero1, sliderHero2, sliderHero3, sliderHero4 } from '../../assets/images/home';

const cx = classNames.bind(styles);

function Contact() {
    const heroImages = [sliderHero1, sliderHero2, sliderHero3, sliderHero4];

    return (
        <>
            <SliderHero images={heroImages}></SliderHero>

            <Container fluid="md">
                <Row className={cx('section')}>
                    <div className={cx('px-0', 'left')}>
                        <h1>Gửi tin nhắn cho chúng tôi</h1>
                        <hr />
                        <form>
                            <div htmlFor="name">
                                <label htmlFor="name">Họ và tên:</label>
                                <input id="name" name="name" type="text" placeholder="Nguyễn Văn A" />
                            </div>
                            <div>
                                <label htmlFor="phone">Số điện thoại:</label>
                                <input id="phone" name="phone" type="text" placeholder="09465412XX" />
                            </div>
                            <div>
                                <label htmlFor="massage">Massage:</label>
                                <textarea id="massage" name="massage"></textarea>
                            </div>
                            <Button className={cx('btn')} filled_1={true}>
                                Gửi tin nhắn
                            </Button>
                        </form>
                    </div>
                    <div className={cx('px-0', 'right')}>
                        <div className={cx('heading-wrapper')}>
                            <h1>Liên hệ với chúng tôi</h1>
                            <p>The Stellar Hotel</p>
                        </div>
                        <div className={cx('content-wrapper')}>
                            <p>Địa chỉ liên hệ: 01 Võ Văn Ngân, P. Linh Chiểu, Q. Thủ Đức, TP. Hồ Chí Minh</p>
                            <p>Điện thoại: (+84) 9465412XX</p>
                            <p>Email: info@stellar.com.vn</p>
                        </div>
                        <Map className={cx('map')} />
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Contact;
