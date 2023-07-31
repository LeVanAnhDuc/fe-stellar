import { Carousel, Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import classNames from 'classnames/bind';

import Image from '../../components/Image';
import {InfoRoomRight, InfoRoomLeft} from './InfoRoom';
import {Deluxe1,Deluxe2,Executive1,Executive2,Suite1, Suite2,Superior1,Superior2,pic1,pic2,pic3, introRoom} from "../../assets/images/bookroom";
import styles from './BookRoom.module.scss';
import Button from '../../components/Button';

const cx = classNames.bind(styles);
function BookRoom() {
    const images = [pic1, pic2, pic3];
   
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
            <Container fluid="md">
                    <div className={cx('content-wrapper')}>
                        <div className={cx('input-date')}>
                        <span className={cx('date')}>Check in   
                        <input type='date' ></input>
                        </span>
                       <span className={cx('date')}>Check out   
                        <input type='date'></input>
                        </span>
                        </div>
                      
                        <Button  to={'/xem-gia'}
                                 className={cx('btn')}>
                        CHECK AVAILABILITY
                        </Button>
                    </div>
                </Container>
            </div>
            <Container fluid="md" >
                <Row className={cx('Intro')}>
                    <Col >
                    <div className={cx('ContentIntro')}>
                    <h1>Phòng nghỉ</h1>
                            <p>Nơi hoàn hảo để tận hưởng sự sang trọng và thoải mái tuyệt đỉnh!</p>
                            <hr  width="30%" align="center" />
                            <p>Với vị trí trung tâm tại trái tim Sài Gòn, Stellar Hotel không chỉ mang đến sự thuận tiện trong việc di chuyển và khám phá các điểm tham quan nổi tiếng của thành phố, mà còn tạo nên một không gian yên tĩnh và thanh bình giữa sự sôi động của đô thị.</p>
                            <p>Kiến trúc độc đáo và thiết kế tinh tế, Stellar Hotel đem đến cho quý khách không gian sống đẳng cấp và đầy phong cách. Từ các phòng nghỉ sang trọng đến các suite cao cấp, mỗi không gian được trang bị tiện nghi hiện đại và những chi tiết tỉ mỉ để mang đến sự thoải mái tối đa cho khách hàng</p>
                    
                    </div>
                      
                    </Col>
                    <Col>
                    <Image className={cx('IntroImage')} src={introRoom} alt="introRoom" />
                    </Col>
                </Row>
            </Container> 
            <div className="Room">
                <InfoRoomRight 
                    name="Phòng Superior Double Or Twin"
                    acreage="23m2"
                    typebed="Giường đôi hoặc 02 giường đơn"
                    capacity="2 người lớn"
                    description="Phòng nghỉ Stellar - Superior Double Or Twin mang đến sự ấm cúng bởi nét duyên dáng của lịch sử và những tiện nghi hiện đại nhất. Với sàn nhà kết hợp gỗ và gạch ốp, giường đôi thoải mái và đồ nội thất trang nhã, tất cả tạo nên sự cân bằng giữa “cổ điển” và “hiện đại”."
                    pic1={Superior1}
                    pic2={Superior2}
                />

            </div>
            <div className="Room">
                <InfoRoomLeft
                    name="Phòng Deluxe Double"
                    acreage="23m2"
                    typebed="Giường đôi "
                    capacity="2 người lớn"
                    description="Phòng nghỉ Stellar - Deluxe Double, căn phòng ấm áp này mang lại sự hoàn hảo trong kỳ nghỉ tại Sài Gòn. Không gian làm việc kết nối với các tiện nghi phòng nghỉ, cùng giường ngủ với bộ chăn lông vũ êm ái, chất liệu cao cấp cùng dịch vụ phục vụ phòng tận nơi mang lại sự thoải mái và thư giãn tối đa."
                    pic1={Deluxe1}
                    pic2={Deluxe2}
               />
            </div>
            <div className="Room">
                <InfoRoomRight
                    name="Phòng Executive City View"
                    acreage="40m2"
                    typebed="02 Giường đơn"
                    capacity="2 người lớn"
                    view="Thành phố"
                    description="Với hai cửa sổ lớn cho quang cảnh tuyệt vời nhìn ra thành phố, Phòng Executive City View mang lại cho quý khách một không gian thoáng đãng, rộng mở. được trang trí bằng sàn gỗ kết hợp gạch, những món đồ nội thất phảng phất phong cách Đông Dương kết hợp những tiện nghi hiện đại tạo nên một tổng thể hài hoà, đương đại mà quý khách có thể trải nghiệm để cảm nhận nét đẹp Sài Gòn chuẩn xác nhất." 
                    pic1={Executive1}
                    pic2={Executive2}
                    />
            </div>
            <div className="Room">
                <InfoRoomLeft
                    name="Phòng Suite Garden"
                    acreage="40m2"
                    typebed="01 giường queen"
                    capacity="2 người lớn"
                    view="Thành phố"
                    description="Phòng Suite Garden được phối hợp phong cách hiện đại với cảm hứng từ cây xanh, rộng rãi, hoàn hảo cho các kì nghỉ cuối tuần hay chuyến khám phá của quý khách. Ban công rộng và được sắp xếp để quý khách luôn cảm nhận được không khí trong lành, gió nhẹ lay và bóng mát từ các tán cây. Loại phòng nghỉ này đáp ứng đầy đủ nhu cầu ngắm nhìn đường phố, tận hưởng những giây phút đắm mình trong bồn tắm bể sục."  
                    pic1={Suite1}
                    pic2={Suite2}
                />
            </div>
            
        </>
       
    );
}

export default BookRoom;
