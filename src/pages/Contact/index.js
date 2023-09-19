import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import React from 'react';
import Button from '../../components/Button';

import { Container, Row } from 'react-bootstrap';

import SliderHero from '../../components/SliderHero';
import Map from '../../components/Map';
import { toast } from 'react-toastify';
import {conferenceApi} from '../../apis';
import { useState,  useRef } from 'react';

import { sliderHero1, sliderHero2, sliderHero3, sliderHero4 } from '../../assets/images/home';

const cx = classNames.bind(styles);

function Contact() {
    const heroImages = [sliderHero1, sliderHero2, sliderHero3, sliderHero4];
    const notificationRef = useRef(null);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const [emailValid, setEmailValid] = useState(true);
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailPattern.test(emailValue));
    };
    
    const handleChangePhoneNumber = (e) => {
        const phoneNumberValue = e.target.value;
        setPhoneNumber(phoneNumberValue);
        const phoneNumberPattern = /^\d{10}$/;
        setPhoneNumberValid(phoneNumberPattern.test(phoneNumberValue));
    };

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.preventDefault();
        if(emailValid && phoneNumberValid){
            await conferenceApi.createContact(name, email, phoneNumber, message)
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
                notificationRef.current.textContent = error.response.data.message;
            });
    }else{
        notificationRef.current.classList.remove(cx('hidden'));
        notificationRef.current.classList.add(cx('error'));
        notificationRef.current.textContent = 'Email hoặc số điện thoại không hợp lệ!';
    }
        
        }

    return (
        <>
            <SliderHero images={heroImages}></SliderHero>

            <Container fluid="md">
                <Row className={cx('section')}>
                    <div className={cx('px-0', 'left')}>
                        <h1>Gửi tin nhắn cho chúng tôi</h1>
                        <hr />
                        <form>
                            <div htmlFor="name">
                                <label htmlFor="name">Họ và tên:</label>
                                <input id="name" name="name" type="text" placeholder="Nguyễn Văn A" 
                                onChange={handleChangeName}/>
                            </div>
                            <div >
                                <label htmlFor="email">Email:</label>
                                 <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="abc@gmail.com"
                                    onChange={handleChangeEmail}
                                    className={cx('input', { 'is-invalid': !emailValid })}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Số điện thoại:</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="09465412XX"
                                    onChange={handleChangePhoneNumber}
                                    className={cx('input', { 'is-invalid': !phoneNumberValid })}
                                />
                            </div>
                            <div>
                                <label htmlFor="massage">Massage:</label>
                                <textarea id="massage" name="massage"
                                onChange={handleChangeMessage}
                                ></textarea>
                            </div>
                            <div ref={notificationRef} className={cx('notification', 'hidden')}></div>
                            <Button className={cx('btn')} filled_1={true} onClick= {handleSubmit}>
                                Gửi tin nhắn
                            </Button>
                        </form>
                    </div>
                    <div className={cx('px-0', 'right')}>
                        <div className={cx('heading-wrapper')}>
                            <h1>Liên hệ với chúng tôi</h1>
                            <p>The Stellar Hotel</p>
                        </div>
                        <div className={cx('content-wrapper')}>
                            <p>Địa chỉ liên hệ: 01 Võ Văn Ngân, P. Linh Chiểu, Q. Thủ Đức, TP. Hồ Chí Minh</p>
                            <p>Điện thoại: (+84) 9465412XX</p>
                            <p>Email: info@stellar.com.vn</p>
                        </div>
                        <Map className={cx('map')} />
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Contact;
