import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
// import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SignIn() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = () => {
        // Sử dụng biểu thức chính quy (regex) để kiểm tra tính hợp lệ của email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(email));
    };

    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={cx('form')}>
                    <h1>Login</h1>

                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={validateEmail}
                            className={cx('input')}
                        />
                        <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        {!isValidEmail && <div className="invalid-feedback">Please enter a valid email address.</div>}
                        <Form.Control.Feedback>Success</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <Form.Control required type="password" placeholder="Password" className={cx('input')} />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                    </Form.Group>

                    <Form.Group controlId="rememberMeCheck" className={cx('remember-forgot')}>
                        <Form.Check
                            type="checkbox"
                            label="Remember Me"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            preventDefault
                        />
                        <a href="/#">Forgot password?</a>
                    </Form.Group>

                    <Button type="submit" className={cx('btn-submit')}>
                        Login
                    </Button>
                    <div className={cx('register-link')}>
                        Don't have a account? <Link to={'/dang-ki'}> Register</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default SignIn;
