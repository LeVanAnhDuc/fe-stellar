import { Carousel, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { pic1, pic2, pic3, Suite1 } from '../../assets/images/bookroom';
import styles from './ViewPrice.module.scss';
import Image from '../../components/Image';
import config from '../../config';
const cx = classNames.bind(styles);

function ViewPrice() {
    const images = [pic1, pic2, pic3];
    const [selectedValue, setSelectedValue] = useState('1');

    const handleSelectionChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const isSelectionOne = selectedValue === '1';

    return (
        <>
            <div className={cx('hero')}>
                <Carousel
                    className={cx('item-wrapper')}
                    controls={false}
                    wrap={true}
                    indicators={false}
                    interval={3000}
                >
                    {images.map((image, index) => (
                        <Carousel.Item key={index} className={cx('item')}>
                            <div
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    maxWidth: '100%',
                                    height: '100%',
                                }}
                            ></div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <Container fluid className={cx('date')}>
                <Row>
                    <Col className={cx('col')}>
                        <input id="date-checkin" type="date" />
                    </Col>
                    <Col className={cx('col')}>
                        <input id="date-checkin" type="date" />
                    </Col>
                    <Col className={cx('col')}>
                        <a
                            className={`btn btn-primary ${isSelectionOne ? 'disabled' : ''}`}
                            href="/dat-cho-cua-toi"
                            role="button"
                        >
                            THANH TOÁN
                        </a>
                    </Col>
                </Row>
            </Container>
            <div className={cx('ListRoom')}>
                <Container fluid="md">
                    <Row className={cx('Room')}>
                        <Col className={cx('col')}>
                            <Image className={cx('ImageRoom')} src={Suite1} alt="imageRoom" />
                        </Col>
                        <Col className={cx('col')}>
                            <Row className={cx('InfoRoom')}>
                                <h1>Phòng Suite Garden</h1>
                                <p>
                                    Phòng Suite Garden được phối hợp phong cách hiện đại với cảm hứng từ cây xanh, rộng
                                    rãi, hoàn hảo cho các kì nghỉ cuối tuần hay chuyến khám phá của quý khách. Ban công
                                    rộng và được sắp xếp để quý khách luôn cảm nhận được không khí trong lành, gió nhẹ
                                    lay và bóng mát từ các tán cây
                                </p>
                                <div style={{ display: ' flex' }}>
                                    <p>
                                        <b>Diện tích: </b> 40 m2{' '}
                                    </p>
                                    <p>
                                        <b>Loại giường:</b> 1 giường queen
                                    </p>
                                </div>
                                <a href={config.Routes.bookRoom}>
                                    <i>Xem các tiện ích</i>
                                </a>
                                <hr width="30%" align="center" />
                            </Row>
                            <Row style={{ alignItems: 'center' }}>
                                <Col>
                                    <p>
                                        <i style={{ color: 'red', fontSize: '1.3rem' }}>Còn 2 phòng trống</i>
                                    </p>
                                </Col>
                                <Col>
                                    <p>Giá: 1.790.000 VNĐ</p>
                                </Col>
                                <Col>
                                    <div className="input-group mb-3">
                                        <select onChange={handleSelectionChange} value={selectedValue}>
                                            <option value="1">0 Phòng</option>
                                            <option value="2">1 Phòng</option>
                                            <option value="3">2 Phòng </option>
                                            <option value="4">3 Phòng </option>
                                            <option value="5">4 Phòng </option>
                                            <option value="6">5 Phòng </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ViewPrice;
