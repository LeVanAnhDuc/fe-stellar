import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './RestaurentAndBar.module.scss';
import Button from '../../components/Button';
import Res1 from "../../assets/images/Res1.jpg";
import {Container , Row, Col} from 'react-bootstrap';
import classNames from 'classnames/bind';  
import styles from './RestaurentAndBar.module.scss';
import Buf1 from "../../assets/images/buffet.jpg";
import Res2 from "../../assets/images/Res2.jpg";
import Res3 from "../../assets/images/Res3.jpg";
import Res4 from "../../assets/images/Res4.jpg";
import Bar_2 from "../../assets/images/Bar_2.jpg";
import Bar_3 from "../../assets/images/Bar_3.jpg";
import Bar_4 from "../../assets/images/Bar_4.jpeg";
import Bar_5 from "../../assets/images/Bar_5.jpg";


const cx = classNames.bind(styles);

const ResShow = () => {
    return (
        <div>
        <Container >  
            <Row>  
                <Col className={cx('Col_1')}>
                <img className={cx('image_Buf1')}  src={Buf1}></img>
                </Col>
                <Col className={cx('Col_2')}>
                <h1 className={cx('head_col2')} ><b>NHÀ HÀNG BUFFET</b></h1>
                <div className={cx('main1_col2')}>
                <h3><i>Nơi hoàn hảo để tận hưởng sự sang trọng và thoải mái tuyệt đỉnh!</i></h3>
                </div>
                <div className={cx('main2_col2')}><hr></hr></div>
                <div className={cx('main3_col2')}>
                <h4>Tọa lạc tầng 5, với góc nhìn đẹp hướng ra đại lộ Nguyễn Huệ, Stellar Hotel nổi bật với hơn 60 món ăn của đồng bằng sông Cửu Long được chế biến tỉ mỉ của gồm mì, bánh khọt, gỏi cuốn, đậu hũ, chè, hột vịt lộn và nước mát cũng như các món hải sản nướng. Ngoài ra, thực khách còn được thưởng thức các buổi trình diễn nhạc cụ truyền thống trong khi thưởng thức bữa ăn. </h4>
                </div>
                <div className={cx('main4_col2')}>
                <h4>Giờ mở cửa:</h4>    
                <h4> + Bữa sáng: từ 6 giờ sáng đến 9 giờ sang hàng ngày.</h4>
                <h4> + Ăn trưa: từ 11 giờ sáng đến 2 giờ chiều hàng ngày.</h4>
                <h4> + Bữa tối: từ 6 giờ tối đến 9 giờ 30 chiều hàng phục.</h4>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

const ResImage = () => {
    return (
    <div>
       <h1 className={cx('imageRes_header')}><b>HÌNH ẢNH</b></h1>
       <div>
       <img className={cx('imageRes')} src={Res3}></img>
       <img className={cx('imageRes')} src={Res4}></img>
       <img className={cx('imageRes')} src={Res2}></img>
       </div>
       <Button className={cx('ButRes')} outline_1 = {true}>ĐĂNG KÝ NGAY</Button>
    </div>
    )
}

const BarShow = () => {
    return (
        <div>
        <Container >  
            <Row>  
                <Col className={cx('Col_1')}>
                <img className={cx('image_Buf1')}  src={Bar_3}></img>
                </Col>
                <Col className={cx('Col_2')}>
                <h1 className={cx('head_col2')} style={{marginTop:30}} ><b>STELLAR HOLTEL</b></h1>
                <div className={cx('main1_col2')}>  
                </div>
                <div className={cx('main2_col2')}><hr></hr></div>
                <div className={cx('main3_col3')}>
                <h4>Stellar Hotel mang không khí của câu lạc bộ biển. Thường xuyên thu hút người nước ngoài ăn mặc bảnh bao và người dân địa phương đến đây giải trí thư giãn. Quán bar trên tầng thượng này được trang bị rất nhiều cây nhiệt đới, trang trí nội thất theo tông màu đen trắng. Sàn nhảy rộng và quầy bar đầy đủ dự trữ trên boong chính phục vụ đầy và nhiệt tình các khách hàng đến đây.</h4>
                </div>
                <div className={cx('main4_col3')}>
                <h4>Với một cái nhìn tuyệt đẹp của trung tâm Sài Gòn. Chill Skybar là một trong những hộp đêm nổi tiếng nhất trong thành phố. Ở đây bạn sẽ chứng kiến một Sài Gòn cực kì đẹp với thưởng thức nhạc dance hay hip hop sôi động đầy hấp dẫn. Nhưng đồ uống ở đây là rất tốn kém, chi phí của một cocktail gần 20$. Bù vào đó đừng bỏ lở giờ hạnh phúc tuyệt vời 17:30 đến 20:00, các loại thức ăn và đồ uống sẽ được giảm một nửa giá.
</h4>    
                </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

const BarImage = () => {
    return (
    <div>
       <h1 className={cx('imageRes_header')}><b>HÌNH ẢNH</b></h1>
       <div>
       <img className={cx('imageRes')} src={Bar_4}></img>
       <img className={cx('imageRes')} src={Bar_5}></img>
       <img className={cx('imageRes')} src={Bar_3}></img>
       </div>
       <Button className={cx('ButRes')} outline_1 = {true}>ĐĂNG KÝ NGAY</Button>
    </div>
    )
}

function RestaurentAndBar() {
    return (
        <div className={cx('hero')} >
        <img className={cx('image_header')}  src={Res1}></img>
        <ResShow></ResShow>
        <ResImage></ResImage>
        <h1 className={cx('head_col3')}>hahaaha</h1>
        <img className={cx('image_header')}  src={Bar_2}></img>
        <BarShow></BarShow>
        <BarImage></BarImage>
        </div>
    )
}

export default RestaurentAndBar;
