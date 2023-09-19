import { Carousel, Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from '../../components/Image';
import { typeRoomApi } from '../../apis';
import { pic1, pic2, pic3, introRoom } from '../../assets/images/bookroom';
import styles from './BookRoom.module.scss';
import Button from '../../components/Button';
import config from '../../config';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { dateTimeFormat, DateStrFormat, nDate } from './timeZone';

const cx = classNames.bind(styles);

function BookRoom() {
    const images = [pic1, pic2, pic3];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [datecheckin, setDatecheckin] = useState(dateTimeFormat(new Date(), DateStrFormat.INPUT_TYPE_DATE));
    const [datecheckout, setDatecheckout] = useState(
        dateTimeFormat(
            nDate(new Date(dateTimeFormat(new Date(), DateStrFormat.INPUT_TYPE_DATE))),
            DateStrFormat.INPUT_TYPE_DATE,
        ),
    );

    const [typeRoom, setTypeRoom] = useState([]);
    // const [typeRoomId, setTypeRoomId] = useState('');
    const [style, setStyle] = useState([]);

    const handleCheckin = (e) => {
        setDatecheckin(e.target.value);
    };

    const handleCheckout = (e) => {
        setDatecheckout(e.target.value);
    };

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            localStorage.setItem('datecheckin', datecheckin);
            localStorage.setItem('datecheckout', datecheckout);
        }

        return () => {
            ignore = true;
        };
    }, [datecheckin, datecheckout]);

    const fetchTypeRoom = async () => {
        await typeRoomApi
            .getRoomType()
            .then((response) => {
                const value = response.data.data;
                if (Array.isArray(value)) {
                    setTypeRoom(value);
                    const initialStyles = value.map((_, index) => (index % 2 !== 0 ? 'row-reverse' : 'row'));
                    setStyle(initialStyles);
                } else {
                    toast.error('Received data is not an array:', value);
                }
            })
            .catch((error) => {
                toast.error(error.response?.data.message ?? 'Mất kết nối server!');
            });
    };

    useEffect(() => {
        let ignore = false;
        !ignore && fetchTypeRoom();

        return () => {
            ignore = true;
        };
    }, []);

    const handleShow = (idTypeRoom) => {
        // setTypeRoomId(idTypeRoom);
        localStorage.setItem('typeRoomId', idTypeRoom);
        setShow(true);
    };

    // path den id
    const location = useLocation();
    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            if (location.hash) {
                // Lấy phần tử có id tương ứng với hash
                const targetElement = document.getElementById(location.hash.substring(1));

                // Nếu phần tử tồn tại, tính toán vị trí để cuộn tới
                if (targetElement) {
                    const yOffset = -120; // Điều chỉnh dựa trên độ cao của fixed header (nếu có)
                    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    // Cuộn tới vị trí tính toán được
                    window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        return () => {
            ignore = true;
        };
    }, [location.hash, location, typeRoom]);

    useEffect(() => {
        let ignore = false;
        if (new Date(datecheckin) >= new Date(datecheckout) && !ignore) {
            toast.error('Invalid date');
            setDatecheckin(dateTimeFormat(new Date(), DateStrFormat.INPUT_TYPE_DATE));
            setDatecheckout(
                dateTimeFormat(
                    nDate(new Date(dateTimeFormat(new Date(), DateStrFormat.INPUT_TYPE_DATE))),
                    DateStrFormat.INPUT_TYPE_DATE,
                ),
            );
        }
        return () => {
            ignore = true;
        };
    }, [datecheckin, datecheckout]);

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
            <Container fluid="md">
                <Row className={cx('Intro')}>
                    <Col>
                        <div className={cx('ContentIntro')}>
                            <h1>Phòng nghỉ</h1>
                            <p>Nơi hoàn hảo để tận hưởng sự sang trọng và thoải mái tuyệt đỉnh!</p>
                            <hr width="30%" align="center" />
                            <p>
                                Với vị trí trung tâm tại trái tim Sài Gòn, Stellar Hotel không chỉ mang đến sự thuận
                                tiện trong việc di chuyển và khám phá các điểm tham quan nổi tiếng của thành phố, mà còn
                                tạo nên một không gian yên tĩnh và thanh bình giữa sự sôi động của đô thị.
                            </p>
                            <p>
                                Kiến trúc độc đáo và thiết kế tinh tế, Stellar Hotel đem đến cho quý khách không gian
                                sống đẳng cấp và đầy phong cách. Từ các phòng nghỉ sang trọng đến các suite cao cấp, mỗi
                                không gian được trang bị tiện nghi hiện đại và những chi tiết tỉ mỉ để mang đến sự thoải
                                mái tối đa cho khách hàng
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <Image className={cx('IntroImage')} src={introRoom} alt="introRoom" />
                    </Col>
                </Row>
            </Container>
            <div className={cx('Room')}>
                {Array.isArray(typeRoom) ? (
                    typeRoom.map((item, index) => (
                        <Container className={cx('container')} fluid="md" key={item._id} id={item._id}>
                            <Row className={cx('row')} style={{ flexDirection: style[index] }}>
                                <Col>
                                    <Carousel
                                        className={cx('item-wrapper')}
                                        controls={false}
                                        wrap={true}
                                        indicators={false}
                                        interval={3000}
                                    >
                                        {Array.isArray(item.image) ? (
                                            item.image.map((image, index) => (
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
                                            ))
                                        ) : (
                                            <div>Không có hình ảnh</div>
                                        )}
                                    </Carousel>
                                </Col>
                                <Col>
                                    <h1>{item.name}</h1>
                                    <hr width="30%" align="center" />
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>Diện tích: {item.acreage}</li>
                                                <li>Loại giường: {item.typebed}</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li>Sức chứa: {item.capacity}</li>
                                                <li>Hướng nhìn: {item.view}</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <p>{item.description}</p>
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
                                    <Button filled_1 className={cx('btn')} onClick={() => handleShow(item._id)}>
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
                                        <input
                                            type="date"
                                            min={dateTimeFormat(new Date(), DateStrFormat.INPUT_TYPE_DATE)}
                                            max={datecheckout}
                                            onChange={handleCheckin}
                                            value={datecheckin}
                                        />
                                        Ngày trả phòng:
                                        <input
                                            type="date"
                                            min={dateTimeFormat(new Date(), DateStrFormat.INPUT_TYPE_DATE)}
                                            onChange={handleCheckout}
                                            value={datecheckout}
                                        />
                                    </div>
                                    <Button className={cx('btn')} to={config.Routes.viewPrice}>
                                        Đặt phòng
                                    </Button>
                                </div>
                            </Modal>
                        </Container>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div id="demo"></div>
        </>
    );
}

export default BookRoom;
