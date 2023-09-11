import styles from './MyReservation.module.scss';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import Button from '../../components/Button';
import config from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {  bookingRoomApi, userApi} from '../../apis/index.js';

const cx = classNames.bind(styles);
function MyReservation() {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    const [validated, setValidated] = useState(false);
    const [disabled, setDisabled] = useState(false); 
    const [user, setUser] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const checkinDate = formatDate(localStorage.getItem('datecheckin'));
    const checkoutDate = formatDate(localStorage.getItem('datecheckout'));
    const typeRoom = localStorage.getItem('typeRoomId');
    const room = localStorage.getItem('RoomName');
    const numberRoom = localStorage.getItem('number');
    const priceRoom = localStorage.getItem('priceOneRoom');
    const numberDate = localStorage.getItem('numberDate');
    const totalRoomPrice = numberRoom * priceRoom;
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchUser() {
             await userApi.getProfile().then((res) => {
                const value = res.data.data;
                setUser({
                    userName: value.userName,
                    phoneNumber: value.phoneNumber,
                    email: value.email,
                    gender: value.gender,
                    nationality: value.nationality,
                    yearOfBirth: +value.yearOfBirth,
                })
            }).catch((error) => {
                navigate(config.Routes.signIn);
            });

        }
        fetchUser();
    }, []);
    
    const updateUser = async (email, userName, phoneNumber,  nationality, yearOfBirth) => {
        try {
           const userGender = user.gender;
            await userApi.updateProfile(email, userName, phoneNumber, userGender, nationality, yearOfBirth);
        } 
        catch {
            navigate(config.Routes.signIn);
        };
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
   

    const handleBookingRoom = async () => {
         await bookingRoomApi.bookingRoom({
            checkinDate,
            checkoutDate,
            typeRoom,
            quantity: numberRoom,
            prices: priceRoom,
        }).then((res) => {
          
            localStorage.setItem('idBooking', res.data.data.id);
            localStorage.setItem('totalRoomPrice', res.data.data.totalPrice);
            navigate(config.Routes.pay);
        }).catch((error) => {
            navigate(config.Routes.signIn);
        });
    };

    const handleChangeName = (e) => {
        setUser({
            ...user,
            userName: e.target.value,
        });
    };
   
    const handleChangeEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value,
        });
    };

    const handleChangePhone = (e) => {
        setUser({
            ...user,
            phoneNumber: e.target.value,
        });
    };

    const handleInfoUser = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        updateUser(user.email, user.userName, user.phoneNumber,user.nationality);
        setValidated(true);
        setDisabled(true);
    };
    const total = numberDate * totalRoomPrice;
    const title = `Hủy:\nNếu hủy hoặc thay đổi sớm hơn 7 ngày trước ngày nhận phòng,không có khoản phí hủy phòng nào phải thanh toán.\nNếu hủy hoặc thay đổi trong vòng 7 ngày trước ngày đến, đêm đầu tiên phải thanh toán.\nTrong trường hợp không đến, tổng giá trị tiền đặt phòng phải thanh toán.\n-Nhận phòng: 14:00 \n- Trả phòng: 12:00`;

    return (
        <>
            <div className={cx('MyReservation')}>
                <Container fluid="md" className={cx('item-wrapper')}>
                    <Row>
                        <strong> Chi tiết đặt phòng </strong>
                        <div className={cx('section-1')}>
                            <p>Ngày nhận: {checkinDate} từ 14:00</p>
                            <p>Ngày trả: {checkoutDate} cho đến 12:00 </p>
                            <a href="/xem-gia">(Bạn có muốn chuyển ngày du lịch?)</a>
                            <div className={cx('content')}>
                                <p>{room}   <FontAwesomeIcon 
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title={title} icon={faCircleExclamation} /></p>  
                                  
                                <div className={cx('detail')}>
                                <p> Số lượng {numberRoom} phòng</p>
                                    <p>{numberRoom} * {priceRoom} VNĐ</p> 
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Row className={cx('section-3-4')}>
                        <Col>
                            <strong> Thông tin khách </strong>
                            <div className={cx('section-3')}>
                                <Row>
                                    <p>Tên *</p>
                                    <input type="text" className={cx('email')} id="name" onChange={handleChangeName} value={user.userName} disabled={disabled} />
                                </Row>
                                <Row>
                                    <p>Email *</p>
                                    <input type="text" className={cx('email')} id="email" onChange={handleChangeEmail} value={user.email} disabled={disabled} />
                                </Row>
                                <Row className={cx('phone')}>
                                    <Col>
                                        <p>Số điện thoại liên lạc *</p>
                                        <input type="text" id="phone" onChange={handleChangePhone} value={user.phoneNumber} disabled={disabled}/>
                                    </Col>
                                    
                                </Row>
                                
                            </div>
                        </Col>
                        <Col>
                            <strong> Tổng giá trị </strong>
                            <div className={cx('section-4')}>
                                <div className={cx('content')}>
                                    <p>Giá phòng:</p>
                                    <p>đ {totalRoomPrice}</p>
                                </div>
                                <div className={cx('content')}>
                                    <p>Số ngày:</p>
                                    <p>{numberDate} ngày</p>
                                </div>
                                <div className={cx('content')}>
                                    <p>Tổng giá</p>
                                    <p>đ {total}</p>
                                </div>
                                <div className={cx('check-item')}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        name="flexCheckbox"
                                        id="flexCheckbox"
                                        validated={validated}
                                        onClick={handleInfoUser}
                                    />
                                    <p>
                                        Vui lòng đọc kỹ và đồng ý với điều khoản đặt phòng bằng cách đánh dấu vào ô bên
                                        cạnh.
                                    </p>
                                </div>
                                <Button className={cx('btn')} filled_1 disable={!isChecked }  onClick={handleBookingRoom}>
                                    Xác nhận đặt phòng
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default MyReservation;
