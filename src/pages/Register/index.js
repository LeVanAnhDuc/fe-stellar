import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import { authApi } from '../../apis/index.js';
import { useDispatch } from 'react-redux';
import { setIsSignIn } from '../../Layouts/components/Header/HeaderSlice';

const cx = classNames.bind(styles);

function Register() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enterPassWord, setEnterPassWord] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showPassWord, setShowPassWord] = useState(false);
    const [isComFirmPass, setIsComFirmPass] = useState(true);

    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true); // validate mail
    const [isValidPassword, setIsValidPassword] = useState(true); // validate password

    const dispatch = useDispatch();
    const notificationRef = useRef(null);
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassWord = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeEnterPW = (e) => {
        setEnterPassWord(e.target.value);
    };

    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handelShowPassword = () => {
        setShowPassWord(!showPassWord);
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

    const validatePassword = () => {
        const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        setIsValidPassword(passwordPattern.test(password));
    };

    console.log(email)

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.preventDefault();

        if (password === enterPassWord) {
            setIsComFirmPass(true);
            if (isValidPhoneNumber && isValidEmail && isValidPassword) {
                await authApi
                    .register(email, password, phoneNumber)
                    .then(async (response) => {
                        notificationRef.current.classList.remove(cx('hidden'));
                        notificationRef.current.classList.add(cx('success'));
                        notificationRef.current.textContent = response.data.message;

                        await authApi
                            .login(email, password)
                            .then(() => {
                                dispatch(setIsSignIn(true));
                                navigate('/');
                            })
                            .catch(() => {
                                navigate('/dang-nhap');
                            });
                    })
                    .catch((error) => {
                        notificationRef.current.classList.remove(cx('hidden'));
                        notificationRef.current.classList.add(cx('error'));
                        notificationRef.current.textContent = error.response.data.message;
                    });
            }
        } else {
            setIsComFirmPass(false);
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Form noValidate validated={validated} className={cx('form')}>
                    <h1>Register</h1>
                    <div ref={notificationRef} className={cx('notification', 'hidden')}></div>

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
                        <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                        <Form.Control.Feedback type="invalid">Invalid phone number.</Form.Control.Feedback>
                    </Form.Group>

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

                    <Form.Group controlId="validationCustom03" className={cx('input-box')}>
                        <Form.Control
                            className={cx('input')}
                            required
                            type={showPassWord ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={handleChangePassWord}
                            isInvalid={!isValidPassword}
                            onBlur={validatePassword}
                        />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        <Form.Control.Feedback type="invalid">Invalid password</Form.Control.Feedback>
                    </Form.Group>

                    <div className={cx('input-box')}>
                        <input
                            required
                            type={showPassWord ? 'text' : 'password'}
                            placeholder="Enter the password"
                            value={enterPassWord}
                            onChange={handleChangeEnterPW}
                            className={cx(isComFirmPass ? 'input' : 'input-danger')}
                        />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        {!isComFirmPass && <div className={cx('notyfi-danger')}>Not match password</div>}
                    </div>

                    <div className={cx('remember-forgot')}>
                        <label className={cx('label-checkbox')}>
                            <input
                                type="checkbox"
                                checked={showPassWord}
                                onChange={handelShowPassword}
                                className={cx('input-checkbox')}
                            />
                            Show password
                        </label>
                    </div>

                    <Button type="submit" className={cx('btn')} onClick={handleSubmit}>
                        Register
                    </Button>
                    <div className={cx('register-link')}>
                        Already have an account? <Link to={config.Routes.signIn}> Login</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Register;
