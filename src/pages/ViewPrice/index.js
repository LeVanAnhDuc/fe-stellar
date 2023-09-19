import { Carousel, Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { pic1, pic2, pic3 } from '../../assets/images/bookroom';
import styles from './ViewPrice.module.scss';
import Image from '../../components/Image';
import config from '../../config';
import { roomApi, typeRoomApi } from '../../apis';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function ViewPrice() {
    const images = [pic1, pic2, pic3];
    const [selectedValue, setSelectedValue] = useState('0');
    const [checkinDate, setDatecheckin] = useState(Date.now());
    const [checkoutDate, setDatecheckout] = useState(Date.now() + 86400000);
    const [typeRoom, setIdTypeRoom] = useState('');
    const [numberRoom, setNumberRoom] = useState(0);
    const [typeRoomInfo, setTypeRoomInfo] = useState({
        name: '',
        description: '',
        image: ['https://res.cloudinary.com/drzp9tafy/image/upload/v1693905165/ExecutiveCityView1_hynorn.jpg'],
    });
    const [priceRoom, setPriceRoom] = useState({ price: [] });
    const [selectedPriceValue, setSelectedPriceValue] = useState('');
    const [acreages, setAcreages] = useState({ acreages: [] });
    const [selectedAcreagesValue, setSelectedAcreagesValue] = useState('');
    const [typeBed, setTypeBed] = useState({ typeBeds: [] });
    const [selectedTypeBedValue, setSelectedTypeBedValue] = useState('');
    const [view, setView] = useState({ views: [] });
    const [selectedViewValue, setSelectedViewValue] = useState('');
    const isSelectionOne = selectedValue === '0';

    useEffect(() => {
        const storeCheckin = localStorage.getItem('datecheckin');
        const storeCheckout = localStorage.getItem('datecheckout');
        const idTypeRoomvalue = localStorage.getItem('typeRoomId');
        setDatecheckin(storeCheckin);
        setDatecheckout(storeCheckout);
        setIdTypeRoom(idTypeRoomvalue);

        async function fetchPriceRoom() {
            try {
                const response = await roomApi.getParametersRoom({ typeRoom: typeRoom });
                const result = response.data;
                setPriceRoom({
                    price: result.prices,
                });
                setAcreages({
                    acreages: result.acreages,
                });
                setTypeBed({
                    typeBeds: result.typeBeds,
                });
                setView({
                    views: result.views,
                });
                if (selectedPriceValue === '') {
                    setSelectedPriceValue(result.prices[0]);
                    localStorage.setItem('priceOneRoom', result.prices[0]);
                }
                if (selectedAcreagesValue === '') {
                    setSelectedAcreagesValue(result.acreages[0]);
                }
                if (selectedTypeBedValue === '') {
                    setSelectedTypeBedValue(result.typeBeds[0]);
                }
                if (selectedViewValue === '') {
                    setSelectedViewValue(result.views[0]);
                }
            } catch (error) {
                console.log(error);
            }
        }

        async function fetchNumberRoom() {
            const formattedCheckinDate = formatDate(checkinDate);
            const formattedCheckoutDate = formatDate(checkoutDate);
            try {
                const response = await roomApi.getNumberAvailableRooms({
                    typeRoom,
                    checkinDate: formattedCheckinDate,
                    checkoutDate: formattedCheckoutDate,
                    acreage: selectedAcreagesValue,
                    prices: selectedPriceValue,
                    typeBed: selectedTypeBedValue,
                    view: selectedViewValue,
                });
                const result = response.data.result;
                setNumberRoom(result);
                localStorage.setItem('numberDate', response.data.dDate);
            } catch (error) {
                console.log(error);
            }
        }
        async function fetchTypeRoom() {
            try {
                const response = await typeRoomApi.getRoomTypeById({ idTypeRoom: typeRoom });
                const result = response.data;
                setTypeRoomInfo({
                    name: result.name,
                    description: result.description,
                    image: [result.image[0]],
                });
                localStorage.setItem('RoomName', result.name);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPriceRoom();
        fetchNumberRoom();
        fetchTypeRoom();
    }, [
        checkinDate,
        checkoutDate,
        typeRoom,
        selectedPriceValue,
        selectedAcreagesValue,
        selectedTypeBedValue,
        selectedViewValue,
    ]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    const handleCheckin = (e) => {
        setDatecheckin(e.target.value);
        localStorage.setItem('datecheckin', e.target.value);
    };

    const handleCheckout = (e) => {
        setDatecheckout(e.target.value);
        localStorage.setItem('datecheckout', e.target.value);
    };

    const handleSelectionChange = (event) => {
        setSelectedValue(event.target.value);
        localStorage.setItem('number', event.target.value);
    };

    const handleSelectionPriceChange = (event) => {
        setSelectedPriceValue(event.target.value);
        localStorage.setItem('priceOneRoom', event.target.value);
    };
    const handleSelectionAcreagesChange = (event) => {
        setSelectedAcreagesValue(event.target.value);
    };
    const handleSelectionTypeBedChange = (event) => {
        setSelectedTypeBedValue(event.target.value);
    };
    const handleSelectionViewChange = (event) => {
        setSelectedViewValue(event.target.value);
    };
    const minDate = () => {
        const today = new Date().toISOString().split('T')[0];
        return today;
    };

    useEffect(() => {
        let ignore = false;
        if (new Date(checkinDate) >= new Date(checkoutDate) && !ignore) {
            toast.error('Invalid date');
            setSelectedValue('0');
        }
        return () => {
            ignore = true;
        };
    }, [checkinDate, checkoutDate]);

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
                        <input
                            id="date-checkin"
                            type="date"
                            min={minDate()}
                            max={checkoutDate}
                            value={checkinDate}
                            onChange={handleCheckin}
                        />
                    </Col>
                    <Col className={cx('col')}>
                        <input
                            id="date-checkin"
                            type="date"
                            min={checkinDate}
                            value={checkoutDate}
                            onChange={handleCheckout}
                        />
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
                            <Image className={cx('ImageRoom')} src={typeRoomInfo.image} alt="imageRoom" />
                        </Col>
                        <Col className={cx('col')}>
                            <Row className={cx('InfoRoom')}>
                                <h1>{typeRoomInfo.name}</h1>
                                <p>{typeRoomInfo.description}</p>
                                <div style={{ display: ' flex' }}>
                                    <p>Diện tích:</p>
                                    <select onChange={handleSelectionAcreagesChange} value={selectedAcreagesValue}>
                                        {Array.isArray(acreages.acreages) ? (
                                            acreages.acreages.map((acreage, index) => (
                                                <option key={index} value={acreage}>
                                                    {acreage}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="">No Acreages available</option>
                                        )}
                                    </select>
                                    <p>Loại phòng:</p>
                                    <select onChange={handleSelectionTypeBedChange} value={selectedTypeBedValue}>
                                        {Array.isArray(acreages.acreages) ? (
                                            typeBed.typeBeds.map((typeBed, index) => (
                                                <option key={index} value={typeBed}>
                                                    {typeBed}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="">No Acreages available</option>
                                        )}
                                    </select>
                                    <p>Hướng nhìn:</p>
                                    <select onChange={handleSelectionViewChange} value={selectedViewValue}>
                                        {Array.isArray(view.views) ? (
                                            view.views.map((view, index) => (
                                                <option key={index} value={view}>
                                                    {view}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="">No Acreages available</option>
                                        )}
                                    </select>
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
                                    <select onChange={handleSelectionPriceChange} value={selectedPriceValue}>
                                        {Array.isArray(priceRoom.price) && priceRoom.price.length >= 2 ? (
                                            priceRoom.price.map((price, index) => (
                                                <option key={index} value={price}>
                                                    {price} VNĐ
                                                </option>
                                            ))
                                        ) : (
                                            <option value="">No prices available</option>
                                        )}
                                    </select>
                                </Col>
                                <Col>
                                    <select onChange={handleSelectionChange} value={selectedValue}>
                                        {Array.from({ length: numberRoom + 1 }).map((_, index) => (
                                            <option key={index} value={index.toString()}>
                                                {index} Phòng
                                            </option>
                                        ))}
                                    </select>
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
