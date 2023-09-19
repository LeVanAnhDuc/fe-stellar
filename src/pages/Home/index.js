import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '../../components/Button';
import Map from '../../components/Map';
import { Carousel, Container, Row, Col, Modal, ModalBody } from 'react-bootstrap';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import '../BookRoom';

import {
    sliderHero1,
    sliderHero2,
    sliderHero3,
    sliderHero4,
    aboutStellar,
    restaurant1,
    restaurant2,
    restaurant3,
    bar1,
    bar2,
    bar3,
    event,
    seminar,
    service,
    avtBQT,
    avtPTNQ,
    avtLVDA,
    avtLPH,
    photoLibrary1,
    photoLibrary2,
} from '../../assets/images/home';
import SliderHero from '../../components/SliderHero';
import config from '../../config';
import { typeRoomApi } from '../../apis';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Home() {
    // Hero
    const heroImages = [sliderHero1, sliderHero2, sliderHero3, sliderHero4];

    // Section 2
    const [typeRooms, setTypeRooms] = useState();
    useEffect(() => {
        let ignore = false;
        async function fetchTypeRooms() {
            await typeRoomApi
                .getRoomType()
                .then((response) => {
                    setTypeRooms(response.data.data);
                })
                .catch((error) => {
                    toast.error(error.response?.data.message ?? 'Mất kết nối server!');
                });
        }

        !ignore && fetchTypeRooms();

        return () => {
            ignore = true;
        };
    }, []);

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={cx('custom-prev-arrow')} onClick={onClick}>
                <FontAwesomeIcon className={cx('pre-icon')} icon={faAngleLeft} />
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={cx('custom-next-arrow')} onClick={onClick}>
                <FontAwesomeIcon className={cx('next-icon')} icon={faAngleRight} />
            </div>
        );
    };

    const s2SliderSettings = {
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    focusOnSelect: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    prevArrow: <CustomPrevArrow />,
                    nextArrow: <CustomNextArrow />,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    focusOnSelect: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    prevArrow: <CustomPrevArrow />,
                    nextArrow: <CustomNextArrow />,
                },
            },
        ],
    };

    // Section 3
    const section3RestaurantImages = [
        {
            id: 'home-s3-restaurantImage-1',
            image: restaurant1,
            to: '#64fe74632590c9ca9d33485a',
        },
        {
            id: 'home-s3-restaurantImage-2',
            image: restaurant2,
            to: '#64fe74632590c9ca9d33485a',
        },
        {
            id: 'home-s3-restaurantImage-3',
            image: restaurant3,
            to: '#64fe74632590c9ca9d33485a',
        },
    ];
    const section3BarImages = [
        {
            id: 'home-s3-barImage-1',
            image: bar1,
            to: '#64fe74632590c9ca9d33485b',
        },
        {
            id: 'home-s3-barImage-2',
            image: bar2,
            to: '#64fe74632590c9ca9d33485b',
        },
        {
            id: 'home-s3-barImage-3',
            image: bar3,
            to: '#64fe74632590c9ca9d33485b',
        },
    ];

    // Section 4
    const [display, setDisplay] = useState(true);
    const handleClickS3 = () => {
        setDisplay(!display);
    };

    // Section 7
    const s7Comments = [
        {
            id: 'home-s7-comment-1',
            name: 'Bùi Quốc Tĩnh',
            avt: avtBQT,
            comment:
                'Khách sạn Stellar là khách sạn đạt tiêu chuẩn quốc tế 5 sao hàng đầu tọa lạc ngay tại trung tâm kinh doanh, mua sắm, thương mại, giải trí sầm uất của thành phố Hồ Chí Minh.',
        },
        {
            id: 'home-s7-comment-2',
            name: 'Phạm Thị Nguyệt Quế',
            avt: avtPTNQ,
            comment:
                'Khách sạn còn có nhiều tiện nghi cao cấp như hồ bơi, nhà hàng, quầy bar và phòng tập thể dục. Bên cạnh đó, khách sạn còn có đội ngũ nhân viên chuyên nghiệp và thân thiện để đảm bảo cho khách hàng có một kỳ nghỉ tuyệt vời.',
        },
        {
            id: 'home-s7-comment-3',
            name: 'Lê Văn Anh Đức',
            avt: avtLVDA,
            comment:
                'Khách sạn Stellar nằm ở trung tâm kinh doanh, mua sắm, thương mại và giải trí sầm uất của thành phố Hồ Chí Minh. Vị trí thuận tiện này giúp cho khách hàng dễ dàng di chuyển đến các điểm đến quan trọng trong thành phố. Bên cạnh đó, khách sạn còn có không gian thoáng đãng và yên tĩnh để khách hàng có thể thư giãn sau một ngày dài tham quan và mua sắm.',
        },
        {
            id: 'home-s7-comment-4',
            name: 'Lê Phúc Hậu',
            avt: avtLPH,
            comment:
                'Khách sạn Stellar là một khách sạn đạt tiêu chuẩn quốc tế 5 sao hàng đầu tại thành phố Hồ Chí Minh. Khách sạn có không gian sang trọng và hiện đại với các tiện nghi cao cấp để đáp ứng nhu cầu của khách hàng.',
        },
    ];

    const s8SliderSettings = {
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const [showModal, setShowModal] = useState(false);
    const [indexPhotoLibrariy, setIndexPhotoLibrariy] = useState(0);

    const imgPhotoLibrariy = [
        {
            id: 'home-s8-photoLibrariy-1',
            image: photoLibrary1,
        },
        {
            id: 'home-s8-photoLibrariy-2',
            image: photoLibrary2,
        },
        {
            id: 'home-s8-photoLibrariy-3',
            image: sliderHero1,
        },
        {
            id: 'home-s8-photoLibrariy-4',
            image: sliderHero2,
        },
        {
            id: 'home-s8-photoLibrariy-5',
            image: sliderHero4,
        },
    ];

    const handelImgPhotoLibrariy = (index) => {
        // Tìm index của selectedId trong mảng
        const selectedIndex = index;
        const length = imgPhotoLibrariy.length;
        let startIndex = 0;

        if (selectedIndex >= 0 && selectedIndex < length) {
            const updatedData = [];

            for (let i = 0; i < length; i++) {
                if (i === 0) {
                    updatedData.push(imgPhotoLibrariy[selectedIndex]);
                } else if (selectedIndex + i <= length - 1) {
                    updatedData.push(imgPhotoLibrariy[selectedIndex + i]);
                } else {
                    updatedData.push(imgPhotoLibrariy[startIndex++]);
                }
            }

            return updatedData;
        }
        return imgPhotoLibrariy;
    };

    return (
        <>
            {/* Hero */}
            <SliderHero className={cx('hero')} images={heroImages} classNameChildren={cx('content-wrapper')}>
                <strong className={cx('heading')}>{`20+ NĂM UY TÍN TRONG\nLĨNH VỰC NHÀ HÀNG - KHÁCH SẠN`}</strong>
                <p>Thực hiện phương châm kinh doanh: Trải nghiệm mới với hoài niệm cũ.</p>
                <Button filled_1 className={cx('btn')} to={'/lien-he'}>
                    TÌM HIỂU THÊM
                </Button>
            </SliderHero>

            {/* Section 1 */}
            <div className={cx('section-1')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <p className={cx('titile')}>
                                Phong cách huyền thoại làm cho nó trở thành một trong những khách sạn uy tín nhất.
                            </p>
                            <h1>MỘT ỐC ĐẢO THANH BÌNH Ở TRUNG TÂM THÀNH PHỐ CỦA BẠN</h1>
                        </div>
                    </Row>
                    <Row className={cx('content-wrapper')}>
                        <Col md="6" className={cx('px-0', 'left')}>
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
                            <Button outline_1={true} to={'/ve-Stellar'}>
                                Về Stellar
                            </Button>
                        </Col>
                        <Col md="6" className={cx('px-0', 'right')}>
                            <img src={aboutStellar} alt="About Stellar" />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Section 2 */}
            <div className={cx('section-2')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <h1>PHÒNG KHÁCH SẠN</h1>
                            <p>Trải nghiệm tiện nghi đẳng cấp giữa trời mây.</p>
                        </div>
                    </Row>
                    <Row className={cx('content-wrapper')}>
                        <Slider className="px-0" {...s2SliderSettings}>
                            {Array.isArray(typeRooms) &&
                                typeRooms.map((item) => (
                                    <div className={cx('slider-item')} key={item._id}>
                                        <img src={item.image[0]} alt={item.name} />
                                        <Button
                                            className={cx('btn')}
                                            outline_2={true}
                                            to={config.Routes.bookRoom + '#' + item._id}
                                        >
                                            {item.name}
                                        </Button>
                                    </div>
                                ))}
                        </Slider>
                    </Row>
                </Container>
                {}
            </div>

            {/* Section 3 */}
            <div className={cx('section-3')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <h1>NHÀ HÀNG & QUÁN BAR</h1>
                            <Button className={cx('btn')} outline_1={true} to={config.Routes.restaurentAndBar}>
                                Khám phá
                            </Button>
                            <p>
                                Nâng tầm Trải nghiệm Ẩm thực, nơi sở hữu các tuyển chọn tinh tế về ẩm thực cho tất cả
                                các dịp trong năm.
                            </p>
                        </div>
                    </Row>
                    <Row className={cx('content-wrapper')}>
                        <div className={cx('px-0', 'left')}>
                            <Carousel
                                className={cx('item-wrapper')}
                                controls={false}
                                wrap={true}
                                indicators={false}
                                interval={5000}
                            >
                                {section3RestaurantImages.map((item) => (
                                    <Carousel.Item key={item.id} className={cx('item')}>
                                        <img src={item.image} alt={item.image} />
                                        <Button
                                            className={cx('btn')}
                                            filled_2={true}
                                            to={config.Routes.restaurentAndBar + item.to}
                                        >
                                            Tìm hiểu thêm
                                        </Button>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className={cx('px-0', 'right')}>
                            <Carousel
                                className={cx('item-wrapper')}
                                controls={false}
                                wrap={true}
                                indicators={false}
                                interval={5000}
                            >
                                {section3BarImages.map((item) => (
                                    <Carousel.Item key={item.id} className={cx('item')}>
                                        <img src={item.image} alt={item.image} />
                                        <Button
                                            className={cx('btn')}
                                            filled_2={true}
                                            to={config.Routes.restaurentAndBar + item.to}
                                        >
                                            Tìm hiểu thêm
                                        </Button>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Row>
                </Container>
            </div>

            {/* Section 4 */}
            <div className={cx('section-4')}>
                <Container fluid="md">
                    <Row className={cx('event-wrapper')} style={{ display: (display && 'flex') || 'none' }}>
                        <div className={cx('px-0', 'left')}>
                            <img src={event} alt="Event" />
                        </div>
                        <div className={cx('px-0', 'right')}>
                            <h1>HỘI THẢO & SỰ KIỆN</h1>
                            <p>Nâng tầm sự kiện của bạn</p>
                            <ul>
                                <li>Đa dạng các loại hình phòng họp, phù hợp với mọi nhu cầu.</li>
                                <li>
                                    Diện tích lên tới 1000m2 phù hợp với các sự kiện lớn, sức chứa lên đến 1500 khách.
                                </li>
                                <li>Khu vực tiền sảnh có thể đưa ô tô vào để trưng bày.</li>
                                <li>Trang thiết bị hiện đại với 3 màn hình LED tại 3 phòng ballroom lớn.</li>
                                <li>Hỗ trợ âm thanh ánh sáng chuyên nghiệp.</li>
                                <li>Không gian làm việc sang trọng bậc nhất.</li>
                                <li>Cơ sở vật chất đạt chuẩn đi kèm dịch vụ chu đáo.</li>
                            </ul>
                            <Button to={'/hoi-thao-su-kien'} className={cx('btn')} outline_2={true}>
                                Liên hệ được tư vấn
                            </Button>
                            <FontAwesomeIcon className={cx('icon')} icon={faArrowLeft} onClick={handleClickS3} />
                        </div>
                    </Row>
                    <Row className={cx('seminar-wrapper')} style={{ display: (display && 'none') || 'flex' }}>
                        <div className={cx('px-0', 'left')}>
                            <h1>HỘI THẢO & SỰ KIỆN</h1>
                            <p>Họp trên mây</p>
                            <span>
                                Phòng họp với tầm nhìn toàn cảnh bãi biển. Trải nghiệm dịch vụ phòng họp trên tâng cao,
                                rất khác biệt và đẳng cấp tại tòa của Stellar.
                            </span>
                            <Button className={cx('btn')} outline_2={true} to={'/hoi-thao-su-kien'}>
                                Liên hệ được tư vấn
                            </Button>
                            <FontAwesomeIcon className={cx('icon')} icon={faArrowRight} onClick={handleClickS3} />
                        </div>
                        <div className={cx('px-0', 'right')}>
                            <img src={seminar} alt="Seminar" />
                        </div>
                    </Row>
                </Container>
            </div>

            {/* Section 5 */}
            <div className={cx('section-5')}>
                <div
                    className={cx('background')}
                    style={{
                        backgroundImage: `url(${service})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        maxWidth: '100%',
                        height: '540px',
                        filter: 'brightness(45%)',
                    }}
                ></div>

                <div className={cx('heading-wrapper')}>
                    <h1>THƯ GIÃN TẠI STELLAR HOTEL</h1>
                    <Button className={cx('btn')} filled_2={true} to={config.Routes.contact}>
                        Trải nghiệm
                    </Button>
                </div>
            </div>

            {/* Setion 6 */}
            <div className={cx('section-6')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <h1>VỊ TRÍ</h1>
                            <p>Vị trí của khách sạn đẹp.</p>
                        </div>
                    </Row>
                </Container>

                <Map className={cx('map')} />
            </div>

            {/* Section 7 */}
            <div className={cx('section-7')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <h1>KHÁCH HÀNG NHẬN XÉT</h1>
                        </div>
                    </Row>
                    <Row className={cx('content-wrapper')}>
                        {s7Comments.map((item) => (
                            <div key={item.id} className={cx('px-0', 'item')}>
                                <div className={cx('left')}>
                                    <img src={item.avt} alt={item.name} />
                                </div>
                                <div className={cx('right')}>
                                    <h2>{item.name}</h2>
                                    <p>{item.comment}</p>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Section 8 */}
            <div className={cx('section-8')}>
                <Container fluid="md">
                    <Row>
                        <div className={cx('px-0', 'heading-wrapper')}>
                            <h1>THƯ VIỆN ẢNH KHÁCH SẠN</h1>
                            <p>Cảm nhận thế giới qua lăng kính mới.</p>
                        </div>
                    </Row>
                </Container>

                <div className={cx('content-wrapper')}>
                    {imgPhotoLibrariy.map((item, index) => (
                        <div md="6" key={item.id} className={cx('item')}>
                            <img
                                src={item.image}
                                alt={item.id}
                                onClick={() => {
                                    setIndexPhotoLibrariy(index);
                                    setShowModal(true);
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                size="xxl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
                dialogClassName={cx('s8-modal')}
                onHide={() => setShowModal(false)}
            >
                <Slider className="px-0" {...s8SliderSettings}>
                    {handelImgPhotoLibrariy(indexPhotoLibrariy).map((item) => {
                        return (
                            <ModalBody className={cx('slider-item')} key={item.id + '-modal'}>
                                <img src={item.image} alt="Thư viện ảnh" />
                            </ModalBody>
                        );
                    })}
                </Slider>
            </Modal>
        </>
    );
}

export default Home;
