import styles from './ConferenceEvents.module.scss';
import classNames from 'classnames/bind';
import { Carousel } from 'react-bootstrap';
import { pic1, pic2, pic3, pic4 } from '../../assets/images/conference';
import Button from '../../components/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import { conferenceApi } from '../../apis';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);
function ConferenceEvents() {
    const images = [pic1, pic2, pic3, pic4];
    const notificationRef = useRef(null);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const validatePhoneNumber = () => {
        const phoneNumberPattern = /^\d{10}$/;
        setIsValidPhoneNumber(phoneNumberPattern.test(phoneNumber));
    };

    const validateEmail = () => {
        // Sử dụng biểu thức chính quy (regex) để kiểm tra tính hợp lệ của email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(email));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (name === '' && email === '' && phoneNumber === '' && message === '') {
            notificationRef.current.classList.remove(cx('hidden'));
            notificationRef.current.classList.add(cx('error'));
            notificationRef.current.textContent = 'Vui lòng nhập đầy đủ thông tin!';

            setTimeout(() => {
                notificationRef?.current?.classList?.remove(cx('error'));
                notificationRef?.current?.classList?.remove(cx('success'));
                notificationRef?.current?.classList?.add(cx('hidden'));
            }, 2000);
        } else if (isValidEmail && isValidPhoneNumber) {
            await conferenceApi
                .createContact(name, email, phoneNumber, message)
                .then(async (response) => {
                    toast.success('Gửi thông tin thành công');
                    setName('');
                    setEmail('');
                    setPhoneNumber('');
                    setMessage('');
                })
                .catch((error) => {
                    notificationRef.current.classList.remove(cx('hidden'));
                    notificationRef.current.classList.add(cx('error'));
                    notificationRef.current.textContent = error.response?.data.message ?? 'Mất kết nối server!';
                })
                .finally(() => {
                    setTimeout(() => {
                        notificationRef?.current?.classList?.remove(cx('error'));
                        notificationRef?.current?.classList?.remove(cx('success'));
                        notificationRef?.current?.classList?.add(cx('hidden'));
                    }, 2000);
                });
        }
    };
    return (
        <>
            <div className={cx('hero')}>
                <h1>
                    <strong>TRUNG TÂM HỘI NGHỊ</strong>
                </h1>
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
                <hr width="20%" align="center" />
                <p>
                    Trung tâm hội nghị Stellar chính là lựa chọn đẳng cấp dành cho các doanh nghiệp được thiết kế với
                    phong cách tinh tế và sang trọng.
                </p>
                <p>
                    Stellar là một trung tâm tổ chức hội nghị đẳng cấp quốc tế tại TP.Hồ Chí Minh với lối kiến trúc tinh
                    tế, độc đáo cùng một không gian rộng lớn, chất lượng dịch vụ chuyên nghiệp đẳng cấp hàng đầu. Được
                    phát triển bởi đội ngũ nhân viên quản lý chuyên nghiệp được đào tạo bào bản theo đẳng cấp quốc tế
                    nhằm mang đến sự hài lòng cho khách hàng.
                </p>
                <p>
                    Để đáp ứng những yêu cầu của khách hàng, chất lượng phục vụ, những mong muốn, nhu cầu về sản phẩm
                    đồng thời thắt chặt mối quan hệ giữa khách hàng và doanh nghiệp, giữa đồng nghiệp với nhau. Việc tổ
                    chức hội nghị hay các lễ kỷ niệm, tri ân khách hàng luôn đóng một vai trò rất quan trọng đối với mỗi
                    doanh nghiệp. Đây cũng là cơ hội để doanh nghiệp quảng bá thương hiệu của mình rộng rãi, thu hút
                    thêm được một lượng lớn khách hàng tiềm năng.
                </p>
            </div>
            <div className={cx('session-1')}>
                <Form noValidate className={cx('form')}>
                    <div className={cx('content')}>
                        <h1>LIÊN HỆ NHẬN BÁO GIÁ</h1>
                        <h3>Điền thông tin liên hệ đặt hội nghị - sự kiện để được tư vấn và nhận giá tốt nhất</h3>
                        <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter full name"
                                value={name}
                                onChange={handleChangeName}
                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={handleChangeEmail}
                                isInvalid={!isValidEmail}
                                onBlur={validateEmail}
                            />

                            <Form.Control.Feedback type="invalid">Invalid email address.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="phoneNumber"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={handleChangePhoneNumber}
                                isInvalid={!isValidPhoneNumber}
                                onBlur={validatePhoneNumber}
                            />

                            <Form.Control.Feedback type="invalid">Invalid phone number.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                            <Form.Control
                                className={cx('input', 'mess')}
                                as="textarea"
                                required
                                type="text"
                                placeholder="Message..."
                                value={message}
                                onChange={handleChangeMessage}
                            />
                        </Form.Group>

                        <div ref={notificationRef} className={cx('notification', 'hidden')}></div>
                        <Button filled_1 onClick={handleSubmit}>
                            Gửi thông tin
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default ConferenceEvents;
