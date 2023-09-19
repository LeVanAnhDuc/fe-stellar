import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import { authApi } from '../../apis';
import config from '../../config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const notificationRef = useRef(null);
    const navigate = useNavigate();
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (isValidEmail) {
            await authApi
                .forgotpass_SendOTP(email)
                .then(async (response) => {
                    navigate('/lay-OTP');
                    localStorage.setItem('email', email);
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
            <div className={cx('wrapper')}>
                <Form noValidate onSubmit={handleSubmit} className={cx('form')} action="/">
                    <h1>Forgot Password</h1>
                    <Form.Group controlId="validationCustom02" className={cx('input-box')}>
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
                        <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        <Form.Control.Feedback type="invalid">Invalid email address.</Form.Control.Feedback>
                    </Form.Group>

                    <div ref={notificationRef} className={cx('notification', 'hidden')}></div>

                    <Button type="submit" className={cx('btn-submit')}>
                        Kiểm tra
                    </Button>
                    <div className={cx('register-link')}>
                        Don't want to continue? <Link to={config.Routes.signIn}> Login</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default ForgotPassword;
