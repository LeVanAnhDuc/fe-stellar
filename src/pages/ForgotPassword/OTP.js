import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
// import Button from '../../components/Button';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const cx = classNames.bind(styles);

function OTP() {
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
        <>
            <div className={cx('wrapper')}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={cx('form')} action="/">
                    <h1>Login</h1>
                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <Form.Control required type="text" placeholder="OTP" className={cx('input')} />
                        <FontAwesomeIcon icon={faUserCheck} className={cx('icon')} />
                    </Form.Group>
                    <Button type="submit" className={cx('btn-submit')}>
                        Send OTP
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default OTP;
