import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
// import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import InputSDT from '../../components/InputBootstrap/SDT';
import InputEmail from '../../components/InputBootstrap/Email';

const cx = classNames.bind(styles);

function Register() {
    const [validated, setValidated] = useState(false);

    const [password, setPassword] = useState('');
    const [enterPassWord, setEnterPassWord] = useState('');

    const [isComFirmPass, setIsComFirmPass] = useState(true);
    const [showPassWord, setShowPassWord] = useState(false);

    const handleChangePassWord = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeEnterPW = (e) => {
        setEnterPassWord(e.target.value);
    };

    const handleRememberMeChange = () => {
        setShowPassWord(!showPassWord);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
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
                        <InputSDT className={cx('input')} label={false}>
                            <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                        </InputSDT>
                    </Form.Group>
                    <Form.Group className={cx('input-box')}>
                        <InputEmail className={cx('input')} label={false}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        </InputEmail>
                    </Form.Group>

                    <div className={cx('input-box')}>
                        <input
                            required
                            type={showPassWord ? 'text' : 'password'}
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
                                onChange={handleRememberMeChange}
                                preventDefault
                                className={cx('input-checkbox')}
                            />
                            Show password
                        </label>
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
