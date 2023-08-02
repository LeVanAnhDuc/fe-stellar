/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import styles from './AboutStellar.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import { aboutStellar, luuTruNetDepVanHoa, giaiThuong } from '../../assets/images/aboutStellar';

const cx = classNames.bind(styles);

function AboutStellar() {
    return (
        <>
            <div className={cx('hero')}>
                <div
                    className={cx('background')}
                    style={{
                        backgroundImage: `url(${aboutStellar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'brightness(45%)',
                    }}
                ></div>
                <div className={cx('content-wrapper')}>
                    <h1>CÂU CHUYỆN VỀ STELLAR</h1>
                    <p>
                        Lưu giữ nét đẹp văn hóa Việt Nam - Nuôi dưỡng và làm thăng hoa món ăn truyền thống, ẩm thực
                        Việt.
                    </p>
                </div>
            </div>

            <div className={cx('section-1')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <h1>LƯU GIỮ NÉT ĐẸP VĂN HÓA VIỆT NAM</h1>
                        </div>
                    </Row>
                    <Row className={cx('content-wrapper')}>
                        <Col md="6" className={cx('px-0', 'left')}>
                            <p>
                                Điểm nhấn không gian xanh gần gũi và thân thiện môi trường thông qua những vật liệu tự
                                nhiên nhiên (gỗ, kính, gốm được tỉ mỉ làm bằng tay,…). Bên cạnh còn có tiện ích hiện
                                đại, phù hợp cho mọi khách lưu trú từ những vị khách trẻ năng động, đến khách gia đình
                                hay những doanh nhân bận rộn. Không những cố gắng trong việc lưu giữ những đặc tính vật
                                lý từ các dân tộc Việt, mà còn cố gắng học hỏi những giá trị tinh thần đẹp đẽ của dân
                                tộc Tày, Ê Đê, Dao, Thai, H’Mông chuyển tải qua chất lượng dịch vụ và phong thái hiếu
                                khách, hào sảng của từng con người nơi đây.
                            </p>
                            <p>
                                Kiến trúc của khách sạn được thiết kế hài hòa và tinh tế, tạo điểm nhấn nổi bật trong
                                không gian xanh mát. Các phòng nghỉ tiện nghi được trang bị đầy đủ các tiện ích để mang
                                lại sự thoải mái và sự nghỉ ngơi tuyệt vời cho khách hàng. Từ các cửa sổ và ban công,
                                khách hàng có thể ngắm nhìn toàn cảnh thành phố hoặc tận hưởng cảnh quan tuyệt đẹp của
                                "ốc đảo".
                            </p>
                        </Col>
                        <Col md="6" className={cx('px-0', 'right')}>
                            <img src={luuTruNetDepVanHoa} alt="Lưu giữ nét đẹp văn hóa Việt Nam" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={cx('section-2')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <h1>VỊ TRÍ</h1>
                            <p>
                                Stellar Hotel nằm ở những tuyến đường đẹp nhất quận 1 Sài Gòn. Từ khách sạn quý khách có
                                thể phóng tầm mắt chạm vào “tâm” Sài Gòn, nơi nhà thờ Đức Bà, Bưu điện Thành phố, Dinh
                                Độc Lập, Hồ Con Rùa, đường Đồng Khởi. chỉ cách vài phút rảo chân.
                            </p>
                        </div>
                    </Row>
                </Container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.375736707316!2d106.76933281027874!3d10.850632389258081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e1!3m2!1svi!2s!4v1690684807626!5m2!1svi!2s"></iframe>
            </div>

            <div className={cx('section-3')}>
                <Container fluid="md">
                    <Row className={cx('content-wrapper')}>
                        <div md="6" className={cx('px-0', 'left')}>
                            <img src={giaiThuong} alt="Giải thưởng" />
                        </div>
                        <div md="6" className={cx('px-0', 'right')}>
                            <div>
                                <h1>THÀNH THÍCH & GIẢI THƯỞNG</h1>
                                <p>
                                    Hệ thống nhà hàng của khách sạn đã nhận được sự tín nhiệm của khách hàng và những
                                    đánh giá cao của các tạp chí ẩm thực và du lịch. Chúng tôi không chỉ quan tâm mà còn
                                    quan tâm nhiều hơn đến các hoạt động mang tính cộng đồng.
                                </p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AboutStellar;
