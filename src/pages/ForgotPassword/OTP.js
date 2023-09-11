import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/Button';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useRef } from 'react';
import { authApi } from '../../apis';

const cx = classNames.bind(styles);

function OTP() {
    const notificationRef = useRef(null);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [OTP, setOTP] = useState('');
    const [emailFromStorage, setEmailFromStorage] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        setEmailFromStorage(storedEmail);
      }, []);

    const handleChangeOTP = (e) => {
        setOTP(e.target.value);
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        event.stopPropagation();
        await authApi.forgotpass_CheckOTP(emailFromStorage, OTP)
         .then(async (response) => {
            notificationRef.current.classList.remove(cx('hidden'));
            notificationRef.current.classList.add(cx('success'));
            notificationRef.current.textContent = response.data.message;
            navigate('/dang-nhap');
        })
        .catch((error) => {
            notificationRef.current.classList.remove(cx('hidden'));
            notificationRef.current.classList.add(cx('error'));
            notificationRef.current.textContent = error.response.data.message;
        });  
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={cx('form')} action="/">
                    <h1>Login</h1>
                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <Form.Control required 
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
                </Form>
            </div>
        </>
    );
}

export default OTP;
