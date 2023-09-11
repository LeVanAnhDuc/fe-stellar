import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/Button';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import InputEmail from '../../components/InputBootstrap/Email';
import { authApi } from '../../apis';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const notificationRef = useRef(null);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [email, setEmail] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const validateEmail = () => {
        // Sử dụng biểu thức chính quy (regex) để kiểm tra tính hợp lệ của email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(email));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        event.stopPropagation();
        if(isValidEmail)
        {
            await authApi
            .forgotpass_SendOTP(email)
            .then(async (response) => {
                notificationRef.current.classList.remove(cx('hidden'));
                notificationRef.current.classList.add(cx('success'));
                notificationRef.current.textContent = response.data.message;
                navigate('/lay-OTP');
                localStorage.setItem('email', email);
            })
            .catch((error) => {
                notificationRef.current.classList.remove(cx('hidden'));
                notificationRef.current.classList.add(cx('error'));
                notificationRef.current.textContent = error.response.data.message;
            });
            }     
        }
    return (
        <>
            <div className={cx('wrapper')}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={cx('form')} action="/">
                    <h1>Forgot Password</h1>
                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <InputEmail className={cx('input')} 
                        label={false}  
                        handleChangeEmail ={handleChangeEmail}
                        value = {email} 
                        onBlur={validateEmail}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        </InputEmail>
                    </Form.Group>
                    <div ref={notificationRef} className={cx('notification', 'hidden')}></div>

                    <Button type="submit" className={cx('btn-submit')}>
                        Kiểm tra
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default ForgotPassword;
