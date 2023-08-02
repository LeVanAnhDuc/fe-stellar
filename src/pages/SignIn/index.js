import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
// import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import InputEmail from '../../components/InputBootstrap/Email';

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
                        <InputEmail className={cx('input')} label={false}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        </InputEmail>
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
                            className={cx('remember')}
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
