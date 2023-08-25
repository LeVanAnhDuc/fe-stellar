import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import Button from '../../components/Button';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import InputEmail from '../../components/InputBootstrap/Email';

const cx = classNames.bind(styles);

function ForgotPassword() {
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
                    <h1>Forgot Password</h1>

                    <Form.Group controlId="validationCustom01" className={cx('input-box')}>
                        <InputEmail className={cx('input')} label={false}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        </InputEmail>
                    </Form.Group>

                    <Button type="submit" className={cx('btn-submit')}>
                        Kiểm tra
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default ForgotPassword;
