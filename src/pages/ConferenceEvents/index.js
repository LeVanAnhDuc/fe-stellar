import styles from './ConferenceEvents.module.scss';
import classNames from 'classnames/bind';
import { Carousel } from 'react-bootstrap';
import {pic1, pic2, pic3, pic4} from '../../assets/images/conference';
import Button from '../../components/Button';

const cx = classNames.bind(styles);
function ConferenceEvents() {
    const images = [pic1, pic2, pic3, pic4];
    return <>
          <div className={cx('hero')}>
          <h1><strong>TRUNG TÂM HỘI NGHỊ</strong></h1>
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
            <hr width="20%" align="center"  />
            <p>Trung tâm hội nghị Stellar chính là lựa chọn đẳng cấp dành cho các doanh nghiệp được thiết kế với phong cách tinh tế và sang trọng.</p>
            <p>Stellar là một trung tâm tổ chức hội nghị đẳng cấp quốc tế tại TP.Hồ Chí Minh với lối kiến trúc tinh tế, độc đáo cùng một không gian rộng lớn, chất lượng dịch vụ chuyên nghiệp đẳng cấp hàng đầu. Được phát triển bởi đội ngũ nhân viên quản lý chuyên nghiệp được đào tạo bào bản theo đẳng cấp quốc tế nhằm mang đến sự hài lòng cho khách hàng.</p>
            <p>Để đáp ứng những yêu cầu của khách hàng, chất lượng phục vụ, những mong muốn, nhu cầu về sản phẩm đồng thời thắt chặt mối quan hệ giữa khách hàng và doanh nghiệp, giữa đồng nghiệp với nhau. Việc tổ chức hội nghị hay các lễ kỷ niệm, tri ân khách hàng luôn đóng một vai trò rất quan trọng đối với mỗi doanh nghiệp. Đây cũng là cơ hội để doanh nghiệp quảng bá thương hiệu của mình rộng rãi, thu hút thêm được một lượng lớn khách hàng tiềm năng.</p>
            </div>
            <div className={cx('session-1')}>
                <div className={cx('content')}>
                    <h1>LIÊN HỆ NHẬN BÁO GIÁ</h1>
                    <h3>Điền thông tin liên hệ đặt hội nghị - sự kiện để được tư vấn và nhận giá tốt nhất</h3>
                    <input className={cx('name')} type="text" placeholder="Họ và tên" />
                    <input className={cx('email')} type="text" placeholder="Email" />
                    <textarea name="subject" className={cx('email','mess')} placeholder="Lời nhắn..." ></textarea>
                    <Button filled_1 >Gửi thông tin</Button>
                </div>
             
            </div>
    
    </>
}

export default ConferenceEvents;