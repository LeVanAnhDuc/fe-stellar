import { Carousel, Container, Col, Row } from 'react-bootstrap';
import styles from './Utilities.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import {spa1, spa2,spa3,  gym2, gym1, boi2, boi1} from '../../assets/images/utilities';

const cx = classNames.bind(styles);
function Utilities() {
    const images = [spa1, gym1, boi1];
    return <>
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
            <div className={cx('content-wrapper')}>
                <h1 className={cx('title')}><i>Ốc đảo xanh giữa phố thị Sài Gòn</i></h1>
                <p className={cx('description')}>Mừng bạn đến và trải nghiệm những tiện nghi tại Stellar - Thiết kế không gian và tiện nghi hiện đại bất cứ đâu tại Stellar cũng đem lại cảm giác như đón bạn trở về mái nhà quen thuộc trên một ốc đảo xanh giữa lòng thành phố. Stellar cung cấp cho khách hàng những dịch vụ cơ bản khi khách ngụ tại khách sạn như phòng tập thể dục – GYM, hồ bơi, và Spa.</p>
            </div>
            <div className={cx('section-1')}>
                <Container fluid>
                    <Row>
                        <Col className={cx('Image')} >
                        <a href='#Utilies3'>
                        <Image src={spa2} className={cx('ImageUtilies')}/>
                        </a>
                        </Col>
                        <Col  className={cx('Image')}>
                        <a href='#Utilies2'>
                        <Image src={gym1} className={cx('ImageUtilies')} />
                        </a>
                        </Col>
                        <Col  className={cx('Image')}>
                        <a href='#Utilies1'>
                        <Image src={boi2} className={cx('ImageUtilies')} />
                        </a>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
            <div  id="Utilies1" className={cx('section-2')}>
                <Container fluid="md">
                    <Row>
                        <Col >
                            <Image src={boi1} className={cx('ImageUtilies')}/>
                        </Col>
                        <Col className={cx('right')}>
                            <h1 className={cx('content-header')}>Hồ Bơi Tràn Bờ Trên Cao</h1>
                            <p className={cx('content-wrapper')}>Hồ bơi tràn bờ dài 24m toạ lạc tại tầng cao nhất của Stellar như nối dài vô tận theo dòng sông Sài Gòn, tạo nên một không gian riêng tư và biệt lập giữa lòng đô thị nhiệt đới. Thư giãn trong làn nước xanh mát, bạn sẽ tìm thấy cảm giác thú vị như chỉ dành cho riêng mình khi chọn một ly cocktail yêu thích và nhìn ngắm một Sài Gòn li ti chuyển động trong tầm mắt.</p>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
            <div  id="Utilies2" className={cx('section-3')}>
                <Container fluid="md">
                    <Row>
                        <Col  className={cx('left')}>
                        <h1 className={cx('content-header')}>Phòng Tập Thể Thao</h1>
                        <p className={cx('content-wrapper')}>Phòng tập thể thao hiện đại mở cánh cửa bừng sáng đón chào ngày mới với những thiết bị tập luyện thể thao hiện đại và góc nhìn phủ khắp Sài Gòn từ trên cao. Dành một chút thời gian tập luyện cho cơ thể mỗi sớm, bạn sẽ có cả một ngày tràn đầy năng lượng để làm việc và tận hưởng chuyến đi khám phá thành phố.</p>   </Col>
                        <Col>  
                        <Image src={gym2} className={cx('ImageUtilies')}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="Utilies3" className={cx('section-4')}>
                <Container fluid="md">
                    <Row>
                        <Col >
                            <Image src={spa3} className={cx('ImageUtilies')}/>
                        </Col>
                        <Col className={cx('right')}>
                            <h1 className={cx('content-header')}>Stellar Spa</h1>
                            <p className={cx('content-wrapper')}>Hòa mình vào không gian an lành, bạn sẽ được trải nghiệm những phương pháp chăm sóc tinh tế của Stellar Spa, từ hồ massage chân đến phòng trị liệu thiết kế tỉ mỉ. Tại đây, những bí mật trong nghệ thuật massage truyền thống Việt Nam sẽ được khám phá như một cuộc phiêu lưu trong Sài Gòn xưa. Hãy để những liệu pháp chăm sóc hiện đại và toàn diện đưa bạn vào trạng thái thư thái, cùng với nụ cười chân thành của nhân viên đón bạn về nhà. Đến với  Stellar Spa và trải nghiệm cảm giác nghỉ ngơi trọn vẹn nhất trong không gian thiết kế độc đáo tại Khách sạn  Stellar.</p>    </Col>
                       
                    </Row>
                </Container>
            </div>

    </>;
}

export default Utilities;
