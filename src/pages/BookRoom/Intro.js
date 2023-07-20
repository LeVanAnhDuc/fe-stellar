import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from 'react-bootstrap';
import classNames from 'classnames/bind';

import Image from '../../components/Image';
import image  from './introRoom.jpg';
import style from './BookRoom.module.scss';

const cx = classNames.bind(style);
function Intro() {
    return (
     
        <Container fluid className={cx('Intro')}>
            <Row>
            <Col  className={cx('Col')} >
            <Image className={cx('imageRoom')} src={image} alt="introRoom" />
              </Col>
            <Col className={cx('Col')} >
              <div className={cx('ContentIntro')}>
              <h1>Phòng nghỉ</h1>
                    <p>Nơi hoàn hảo để tận hưởng sự sang trọng và thoải mái tuyệt đỉnh!</p>
                    <hr  width="30%" align="center" />
                    <p>Với vị trí trung tâm tại trái tim Sài Gòn, Stellar Hotel không chỉ mang đến sự thuận tiện trong việc di chuyển và khám phá các điểm tham quan nổi tiếng của thành phố, mà còn tạo nên một không gian yên tĩnh và thanh bình giữa sự sôi động của đô thị.</p>
                    <p>Kiến trúc độc đáo và thiết kế tinh tế, Stellar Hotel đem đến cho quý khách không gian sống đẳng cấp và đầy phong cách. Từ các phòng nghỉ sang trọng đến các suite cao cấp, mỗi không gian được trang bị tiện nghi hiện đại và những chi tiết tỉ mỉ để mang đến sự thoải mái tối đa cho khách hàng</p>
             
              </div>
                </Col>
                </Row>
        </Container>
      );
}
export default Intro;