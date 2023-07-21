import style from './BookRoom.module.scss'


import classNames from 'classnames/bind';
import {Container, Row, Col} from 'react-bootstrap';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const cx = classNames.bind(style);

export  function InfoRoomRight({image,name, acreage, typebed, capacity, description, view}){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Container fluid="md" className={cx('Room')}>
            <Row>
                <Col  className={cx('Col')}>
                <Image className={cx('imageRoom')} src={image}  />
                </Col>
                <Col  className={cx('Col')}>
                    <h1>{name}</h1>
                      <hr  width="30%" align="center" />
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
                    <Button filled_1  onClick={handleShow} > Đặt phòng</Button>
                </Col>    
                </Row>
                    <Modal size="xl"
                    show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <div  className={cx('Search')}> 
                        <div className={cx('date')}>
                        Ngày nhập phòng: 
                            
                            <input type="date" />
                            Ngày trả phòng:
                            <input type="date" />
                        </div>
                        <div className={cx('date')}>
                            Người lớn: 
                            <input  type="number" min="1" max="5"/>
                            Trẻ em:
                            <input  type="number" min="1" max="5"/>
                        </div>
                        
                        <button > Đặt phòng</button>
                    
                    </div>
                </Modal>

        </Container>
    );

}
export function InfoRoomLeft({image,name, acreage, typebed, capacity, description, view}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid="md" className={cx('Room')}>
            <Row>
                
                <Col  className={cx('Col')}>
                    <h1>{name}</h1>
                      <hr  width="30%" align="center" />
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
                    <Button filled_1  onClick={handleShow}> Đặt phòng</Button>
                </Col> 
                <Col  className={cx('Col')}>
                <Image className={cx('imageRoom')} src={image}  />
                </Col>   
                </Row>
                <Modal size="xl"
                    show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <div  className={cx('Search')}> 
                        <div className={cx('date')}>
                        Ngày nhập phòng: 
                            
                            <input type="date" />
                            Ngày trả phòng:
                            <input type="date" />
                        </div>
                        <div className={cx('date')}>
                            Người lớn: 
                            <input  type="number" min="1" max="5"/>
                            Trẻ em:
                            <input  type="number" min="1" max="5"/>
                        </div>
                        
                        <button > Đặt phòng</button>
                    
                    </div>
                </Modal>

        </Container>
    );

}
 
