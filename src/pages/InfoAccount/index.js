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
import { userApi } from '../../apis/index.js';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function InfoAccount() {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState({});

    // call api
    const fetchUser = async () => {
        const res = await userApi.getProfile();
        const value = res.data.data;
        setUser({
            userName: value.userName,
            phoneNumber: value.phoneNumber,
            email: value.email,
            gender: value.gender,
            nationality: value.nationality,
            yearOfBirth: +value.yearOfBirth,
        });
    };

    const updateUser = async (email, userName, phoneNumber, gender, nationality, yearOfBirth) => {
        await userApi
            .updateProfile(email, userName, phoneNumber, gender, nationality, yearOfBirth)
            .then((response) => {
                toast.success(response.data.data);
            })
            .catch((error) => {
                toast.error(error.response?.data.message ?? 'Mất kết nối server!');
            });
    };

    useEffect(() => {
        let ignore = false;

        !ignore && fetchUser();

        return () => {
            ignore = true;
        };
    }, []);

    const handleChangeName = (e) => {
        setUser({
            ...user,
            userName: e.target.value,
        });
    };

    const handleChangeBirth = (e) => {
        setUser({
            ...user,
            yearOfBirth: e.target.value,
        });
    };

    const handleChangeSex = (e) => {
        setUser({
            ...user,
            gender: e.target.value,
        });
    };
    const handleChangeNationality = (e) => {
        setUser({
            ...user,
            nationality: e.target.value,
        });
    };

    const handleChangeEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value,
        });
    };
    const handleChangePhone = (e) => {
        setUser({
            ...user,
            phoneNumber: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        updateUser(user.email, user.userName, user.phoneNumber, user.gender, user.nationality, user.yearOfBirth);
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
                                    value={user.userName}
                                    onChange={handleChangeName}
                                />
                                <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <Form.Label>Năm sinh</Form.Label>
                                <SelectYearOfBirth
                                    className={cx('input')}
                                    value={user.yearOfBirth}
                                    handleChangeBirth={handleChangeBirth}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Enter number (0 - Current year)
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Select className={cx('input')} onChange={handleChangeSex} value={user.gender}>
                                    <option value="">Enter gender</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please choose a gender.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <Form.Label>Quốc tich</Form.Label>
                                <SelectCountry
                                    className={cx('input')}
                                    value={user.nationality}
                                    handleChangeNationality={handleChangeNationality}
                                />
                                <Form.Control.Feedback type="invalid">Not empty</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <InputEmail
                                    className={cx('input')}
                                    value={user.email}
                                    handleChangeEmail={handleChangeEmail}
                                />
                            </Form.Group>

                            <Form.Group className={cx('input-box')} as={Col} md="6">
                                <InputSDT
                                    className={cx('input')}
                                    value={user.phoneNumber}
                                    handleChangePhone={handleChangePhone}
                                />
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
