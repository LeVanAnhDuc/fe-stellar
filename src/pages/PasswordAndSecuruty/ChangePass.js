import classNames from 'classnames/bind';
import styles from './PasswordAndSecurity.module.scss';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { authApi } from '../../apis';

import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function ChangePass() {
    const navigate = useNavigate();
    const notificationRef = useRef(null);
    const [validated, setValidated] = useState(false);
    const [oldpass, setOldpass] = useState('');
    const [newpass, setNewpass] = useState('');
    const [checknewpass, setChecknewpass] = useState('');
    const [otp, setOtp] = useState('');
    const [validatedPass, setValidatedPass] = useState(false);
    const [isComFirmPass, setIsComFirmPass] = useState(true);

    const handleOldpassChange = (event) => {
        setOldpass(event.target.value);
    };
    const handleNewpassChange = (event) => {
        setNewpass(event.target.value);
    };
    const handleChecknewpassChange = (event) => {
        setChecknewpass(event.target.value);
    };
    const handleOTPChange = (event) => {
        setOtp(event.target.value);
    };
    const validatePassword = () => {
        const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        setValidatedPass(passwordPattern.test(newpass));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        event.stopPropagation();
        if(newpass === checknewpass){
            setIsComFirmPass(true);
            if(validatedPass)
            {
                await authApi.resetPass(oldpass, newpass, checknewpass, otp)
                .then((response) => {
                    notificationRef.current.classList.remove(cx('hidden'));
                    notificationRef.current.classList.add(cx('success'));
                    notificationRef.current.textContent = response.data.message;
                    navigate('/');
                })
                .catch((error) => {
                    notificationRef.current.classList.remove(cx('hidden'));
                    notificationRef.current.classList.add(cx('error'));
                    notificationRef.current.textContent = error.response.data.message;
                })

            }

        }
        else{
            setIsComFirmPass(false);
        }


    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-1')}>
                <div className={cx('back-ground')}>
                    <strong className={cx('strong-1')}>MẬT KHẨU & BẢO MẬT</strong>
                </div>
            </div>
            <div className={cx('section-2')}>
                <div className={cx('back-ground')}>
                    <Form className={cx('form')} noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>Mật khẩu cũ</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter your old password"
                                value={oldpass}
                                onChange={handleOldpassChange}
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>Mật khẩu mới</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter your new password"
                                value={newpass}
                                onChange={handleNewpassChange}
                                onBlur={validatePassword}
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter confirm new password"
                                value={checknewpass}
                                onChange={handleChecknewpassChange}
                                onBlur={validatePassword}
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter your first and last name"
                                value={otp}
                                onChange={handleOTPChange}
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                            {!isComFirmPass && <div className={cx('notyfi-danger')}>Not match password</div>}
                        </Form.Group>
                        <div ref={notificationRef} className={cx('notification', 'hidden')}></div>
                        <Button className={cx('btn')} type="submit">
                            Cập nhật
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ChangePass;
