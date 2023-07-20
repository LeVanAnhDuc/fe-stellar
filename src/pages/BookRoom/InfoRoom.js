import style from './BookRoom.module.scss'

import classNames from 'classnames/bind';
import {Container, Row, Col} from 'react-bootstrap';
import Image from '../../components/Image';
import Button from '../../components/Button';

const cx = classNames.bind(style);

function InfoRoom({image,name, acreage, typebed, capacity, description, view}){
    return (
        <Container fluid className={cx('Room')}>
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
                    <Button filled_1 > Đặt phòng</Button>
                </Col>    
                </Row>
              

        </Container>
    );

}
export default InfoRoom;