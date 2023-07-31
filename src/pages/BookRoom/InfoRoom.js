import style from './BookRoom.module.scss';

import classNames from 'classnames/bind';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import Button from '../../components/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const cx = classNames.bind(style);
export function InfoRoomRight({ name, acreage, typebed, capacity, description, view, pic1, pic2 }) {
    const images = [pic1, pic2];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid="md">
            <Row className={cx('RoomRight')}>
                <Col className={cx('Col')}>
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
                </Col>

                <Col className={cx('Col')}>
                    <h1>{name}</h1>
                    <hr width="30%" align="center" />
                    <Row>
                        <Col>
                            <ul>
                                <li>Diện tích: {acreage}</li>
                                <li>Loại giường: {typebed}</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Sức chứa: {capacity}</li>
                                <li>Hướng nhìn: {view}</li>
                            </ul>
                        </Col>
                    </Row>

                    <p>{description}</p>
                    <h3>Tiện nghi phòng:</h3>
                    <Row>
                        <Col>
                            <ul>
                                <li>Máy điều hoà</li>
                                <li>Dịch vụ phòng 24 giờ</li>
                                <li>Truy cập internet miễn phí</li>
                                <li>Điện thoại IDD</li>
                                <li>Máy điều hoà</li>
                                <li>Máy sấy tóc</li>
                                <li>Bàn làm việc</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Bồn tắm và vòi sen</li>
                                <li>Miễn phí nước , cà phê, trà</li>
                                <li>Két sắt trong phòng</li>
                                <li>Dịch vụ giặt ủi/ giặt khô</li>
                                <li>TV truyền hình vệ tinh/ cáp</li>
                                <li>Bộ bàn chải đánh răng/ dầu gội</li>
                                <li>Trang phục phòng tắm/ khăn tắm/ dép</li>
                            </ul>
                        </Col>
                    </Row>
                    <Button filled_1 onClick={handleShow}>
                        {' '}
                        Đặt phòng
                    </Button>
                </Col>
            </Row>
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <div className={cx('Search')}>
                    <div className={cx('date')}>
                        Ngày nhập phòng:
                        <input type="date" />
                        Ngày trả phòng:
                        <input type="date" />
                    </div>
                    <div className={cx('date')}>
                        Người lớn:
                        <input type="number" min="0" max="5" placeholder='1' />
                        Trẻ em:
                        <input type="number" min="0" max="5" placeholder='1'/>
                    </div>

                   <Button className={cx('btn')} to={'/xem-gia'}>
                     Đặt phòng
                   </Button>
                       
                   
                </div>
            </Modal>
        </Container>
    );
}
export function InfoRoomLeft({ name, acreage, typebed, capacity, description, view, pic1, pic2 }) {
    const images = [pic1, pic2];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid="md">
            <Row className={cx('RoomLeft')}>
                <Col className={cx('Col')}>
                    <h1>{name}</h1>
                    <hr width="30%" align="center" />
                    <Row>
                        <Col>
                            <ul>
                                <li>Diện tích: {acreage}</li>
                                <li>Loại giường: {typebed}</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Sức chứa: {capacity}</li>
                                <li>Hướng nhìn: {view}</li>
                            </ul>
                        </Col>
                    </Row>

                    <p>{description}</p>
                    <h3>Tiện nghi phòng:</h3>
                    <Row>
                        <Col>
                            <ul>
                                <li>Máy điều hoà</li>
                                <li>Dịch vụ phòng 24 giờ</li>
                                <li>Truy cập internet miễn phí</li>
                                <li>Điện thoại IDD</li>
                                <li>Máy điều hoà</li>
                                <li>Máy sấy tóc</li>
                                <li>Bàn làm việc</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Bồn tắm và vòi sen</li>
                                <li>Miễn phí nước , cà phê, trà</li>
                                <li>Két sắt trong phòng</li>
                                <li>Dịch vụ giặt ủi/ giặt khô</li>
                                <li>TV truyền hình vệ tinh/ cáp</li>
                                <li>Bộ bàn chải đánh răng/ dầu gội</li>
                                <li>Trang phục phòng tắm/ khăn tắm/ dép</li>
                            </ul>
                        </Col>
                    </Row>
                    <Button filled_1 onClick={handleShow}>
                        {' '}
                        Đặt phòng
                    </Button>
                </Col>
                <Col className={cx('Col')}>
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
                </Col>
            </Row>
            <Modal  size="xl" show={show} onHide={handleClose}>
                <Modal.Header  closeButton></Modal.Header>
                <div className={cx('Search')}>
                    <div className={cx('date')}>
                        Ngày nhập phòng:
                        <input type="date" />
                        Ngày trả phòng:
                        <input type="date" />
                    </div>
                    <div className={cx('date')}>
                        Người lớn:
                        <input type="number" min="0" max="5" placeholder='1' />
                        Trẻ em:
                        <input type="number" min="0" max="5" placeholder='1' />
                    </div>
                    <Button className={cx('btn')} to={'/xem-gia'}>
                     Đặt phòng
                   </Button>
                </div>
            </Modal>
        </Container>
    );
}
