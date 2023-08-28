import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import config from '../../config';

// import { useDispatch, useSelector } from 'react-redux';
// import SignInUser from './signInSlice';
// import { getInfoUserSignIn } from '../../redux/select';

const cx = classNames.bind(styles);

function SignIn() {
    // store
    // const dispatch = useDispatch();
    // const user = useSelector(getInfoUserSignIn);

    // value
    const [emailUser, setEmailUser] = useState('');
    const [passWordUser, setPassWordUser] = useState('');

    const handleChangeEmail = (e) => {
        setEmailUser(e.target.value);
    };

    const handleChangePassWord = (e) => {
        setPassWordUser(e.target.value);
    };

    // validate
    const [validated, setValidated] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        // dispatch(SignInUser.actions.setSignInUser({ email: emailUser, pass: passWordUser }));
    };

    const validateEmail = () => {
        // Sử dụng biểu thức chính quy (regex) để kiểm tra tính hợp lệ của email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailPattern.test(emailUser));
    };

    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={cx('form')} action="/">
                    <h1>Login</h1>

                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <Form.Control
                            className={cx('input')}
                            required
                            type="email"
                            placeholder="Enter email address"
                            value={emailUser}
                            onChange={handleChangeEmail}
                            onBlur={validateEmail}
                            defaultValue=""
                        />
                        <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        {!isValidEmail && (
                            <Form.Control.Feedback type="invalid">Invalid email address</Form.Control.Feedback>
                        )}
                    </Form.Group>

                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            className={cx('input')}
                            value={passWordUser}
                            onChange={handleChangePassWord}
                        />
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                    </Form.Group>

                    <Form.Group controlId="rememberMeCheck" className={cx('remember-forgot')}>
                        <Form.Check
                            type="checkbox"
                            label="Remember Me"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            preventDefault
                            className={cx('remember')}
                        />
                        <Link to="/quen-mat-khau">Forgot password?</Link>
                    </Form.Group>

                    <Button type="submit" className={cx('btn-submit')}>
                        Login
                    </Button>
                    <div className={cx('register-link')}>
                        Don't have a account? <Link to={config.Routes.register}> Register</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default SignIn;
