import Button from '../../components/Button';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
    pic1,
    pic2,
    pic3,
    pic4,
    aboutStellar,
    rSuperiorDoubleOrTwin,
    rDeluxeDouble,
    rExecutiveCityView,
    rSuiteGarden,
} from '../../assets/images/home';

const cx = classNames.bind(styles);

function Home() {
    // Hero
    const heroImages = [pic1, pic2, pic3, pic4];

    // Section 2
    const section2Images = [
        {
            id: 1,
            image: rSuperiorDoubleOrTwin,
            name: 'Phòng Superior Double Or Twin',
        },
        {
            id: 2,
            image: rDeluxeDouble,
            name: 'Phòng Deluxe Double',
        },
        {
            id: 3,
            image: rExecutiveCityView,
            name: 'Phòng Executive City View',
        },
        {
            id: 4,
            image: rSuiteGarden,
            name: 'Phòng Suite Garden',
        },
    ];

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={cx('custom-prev-arrow')} onClick={onClick}>
                {/* Add your custom arrow content here */}
                <FontAwesomeIcon className={cx('pre-icon')} icon={faAngleLeft} />
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={cx('custom-next-arrow')} onClick={onClick}>
                {/* Add your custom arrow content here */}
                <FontAwesomeIcon className={cx('next-icon')} icon={faAngleRight} />
            </div>
        );
    };

    const s2SliderSettings = {
        centerPadding: '60px',
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <>
            {/* Hero */}
            <div className={cx('hero')}>
                <Carousel
                    className={cx('item-wrapper')}
                    controls={false}
                    wrap={true}
                    indicators={false}
                    interval={10000}
                >
                    {heroImages.map((image, index) => (
                        <Carousel.Item key={index} className={cx('item')}>
                            <div
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    maxWidth: '100%',
                                    height: '100%',
                                    filter: 'brightness(45%)',
                                }}
                            ></div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Container fluid="md">
                    <div className={cx('content-wrapper')}>
                        <strong
                            className={cx('titile')}
                        >{`20+ NĂM UY TÍN TRONG\nLĨNH VỰC NHÀ HÀNG - KHÁCH SẠN`}</strong>

                        <h3>Thực hiện phương châm kinh doanh: Trải nghiệm mới với hoài niệm cũ.</h3>
                        <Button filled_1 className={cx('btn')}>
                            TÌM HIỂU THÊM
                        </Button>
                    </div>
                </Container>
            </div>

            {/* Section 1 */}
            <div className={cx('section-1')}>
                <Container fluid="md" className="section-wrapper">
                    <Row>
                        <div className={cx('heading-wrapper')}>
                            <p className={cx('titile')}>
                                Phong cách huyền thoại làm cho nó trở thành một trong những khách sạn uy tín nhất.
                            </p>
                            <h1>MỘT ỐC ĐẢO THANH BÌNH Ở TRUNG TÂM THÀNH PHỐ CỦA BẠN</h1>
                        </div>
                    </Row>
                    <Row className={cx('content')}>
                        <Col md="6" className={cx('left')}>
                            <p>
                                Khách sạn này nằm trên một "ốc đảo" giữa lòng thành phố Hồ Chí Minh, tạo nên một không
                                gian yên bình và thoáng đãng giữa sự sôi động của thành phố. Được bao quanh bởi sông và
                                cây xanh, khách sạn mang đến cho du khách một trải nghiệm nghỉ dưỡng độc đáo.
                            </p>
                            <p>
                                Kiến trúc của khách sạn được thiết kế hài hòa và tinh tế, tạo điểm nhấn nổi bật trong
                                không gian xanh mát. Các phòng nghỉ tiện nghi được trang bị đầy đủ các tiện ích để mang
                                lại sự thoải mái và sự nghỉ ngơi tuyệt vời cho khách hàng. Từ các cửa sổ và ban công,
                                khách hàng có thể ngắm nhìn toàn cảnh thành phố hoặc tận hưởng cảnh quan tuyệt đẹp của
                                "ốc đảo".
                            </p>
                            <Button outline_1={true}>Về Stellar</Button>
                        </Col>
                        <Col md="6" className={cx('right')}>
                            <img src={aboutStellar} alt="About Stellar" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Section 2 */}
            <div className={cx('section-2')}>
                <Container>
                    <Row>
                        <div className={cx('heading-wrapper')}>
                            <h1>PHÒNG KHÁCH SẠN</h1>
                            <p>Trải nghiệm tiện nghi đẳng cấp giữa trời mây.</p>
                        </div>
                    </Row>
                    <Row className={cx('content')}>
                        <Slider {...s2SliderSettings}>
                            {section2Images.map((item) => (
                                <div className={cx('slider-item')} key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <Button className={cx('btn')} outline_2={true}>
                                        {item.name}
                                    </Button>
                                </div>
                            ))}
                        </Slider>
                    </Row>
                </Container>
                {}
            </div>
        </>
    );
}

export default Home;
