import styles from './Pay.module.scss';
import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, huongdan} from '../../assets/images/pay';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Pay() {
    const logobank = [
        {  id: "bank-1",
            image: b1,
        },
        {  id: "bank-2",
            image: b2,
        },
        {  id: "bank-3",
            image: b3,
        },
        {  id: "bank-4",
            image: b4,
        },
        {  id: "bank-5",
            image: b5,
        },
        {  id: "bank-6",
            image: b6,
        },
        {  id: "bank-7",
            image: b7,
        },
        {  id: "bank-8",
            image: b8,
        },
        {  id: "bank-9",
            image: b9,
        },
        {  id: "bank-10",
            image: b10,
        },
        {  id: "bank-11",
            image: b11,
        },
        {  id: "bank-12",
            image: b12,
        },
        {  id: "bank-13",
            image: b13,
        },
        {  id: "bank-14",
            image: b14,
        },
        {  id: "bank-15",
            image: b15,
        },
        {  id: "bank-16",
            image: b16,
        },
        {  id: "bank-17",
            image: b17,
        },
        {  id: "bank-18",
            image: b18,
        }
    ];
    const instruction=[
        {
            id: "instruction-1",
            image: huongdan,
        }
    ];
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const handleClick = (index) => {
      if (selectedButtonIndex === null || selectedButtonIndex !== index) {
        setSelectedButtonIndex(index);
      }
    }
    return <>
    <div className={cx('hero')}>
    <Container fluid="md" className={cx('item-wrapper')}>
        <Row className={cx('section-1')}>
            <strong>Thẻ ATM / Tài khoản ngân hàng</strong>
            {
                logobank.map((item, index) =>(
                    <Col md="2" key={item.id} className={cx('item')}>
                            <button className={cx('btn')}
                            style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', border: selectedButtonIndex === index ? '1px solid red' : '1px solid white' }}
                            onClick={() => handleClick(index)} />
                    </Col>
            ) )}
            
        </Row>
        <Row className={cx('section-2')}>
            <Col>
                <div className={cx('content-1')}>
                    <strong>Thông tin khách</strong>
                    <div className={cx('form')}>
                        <label>Số thẻ *</label>
                        <br></br>
                        <input type="text" name='idcard' className={cx('card')} />
                        <div className={cx('btn')}>
                        <p onClick={handleShow1}>Hướng dẫn</p>
                        <Button  rightIcon={true} leftIcon filled_2 >Thanh toán</Button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col>
                <div className={cx('content-2')}>
                <strong>Thông tin đơn hàng</strong>
                <div className={cx('form')}>
                    <label>Mã đơn hàng</label>
                    <br></br>
                    <p>Ref. BW20131689481945</p>
                    <div className={cx('text')}>
                    <label>Số tiền thanh toán</label>
                        <p>2,515,000 VND</p>
                    </div>
                    <Button onClick={handleShow2} rightIcon={true} leftIcon filled_2 >Hủy giao dịch</Button>
                </div>
                </div>
            </Col>
        </Row>
    </Container>
    <Modal  size="xl" show={show1} onHide={handleClose1}>
        <Modal.Header closeButton></Modal.Header>
        <div className={cx('instruction')}>
            {instruction.map((item, index) =>(
                <img key={item.id} src={item.image} alt={item.id} className={cx('Img-instruction')} />
            )) }
        </div>
    </Modal>
    <Modal size="lg" show={show2} onHide={handleClose2}>
    <Modal.Header closeButton></Modal.Header>
        <div className={cx('Cancel')}>
                <div  className={cx('content')}>
                    <strong>Hủy giao dịch</strong>
                    <p>Xác nhận hủy giao dịch và quay về trang của Stellar ?</p>
                    <Button  to={"/"} rightIcon={true} leftIcon filled_2 >Xác nhận</Button>
                </div>
        </div>
    </Modal>
    </div>
    </>;
}

export default Pay;
