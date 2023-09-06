import { Carousel, Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { pic1, pic2, pic3 } from '../../assets/images/bookroom';
import styles from './ViewPrice.module.scss';
import Image from '../../components/Image';
import config from '../../config';
import { roomApi, typeRoomApi } from '../../apis';
const cx = classNames.bind(styles);

function ViewPrice() {
    const images = [pic1, pic2, pic3];
    const [selectedValue, setSelectedValue] = useState('1');
    const [checkinDate, setDatecheckin] = useState(Date.now());
    const [checkoutDate, setDatecheckout] = useState(Date.now()+86400000);
    const [typeRoom, setIdTypeRoom] = useState('64f6f31e26e1510e094d5ac7');
    const [numberRoom, setNumberRoom] = useState(0);
    const [typeRoomInfo, setTypeRoomInfo] = useState( {name: '',description: '', image: ["https://res.cloudinary.com/drzp9tafy/image/upload/v1693905165/ExecutiveCityView1_hynorn.jpg"]});
    const isSelectionOne = selectedValue === '1';

    useEffect(() => {
    const storeCheckin = localStorage.getItem('datecheckin');
    const storeCheckout = localStorage.getItem('datecheckout');
    const idTypeRoomvalue = localStorage.getItem('typeRoomId');
    setDatecheckin(storeCheckin);
    setDatecheckout(storeCheckout);
    setIdTypeRoom(idTypeRoomvalue);
    }, []);
    
    const handleCheckin = (e) => {
        setDatecheckin(e.target.value)
        localStorage.setItem('datecheckin', e.target.value);
    };
    const handleCheckout = (e) => {
        setDatecheckout(e.target.value)
        localStorage.setItem('datecheckout', e.target.value);
    };
    const handleSelectionChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const minDate = () => {
        const today = new Date().toISOString().split('T')[0];
        return today;
    };

   
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

const fetchNumberRoom = async() => {
    const formattedCheckinDate = formatDate(checkinDate);
    const formattedCheckoutDate = formatDate(checkoutDate);
    
    try {
        const response = await roomApi.getNumberAvailableRooms({
            typeRoom,
            checkinDate: formattedCheckinDate,
            checkoutDate: formattedCheckoutDate,
        });
       const result =response.data.result;
         setNumberRoom(result);
    } catch (error) {
        throw error;
    }
};
  useEffect(() => {
    fetchNumberRoom();
    }, [typeRoom, checkinDate, checkoutDate]);

    const fetchTypeRoom = async () => {
        try {
            const response = await typeRoomApi.getRoomTypeById({ idTypeRoom: typeRoom });
            const result = response.data;
            setTypeRoomInfo({
                name: result.name,
                description: result.description,
                image: [result.image[0]],
            });
        } catch (error) {
            throw error;
        }
    };
    useEffect(() => {
        fetchTypeRoom();
    }, [typeRoom]);
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
                        <input id="date-checkin" type="date" min={minDate()} max={checkoutDate} value={checkinDate} onChange={handleCheckin} />
                    </Col>
                    <Col className={cx('col')}>
                        <input id="date-checkin" type="date"  min={checkinDate} value={checkoutDate} onChange={handleCheckout} />
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
            <div className={cx('ListRoom')} >
                <Container fluid="md">
                    <Row className={cx('Room')}>
                        <Col className={cx('col')}>
                            <Image className={cx('ImageRoom')} src={typeRoomInfo.image} alt="imageRoom" />
                        </Col>
                        <Col className={cx('col')}>
                            <Row className={cx('InfoRoom')}>
                                <h1>{typeRoomInfo.name}</h1>
                                <p>
                                   {typeRoomInfo.description}
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
                                        <i style={{ color: 'red', fontSize: '1.3rem' }}>Còn {numberRoom} phòng trống</i>
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
