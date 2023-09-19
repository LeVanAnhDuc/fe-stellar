import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useRef } from 'react';
import { authApi } from '../../apis';
import config from '../../config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function OTP() {
    const notificationRef = useRef(null);
    const navigate = useNavigate();

    const [OTP, setOTP] = useState('');
    const [emailFromStorage, setEmailFromStorage] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        setEmailFromStorage(storedEmail);
    }, []);

    const handleChangeOTP = (e) => {
        setOTP(e.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        await authApi
            .forgotpass_CheckOTP(emailFromStorage, OTP)
            .then(async (response) => {
                notificationRef.current.classList.remove(cx('hidden'));
                notificationRef.current.classList.add(cx('success'));
                notificationRef.current.textContent = response.data.message;
                setTimeout(() => {
                    navigate('/dang-nhap');
                }, 2000);
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
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Form noValidate onSubmit={handleSubmit} className={cx('form')} action="/">
                    <h1>Login</h1>
                    <div className={cx('register-link')}>Hãy kiểm tra mail của bạn!</div>
                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <Form.Control
                            required
                            type="text"
                            placeholder="OTP"
                            className={cx('input')}
                            value={OTP}
                            onChange={handleChangeOTP}
                        />
                        <FontAwesomeIcon icon={faUserCheck} className={cx('icon')} />
                    </Form.Group>
                    <div ref={notificationRef} className={cx('notification', 'hidden')}></div>
                    <Button type="submit" className={cx('btn-submit')}>
                        Send OTP
                    </Button>
                    <div className={cx('register-link')}>
                        Don't want to continue? <Link to={config.Routes.signIn}> Login</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default OTP;
