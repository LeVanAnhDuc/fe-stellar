import classNames from 'classnames/bind';
import styles from './PasswordAndSecurity.module.scss';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import InputSDT from '../../components/InputBootstrap/SDT';

const cx = classNames.bind(styles);

function PasswordAndSecurity() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
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
                            <InputSDT className={cx('input')} />
                        </Form.Group>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>Mật khẩu cũ</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter your first and last name"
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>Mật khẩu mới</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter your first and last name"
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter your first and last name"
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                        </Form.Group>
                        <Button className={cx('btn')} type="button">
                            Lấy OTP
                        </Button>
                        <Form.Group className={cx('input-box')} as={Col} md="12">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control
                                className={cx('input')}
                                required
                                type="text"
                                placeholder="Enter your first and last name"
                            />
                            <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                        </Form.Group>

                        <Button className={cx('btn')} type="submit">
                            Cập nhật
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default PasswordAndSecurity;
