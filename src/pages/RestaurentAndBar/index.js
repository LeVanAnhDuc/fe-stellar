import styles from './RestaurentAndBar.module.scss';
import classNames from 'classnames/bind';
import { rest1, rest2, bar1, buffet1 } from '../../assets/images/restaurent';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from '../../components/Button';
import config from '../../config';
import { utilitiesApi } from '../../apis';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);
function RestaurentAndBar() {
    const heroImages = [rest1, bar1, buffet1, rest2];
    const [restaurent, setRestaurent] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function fetchRestaurent() {
            await utilitiesApi
                .getUtilities({ searchString: 'Restaurant' })
                .then((response) => {
                    setRestaurent(response.data.data);
                })
                .catch((error) => {
                    toast.error(error.response?.data.message ?? 'Mất kết nối server!');
                });
        }
        !ignore && fetchRestaurent();

        return () => {
            ignore = true;
        };
    }, []);

    // path den id
    const location = useLocation();
    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            if (location.hash) {
                // Lấy phần tử có id tương ứng với hash
                const targetElement = document.getElementById(location.hash.substring(1));
                console.log(targetElement);

                // Nếu phần tử tồn tại, tính toán vị trí để cuộn tới
                if (targetElement) {
                    const yOffset = -120; // Điều chỉnh dựa trên độ cao của fixed header (nếu có)
                    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    // Cuộn tới vị trí tính toán được
                    window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        return () => {
            ignore = true;
        };
    }, [location.hash, location, restaurent]);

    return (
        <>
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
                                }}
                            ></div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div>
                {Array.isArray(restaurent) &&
                    restaurent.map((item) => (
                        <Container fluid="md" key={item._id} className={cx('section-1')} id={item._id}>
                            <Row className={cx('px-0', 'content')}>
                                <Col>
                                    <img src={item.image[0]} alt="rest1" className={cx('image')} />
                                </Col>
                                <Col>
                                    <strong className={cx('heading-1')}>{item.name}</strong>
                                    <hr className={cx('hr')} />
                                    <p className={cx('content-text')}>{item.description}</p>
                                    <p>Giờ mở cửa:</p>
                                    <ul>
                                        <li>Bữa sáng: từ 6 giờ sáng đến 9 giờ sang hàng ngày.</li>
                                        <li>Ăn trưa: từ 11 giờ sáng đến 2 giờ chiều hàng ngày.</li>
                                        <li>Bữa tối: từ 6 giờ tối đến 9 giờ 30 chiều hàng phục.</li>
                                    </ul>
                                </Col>
                            </Row>
                            <strong className={cx('heading')}>HÌNH ẢNH</strong>
                            <Row className={cx('px-0', 'content')}>
                                <Col className={cx('px-0')}>
                                    <img src={item.image[1]} alt="rest4" className={cx('image')} />
                                </Col>
                                <Col className={cx('px-0')}>
                                    <img src={item.image[2]} alt="buffet2" className={cx('image')} />
                                </Col>
                                <Col className={cx('px-0')}>
                                    <img src={item.image[3]} alt="rest2" className={cx('image')} />
                                </Col>
                            </Row>
                            <Row className={cx('px-0', 'content')}>
                                <Button outline_2 className={cx('btn')} to={config.Routes.contact}>
                                    ĐẶT BÀN NGAY
                                </Button>
                            </Row>
                        </Container>
                    ))}
            </div>
        </>
    );
}

export default RestaurentAndBar;
