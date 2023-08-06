import classNames from 'classnames/bind';
import styles from './SliderHero.module.scss';

import { forwardRef } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

const SliderHero = forwardRef(({ children, className, classNameChildren, ...passProps }, ref) => {
    const props = { ...passProps };

    return (
        <div className={cx('wrapper', className)} {...props}>
            <Carousel className={cx('item-wrapper')} controls={false} wrap={true} indicators={false} interval={10000}>
                {props.images.map((image, index) => (
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
                <div ref={ref} className={cx('children', classNameChildren)}>
                    {children}
                </div>
            </Container>
        </div>
    );
});

export default SliderHero;
