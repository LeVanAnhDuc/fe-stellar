import styles from './Pay.module.scss';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8,
    b9,
    b10,
    b11,
    b12,
    b13,
    b14,
    b15,
    b16,
    b17,
    b18,
    huongdan,
} from '../../assets/images/pay';
import Button from '../../components/Button';
import { bookingRoomApi } from '../../apis/index.js';

const cx = classNames.bind(styles);

function Pay() {
    const totalRoomPrice = localStorage.getItem('totalRoomPrice');
    const idBooking = localStorage.getItem('idBooking');
    const [bank, setBank] = useState(null);
    const logobank = [
        { id: 'bank-1', image: b1, value: 'DongABank' },
        { id: 'bank-2', image: b2, value: 'ACB' },
        { id: 'bank-3', image: b3, value: 'Vietcombank' },
        { id: 'bank-4', image: b4, valua: 'HdBank' },
        { id: 'bank-5', image: b5, value: 'TechcomBank' },
        { id: 'bank-6', image: b6, value: 'vib' },
        { id: 'bank-7', image: b7, value: 'NCB' },
        { id: 'bank-8', image: b8, value: 'Sacombank' },
        { id: 'bank-9', image: b9, value: 'SCB' },
        { id: 'bank-10', image: b10, value: 'TPBank' },
        { id: 'bank-11', image: b11, value: 'VietinBank' },
        { id: 'bank-12', image: b12, value: 'BIDV' },
        { id: 'bank-13', image: b13, value: 'LienVietBank' },
        { id: 'bank-14', image: b14, value: 'PVComBank' },
        { id: 'bank-15', image: b15, value: 'VPBank' },
        { id: 'bank-16', image: b16, value: 'MsBank' },
        { id: 'bank-17', image: b17, value: 'Ocb' },
        { id: 'bank-18', image: b18, value: 'Agribank' },
    ];
    const instruction = [
        {
            id: 'instruction-1',
            image: huongdan,
        },
    ];
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const handleClick = (index) => {
        if (selectedButtonIndex === null || selectedButtonIndex !== index) {
            setSelectedButtonIndex(index);
            setBank(logobank[index].value);
        }
    };
    const handlePay = () => {
        if (bank === null) {
            alert('Vui lòng chọn ngân hàng');
            return;
        }
        bookingRoomApi
            .payment(idBooking, bank)
            .then((res) => {
                window.location.href = res.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className={cx('hero')}>
                <Container fluid="md" className={cx('item-wrapper')}>
                    <Row className={cx('section-1')}>
                        <strong>Thẻ ATM / Tài khoản ngân hàng</strong>
                        {logobank.map((item, index) => (
                            <Col md="2" key={item.id} className={cx('item')}>
                                <button
                                    className={cx('btn')}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        border: selectedButtonIndex === index ? '1px solid red' : '1px solid white',
                                    }}
                                    onClick={() => handleClick(index)}
                                    value={item.value}
                                />
                            </Col>
                        ))}
                    </Row>
                    <Row className={cx('section-2')}>
                        <Col>
                            <div className={cx('content-2')}>
                                <strong>Thông tin đơn hàng</strong>
                                <div className={cx('form')}>
                                    <div className={cx('text')}>
                                        <label>Mã đơn hàng</label>
                                        <br></br>
                                        <p>{idBooking}</p>
                                    </div>
                                    <div className={cx('text')}>
                                        <label>Số tiền thanh toán</label>
                                        <p>{totalRoomPrice} VND</p>
                                    </div>
                                    <div className={cx('btn')}>
                                        <p onClick={handleShow1}>Hướng dẫn</p>
                                        <Button onClick={handlePay} rightIcon={true} leftIcon filled_2>
                                            Thanh Toán
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="xl" show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton></Modal.Header>
                    <div className={cx('instruction')}>
                        {instruction.map((item, index) => (
                            <img key={item.id} src={item.image} alt={item.id} className={cx('Img-instruction')} />
                        ))}
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default Pay;
