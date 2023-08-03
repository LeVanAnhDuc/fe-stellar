import styles from './RestaurentAndBar.module.scss';
import classNames from 'classnames/bind';
import { rest1, rest2, rest3, bar1,bar2,bar3, buffet1,  rest4, buffet2} from '../../assets/images/restaurent';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from '../../components/Button';

const cx = classNames.bind(styles);
function RestaurentAndBar() {
    const heroImages = [rest1, bar1, buffet1, rest2];
    return <>
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
        <div className={cx('section-1')}>
            <Container fluid="md">
                <Row className={cx('px-0','content')}>
                    <Col className={cx('px-0')} >
                    <img src={buffet1} alt="buffet" className={cx('image')}/>
                    </Col>
                    <Col className={cx('px-0')}>         
                    <strong
                            className={cx('heading')}
                        >{`NHÀ HÀNG BUFFET`}</strong>
                        <p className={cx('content-text')}> Nơi hoàn hảo để tận hưởng sự sang trọng và thoải mái tuyệt đỉnh!</p>
                        <hr className={cx('hr')}/>
                        <p className={cx('content-text')}>Tọa lạc tầng 5, với góc nhìn đẹp hướng ra đại lộ Nguyễn Huệ, Stellar Hotel nổi bật với hơn 60 món ăn của đồng bằng sông Cửu Long được chế biến tỉ mỉ của gồm mì, bánh khọt, gỏi cuốn, đậu hũ, chè, hột vịt lộn và nước mát cũng như các món hải sản nướng. Ngoài ra, thực khách còn được thưởng thức các buổi trình diễn nhạc cụ truyền thống trong khi thưởng thức bữa ăn.</p>
                        <p>Giờ mở cửa:</p>
                        <ul>
                            <li>Bữa sáng: từ 6 giờ sáng đến 9 giờ sang hàng ngày.</li>
                            <li>Ăn trưa: từ 11 giờ sáng đến 2 giờ chiều hàng ngày.</li>
                            <li>Bữa tối: từ 6 giờ tối đến 9 giờ 30 chiều hàng phục.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>    
        </div>
        <div className={cx('section-2')}>
            <strong className={cx('heading')} >HÌNH ẢNH</strong>
            <Container fluid className={cx('px-0')}>
                <Row className={cx('px-0','content')}>
                    <Col className={cx('px-0')} >
                    <img src={rest4} alt="rest4" className={cx('image')}/>
                    </Col>
                    <Col className={cx('px-0')} >
                    <img src={buffet2} alt="buffet2" className={cx('image')}/>
                    </Col>
                    <Col className={cx('px-0')} >
                    <img src={rest2} alt="rest2" className={cx('image')}/>
                    </Col>
                </Row>
                <Row className={cx('px-0','content')}>
                    <Button outline_2 className={cx('btn')} to={'/lien-he'}>ĐẶT BÀN NGAY</Button> 
                </Row> 
                </Container>
        </div>
        <div className={cx('section-3')}>
        
            <div>
            <img src={bar2} alt="bar2" className={cx('image')}/>
            </div>
            <div className={cx('content-wrapper')}>
                     <strong className={cx('heading')}>QUÁN BAR</strong>  
                     <p><strong>Stellar Hotel là một trong những hộp đêm nổi tiếng nhất trong thành phố.</strong></p>
            </div>
          
        </div>
        <div className={cx('section-1','section-4')}>
            <Container fluid="md">
                <Row className={cx('px-0','content')}>
                    <Col className={cx('px-0')} >
                    <img src={bar1} alt="bar" className={cx('image')}/>
                    </Col>
                    <Col className={cx('px-0')}>         
                    <strong
                                className={cx('heading')}
                    >{`STELLAR BAR`}</strong>
                       <hr className={cx('hr')}/>
                        <p className={cx('content-text')}>Stellar Hotel mang không khí của câu lạc bộ biển. Thường xuyên thu hút người nước ngoài ăn mặc bảnh bao và người dân địa phương đến đây giải trí thư giãn. Quán bar trên tầng thượng này được trang bị rất nhiều cây nhiệt đới, trang trí nội thất theo tông màu đen trắng. Sàn nhảy rộng và quầy bar đầy đủ dự trữ trên boong chính phục vụ đầy và nhiệt tình các khách hàng đến đây.</p>
                        <p className={cx('content-text')}>Với một cái nhìn tuyệt đẹp của trung tâm Sài Gòn. Chill Skybar là một trong những hộp đêm nổi tiếng nhất trong thành phố. Ở đây bạn sẽ chứng kiến một Sài Gòn cực kì đẹp với thưởng thức nhạc dance hay hip hop sôi động đầy hấp dẫn. Nhưng đồ uống ở đây là rất tốn kém, chi phí của một cocktail gần 20$. Bù vào đó đừng bỏ lở giờ hạnh phúc tuyệt vời 17:30 đến 20:00, các loại thức ăn và đồ uống sẽ được giảm một nửa giá.</p>
                    </Col>
                 </Row>
            </Container>
        </div>
        <div className={cx('section-2','section-5')}>
            <strong className={cx('heading')} >HÌNH ẢNH</strong>
            <Container fluid className={cx('px-0')}>
                <Row className={cx('px-0','content')}>
                    <Col className={cx('px-0')} >
                    <img src={bar3} alt="rest4" className={cx('image')}/>
                    </Col>
                    <Col className={cx('px-0')} >
                    <img src={rest3} alt="buffet2" className={cx('image')}/>
                    </Col>
                    <Col className={cx('px-0')} >
                    <img src={bar1} alt="rest2" className={cx('image')}/>
                    </Col>
                </Row>
                <Row className={cx('px-0','content')}>
                    <Button outline_2 className={cx('btn')} to={'/lien-he'}>ĐẶT BÀN NGAY</Button> 
                </Row> 
                </Container>
        </div>
    </>;
}

export default RestaurentAndBar;
