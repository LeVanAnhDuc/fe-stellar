import Button from '../../components/Button';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { pic1, pic2, pic3, pic4 } from '../../assets/images/home';
import { Carousel, Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Home() {
    const images = [pic1, pic2, pic3, pic4];

    return (
        <div className={cx('hero')}>
            <Carousel className={cx('item-wrapper')} controls={false} wrap={true} indicators={false} interval={10000}>
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
                                filter: 'brightness(45%)',
                            }}
                        ></div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Container fluid="md">
                <div className={cx('content-wrapper')}>
                    <strong className={cx('titile')}>{`20+ NĂM UY TÍN TRONG\nLĨNH VỰC NHÀ HÀNG - KHÁCH SẠN`}</strong>

                    <h3>Thực hiện phương châm kinh doanh: Trải nghiệm mới với hoài niệm cũ.</h3>
                    <Button filled_1 className={cx('btn')}>
                        TÌM HIỂU THÊM
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default Home;
