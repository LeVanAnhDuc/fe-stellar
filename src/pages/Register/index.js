import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
// import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [enterPassWord, setEnterPassWord] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isComFirmPass, setIsComFirmPass] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = () => {
        // Sử dụng biểu thức chính quy (regex) để kiểm tra tính hợp lệ của email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(email));
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const validatePhone = () => {
        const phonePattern = /^\d{10,12}$/;
        setIsValidPhone(phonePattern.test(phone));
    };

    const handleChangePassWord = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeEnterPW = (e) => {
        setEnterPassWord(e.target.value);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || !validatePhone(phone) || !validateEmail(email)) {
            event.preventDefault();
            event.stopPropagation();
        }
        // else {
        //     // Custom phone number validation
        //     if () {
        //         event.preventDefault();
        //         event.stopPropagation();
        //     }
        // }

        if (password === enterPassWord) {
            setIsComFirmPass(true);
        } else {
            setIsComFirmPass(false);
        }

        setValidated(true);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className={cx('form')}
                    action="/dang-nhap"
                >
                    <h1>Register</h1>
                    <Form.Group className={cx('input-box')}>
                        <Form.Control
                            required
                            type="tel"
                            placeholder="Enter phone number (10-12 digits)"
                            value={phone}
                            onChange={handlePhoneChange}
                            onBlur={validatePhone}
                            pattern="[0-9]{10,12}"
                            className={cx('input')}
                        />
                        <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                        {!isValidPhone && (
                            <Form.Control.Feedback type="invalid">Please enter a valid phone.</Form.Control.Feedback>
                        )}
                    </Form.Group>
                    <Form.Group className={cx('input-box')}>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={validateEmail}
                            className={cx('input')}
                        />
                        <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        {!isValidEmail && (
                            <Form.Control.Feedback type="invalid">Invalid email address</Form.Control.Feedback>
                        )}
                    </Form.Group>

                    <div className={cx('input-box')}>
                        <input
                            required
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={handleChangePassWord}
                            className={cx('input')}
                        />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                    </div>

                    <div className={cx('input-box')}>
                        <input
                            required
                            type="text"
                            placeholder="Enter the password"
                            value={enterPassWord}
                            onChange={handleChangeEnterPW}
                            className={cx(isComFirmPass ? 'input' : 'input-danger')}
                        />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        {!isComFirmPass && <div className={cx('notyfi-danger')}>Not match password</div>}
                    </div>

                    <Button type="submit" className={cx('btn')}>
                        Register
                    </Button>
                    <div className={cx('register-link')}>
                        Already have an account? <Link to={'/dang-nhap'}> Login</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Register;
