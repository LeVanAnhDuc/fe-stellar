import { Carousel, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import styles from './Utilities.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import { utilitiesApi } from '../../apis';
import { spa1, spa2, gym1, boi2, boi1 } from '../../assets/images/utilities';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);
function Utilities() {
    const images = [spa1, gym1, boi1];
    const [utilies, setUtilies] = useState('');
    const [style, setStyle] = useState([]);

    useEffect(() => {
        let ignore = false;
        const fetchUtilies = async () => {
            await utilitiesApi
                .getUtilities({ searchString: 'Utilities' })
                .then((response) => {
                    const data = response.data.data;
                    const initialStyles = data.map((_, index) => (index % 2 === 0 ? 'row-reverse' : 'row'));
                    setUtilies(data);
                    setStyle(initialStyles);
                })
                .catch((error) => {
                    toast.error(error.response?.data.message ?? 'Mất kết nối server!');
                });
        };

        !ignore && fetchUtilies();

        return () => {
            ignore = true;
        };
    }, []);

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
            </div>
            <div className={cx('content-wrapper')}>
                <h1 className={cx('title')}>
                    <i>Ốc đảo xanh giữa phố thị Sài Gòn</i>
                </h1>
                <p className={cx('description')}>
                    Mừng bạn đến và trải nghiệm những tiện nghi tại Stellar - Thiết kế không gian và tiện nghi hiện đại
                    bất cứ đâu tại Stellar cũng đem lại cảm giác như đón bạn trở về mái nhà quen thuộc trên một ốc đảo
                    xanh giữa lòng thành phố. Stellar cung cấp cho khách hàng những dịch vụ cơ bản khi khách ngụ tại
                    khách sạn như phòng tập thể dục – GYM, hồ bơi, và Spa.
                </p>
            </div>
            <div className={cx('section-1')}>
                <Container fluid>
                    <Row>
                        <Col className={cx('px-0', 'Image')}>
                            <a href="#Stellar Spa">
                                <Image src={spa2} className={cx('ImageUtilies')} />
                            </a>
                        </Col>
                        <Col className={cx('px-0', 'Image')}>
                            <a href="#Phòng Tập Thể Thao">
                                <Image src={gym1} className={cx('ImageUtilies')} />
                            </a>
                        </Col>
                        <Col className={cx('px-0', 'Image')}>
                            <a href="#Hồ Bơi Tràn Bờ Trên Cao">
                                <Image src={boi2} className={cx('ImageUtilies')} />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={cx('content-wrapper')}>
                {Array.isArray(utilies) ? (
                    utilies.map((utilies, index) => (
                        <div id={utilies.name} key={index} className={cx('content')}>
                            <Container fluid="md" className={cx('content')} style={{ flexDirection: style[index] }}>
                                <Col className={cx('px-0', 'Image')}>
                                    <Image src={utilies.image[0]} className={cx('ImageUtilies')} />
                                </Col>
                                <Col className={cx('content-2')}>
                                    <h1 className={cx('content-header')}>{utilies.name}</h1>
                                    <p className={cx('content-wrapper')}>{utilies.description}</p>
                                </Col>
                            </Container>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
}

export default Utilities;
