import classNames from 'classnames/bind';
import styles from './InfoAccount.module.scss';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';
import SelectYearOfBirth from './YearOfBirth';
import SelectCountry from './Natonal';
import InputEmail from '../../components/InputBootstrap/Email';
import InputSDT from '../../components/InputBootstrap/SDT';

const cx = classNames.bind(styles);

function InfoAccount() {
    const [validated, setValidated] = useState(false);

    const [sex, setSex] = useState('');

    const handleChangeSex = (e) => {
        setSex(e.target.value);
    };

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
                    <strong className={cx('strong-1')}>THÔNG TIN TÀI KHOẢN</strong>
                </div>
            </div>
            <div className={cx('section-2')}>
                <div className={cx('back-ground')}>
                    <Form className={cx('form')} noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-2">
                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control
                                    className={cx('input')}
                                    required
                                    type="text"
                                    placeholder="Enter your first and last name"
                                />
                                <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <Form.Label>Năm sinh</Form.Label>
                                <SelectYearOfBirth className={cx('input')} />
                                <Form.Control.Feedback type="invalid">
                                    Enter number (0 - Current year)
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Select className={cx('input')} onChange={handleChangeSex} value={sex}>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please choose a gender.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <Form.Label>Quốc tich</Form.Label>
                                <SelectCountry className={cx('input')} />
                                <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <InputEmail className={cx('input')} />
                            </Form.Group>

                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <InputSDT className={cx('input')} />
                            </Form.Group>
                        </Row>
                        <Button className={cx('btn')} type="submit">
                            Cập nhật
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default InfoAccount;
