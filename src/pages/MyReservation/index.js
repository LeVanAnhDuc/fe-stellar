import styles from './MyReservation.module.scss';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../../components/Button';
import config from '../../config';

const cx = classNames.bind(styles);
function MyReservation() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const title = `Hủy:\nNếu hủy hoặc thay đổi sớm hơn 7 ngày trước ngày nhận phòng,không có khoản phí hủy phòng nào phải thanh toán.\nNếu hủy hoặc thay đổi trong vòng 7 ngày trước ngày đến, đêm đầu tiên phải thanh toán.\nTrong trường hợp không đến, tổng giá trị tiền đặt phòng phải thanh toán.\n-Nhận phòng: 14:00 \n- Trả phòng: 12:00`;

    return (
        <>
            <div className={cx('MyReservation')}>
                <Container fluid="md" className={cx('item-wrapper')}>
                    <Row>
                        <strong> Chi tiết đặt phòng </strong>
                        <div className={cx('section-1')}>
                            <p>Ngày nhận: Thứ 5, Tháng 7 13, 2023 từ 14:00</p>
                            <p>Ngày trả: Thứ 6, Tháng 7 14, 2023 cho đến 12:00 </p>
                            <a href="/xem-gia">(Bạn có muốn chuyển ngày du lịch?)</a>
                            <div className={cx('content')}>
                                <p>Superior Double</p>
                                <div className={cx('detail')}>
                                    <p>Chi tiết: 1 phòng, 1 đêm, 2 người lớn đã bao gồm trong giá</p>
                                    <p>Giá: 1.790.000 VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <strong> Dịch vụ thêm </strong>
                        <div className={cx('section-2')}>
                            <div className={cx('content')}>
                                <p>Extra bed</p>
                                <div className={cx('detail')}>
                                    <div className={cx('text-item')}>
                                        <input type="number" placeholder="0" min="0" max="2" />{' '}
                                        <label>₫ 460.000 </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title={title}
                                    >
                                        Chính sách đặt phòng
                                    </button>
                                </div>
                            </div>
                            <div className={cx('content')}>
                                <p>Airport Dropoff</p>
                                <div className={cx('detail')}>
                                    <div className={cx('text-item')}>
                                        <input type="number" placeholder="0" min="0" max="2" />{' '}
                                        <label>₫ 460.000 </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title={title}
                                    >
                                        Chính sách đặt phòng
                                    </button>
                                </div>

                                <p>Airport Pickup</p>
                                <div className={cx('detail')}>
                                    <div className={cx('text-item')}>
                                        <input type="number" placeholder="0" min="0" max="2" />{' '}
                                        <label>₫ 460.000 </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title={title}
                                    >
                                        Chính sách đặt phòng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className={cx('section-3-4')}>
                        <Col>
                            <strong> Thông tin khách </strong>
                            <div className={cx('section-3')}>
                                <Row>
                                    <Col>
                                        <p>Tên *</p>
                                        <input type="text" id="name" name="name" />
                                    </Col>
                                    <Col>
                                        <p>Họ *</p>
                                        <input type="text" id="surname" name="surname" />
                                    </Col>
                                </Row>
                                <Row>
                                    <p>Email *</p>
                                    <input type="text" className={cx('email')} id="email" name="email" />
                                </Row>
                                <Row className={cx('phone')}>
                                    <Col>
                                        <p>Số điện thoại liên lạc *</p>
                                        <input type="text" id="phone" name="phone" />
                                    </Col>
                                    <Col>
                                        <p>Quốc gia *</p>
                                        <input type="text" id="nation" name="nation" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <strong> Tổng giá trị </strong>
                            <div className={cx('section-4')}>
                                <div className={cx('content')}>
                                    <p>Giá phòng</p>
                                    <p>đ 1.790.000</p>
                                </div>
                                <div className={cx('content')}>
                                    <p>Dịch vụ thêm</p>
                                    <p>đ 0</p>
                                </div>
                                <div className={cx('content')}>
                                    <p>Tổng giá</p>
                                    <p>đ 1.790.000</p>
                                </div>
                                <div className={cx('check-item')}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        name="flexCheckbox"
                                        id="flexCheckbox"
                                    />
                                    <p>
                                        Vui lòng đọc kỹ và đồng ý với điều khoản đặt phòng bằng cách đánh dấu vào ô bên
                                        cạnh.
                                    </p>
                                </div>
                                <Button className={cx('btn')} filled_1 disable={!isChecked} to={config.Routes.pay}>
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
